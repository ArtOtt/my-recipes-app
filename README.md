# Recipes App 

Abschlussprojekt, um das Wissen aus dem Coding Bootcamp umzusetzen.

## Funktionen

- Rezepte anzeigen lassen 
- Favoriten markieren
- Favoriten anzeigen 
- Nach Kategorien filtern  
- Login 
- Rezepte hinzufügen (folgt noch)  

## Project Setup

### Schritt 1.  API starten 
Folge den Anweisungen im folgenden Repository und komme danach wieder hierher zurück. 
```sh
https://github.com/coding-bootcamps-eu/project-tz-2024-05-recipes-api
```

### Schritt 2. Klonen
```sh
git clone git@github.com:coding-bootcamps-eu/project-tz-2024-05-recipes rezept-app
```

### Schritt 3. Abhängigkeiten installieren
```sh
cd rezept-app
npm install
```
### Schritt 4. Erstelle die `.env`-Datei:

Im Projekt-Ordner folgende .env Datei erstellen

```sh
touch .env
```
### Schritt 5. Kopiere den Inhalt in die .env Datei: 

```sh
VITE_API_URL=http://localhost:3010/
```
### Schritt 6. Starte die App in der Enwicklungsumgebung

```sh
npm run dev
```
------------------------------------
------------------------------------
### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
