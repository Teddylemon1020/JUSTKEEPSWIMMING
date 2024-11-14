#include <SPI.h>
#include <LoRa.h>
#include <TinyGPS++.h>
#include <SoftwareSerial.h>

// Button pins
const int button1Pin = 2;
const int button2Pin = 3;
const int button3Pin = 4;
const int button4Pin = 5;
const int button5Pin = 6; 


TinyGPSPlus gps;
SoftwareSerial gpsSerial(12, 13);  // RX, TX for GPS

const long frequency = 915E6;  

void setup() {
  Serial.begin(9600);
  gpsSerial.begin(9600);
  
  // Initialize LoRa
  if (!LoRa.begin(frequency)) {
    Serial.println("LoRa initialization failed!");
    while (1);
  }
  Serial.println("LoRa initialized!");


  pinMode(button1Pin, INPUT_PULLUP);
  pinMode(button2Pin, INPUT_PULLUP);
  pinMode(button3Pin, INPUT_PULLUP);
  pinMode(button4Pin, INPUT_PULLUP);
  pinMode(button5Pin, INPUT_PULLUP);
}

void loop() {

  while (gpsSerial.available() > 0) {
    gps.encode(gpsSerial.read());
  }

  if ((digitalRead(button1Pin) == LOW) && (digitalRead(button5Pin) == LOW)) {
    sendEmergency("Fire");
  } else if ((digitalRead(button2Pin) == LOW) && (digitalRead(button5Pin) == LOW)) {
    sendEmergency("Medical");
  } else if ((digitalRead(button3Pin) == LOW) && (digitalRead(button5Pin) == LOW)) {
    sendEmergency("Police");
  } else if ((digitalRead(button4Pin) == LOW) && (digitalRead(button5Pin) == LOW)) {
    sendEmergency("Other Emergency");
  }
}

void sendEmergency(const String &emergencyType) {
  // Ensure we have valid GPS data
  if (gps.location.isValid()) {
    String message = emergencyType + " at ";
    message += "Lat: " + String(gps.location.lat(), 6);
    message += ", Lon: " + String(gps.location.lng(), 6);


    LoRa.beginPacket();
    LoRa.print(message);
    LoRa.endPacket();

    Serial.println("Sent: " + message);
  } else {
    Serial.println("Waiting for GPS signal...");
  }

  delay(500);
}
