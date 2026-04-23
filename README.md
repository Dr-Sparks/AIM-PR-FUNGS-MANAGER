# AIM Prüfungs-Manager

Der AIM Prüfungs-Manager hilft dabei, Fragen zu verwalten, Weiterbildungsgänge pro Semester abzubilden, Prüfungen zusammenzustellen, Prüfungen zu speichern und Backups zu importieren oder zu exportieren.

## Empfohlener Weg: Fertige App benutzen

Wenn eine fertige Version bereitgestellt wurde, ist das der einfachste Weg.

### Mac oder Windows
1. Auf GitHub in den Bereich `Releases` gehen
2. Die passende Datei für dein Gerät herunterladen
3. Die ZIP-Datei entpacken
4. Den entpackten Ordner öffnen
5. Die App starten

Vorteil:
- kein Node nötig
- keine Terminal-Befehle nötig
- direkt startbar wie ein normales Programm

## Alternative: Projektordner starten

Diesen Weg nur verwenden, wenn keine fertige App-Datei vorhanden ist.

### 1. Projekt herunterladen
1. Auf GitHub oben auf `Code` klicken
2. `Download ZIP` wählen
3. Die ZIP-Datei herunterladen
4. Die ZIP-Datei entpacken

### 2. Voraussetzungen

Für diesen Weg muss `Node.js` auf dem Computer installiert sein.

### 3. App starten

#### Mac
1. Den entpackten Ordner öffnen
2. Auf `start-mac.command` doppelklicken
3. Warten, bis sich der Browser öffnet
4. Falls der Browser nicht automatisch öffnet:
   `http://localhost:5173` manuell in Safari oder Chrome eingeben

Hinweis für Mac:
Wenn macOS beim ersten Start warnt, mit Rechtsklick auf `start-mac.command` klicken und `Öffnen` wählen.

#### Windows
1. Den entpackten Ordner öffnen
2. Auf `start-windows.bat` doppelklicken
3. Warten, bis sich der Browser öffnet
4. Falls der Browser nicht automatisch öffnet:
   `http://localhost:5173` manuell im Browser eingeben

## Was die App macht

### Fragen Datenbank
- Alle Fragen an einem Ort verwalten
- Fragen suchen, filtern, bearbeiten, importieren und exportieren
- Arbeit direkt in der App oder in Excel möglich

### Weiterbildungsgänge
- Pro Weiterbildungsgang 6 Semester verwalten
- Pro Semester immer 4 Module erfassen
- Jahr, Dozent/in und Kursname pflegen
- Normale und kompakte Semesteransicht verfügbar

### Prüfung erstellen
- Weiterbildungsgang auswählen
- Relevante Module auswählen
- Fragen werden automatisch passend zusammengestellt
- Danach kann die Prüfung exportiert, gespeichert oder weiterbearbeitet werden

### Export & Download
- Prüfung als TXT exportieren
- Prüfung als PDF drucken
- Fertige Prüfung speichern und direkt eine neue starten
- Gespeicherte Prüfungen später wieder öffnen und weiterbearbeiten

### Hilfe & Anleitung
- Testportal-Handbuch
- AIM Prüfungs-Manager-Handbuch
- Eigene Handbücher erstellen
- Handbücher mit Bildern exportieren und importieren

## Wo die Daten gespeichert werden

Die App speichert die Daten lokal im Browser auf diesem Computer.

Das bedeutet:
- Die Daten sind automatisch gespeichert
- Die Daten sind nicht automatisch auf anderen Geräten
- Für Austausch oder Sicherung sollte immer `Datensicherung` verwendet werden

## Datensicherung

In der App gibt es im Dashboard den Bereich `Datensicherung`.

Dort kann man:
- `💾 Jetzt sichern`
- `↑ JSON laden`
- `↓ JSON exportieren`
- `↓ Excel exportieren`
- `↑ Excel importieren`

Die Backups enthalten:
- Fragen
- Weiterbildungsgänge
- Semesteransicht
- gespeicherte Prüfungen
- aktuelle offene Prüfung

## Desktop-App erstellen

Für Personen, die die App selbst als richtige Desktop-App bauen möchten:

### Mac
- `npm run build:desktop:mac`

### Windows
- `npm run build:desktop:win`

Die fertigen Dateien landen danach im Ordner `release`.

## Leere Startdateien

Im Projekt liegen zwei leere Startdateien:
- `AIM_Leervorlage.json`
- `AIM_Leervorlage.xlsx`

Diese Dateien sind dafür gedacht, die App leer zu starten oder eine neue Datenbasis über `Datensicherung` zu importieren.

## Empfohlener einfacher Ablauf
1. App starten
2. Falls nötig leere Vorlage importieren
3. Fragen Datenbank pflegen
4. Weiterbildungsgänge pflegen
5. Prüfung erstellen
6. Prüfung speichern oder exportieren
7. Regelmässig Backup machen
