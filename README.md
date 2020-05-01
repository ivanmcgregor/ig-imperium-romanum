# Website der IG Imperium Romanum

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Pflege und Verwaltung

### Ändern einer Seite

Alle Seiten befinden sich im `pages` Ordner. Jede Seite und jeder Ordner werden in der Seitenstruktur reflektiert. Die `index.vue` Seite ist immer die, die auch unter dem Ordnernamen aufgerufen wird.
Beispiel: `pages/mitglieder/index.vue` wird zu `/mitglieder`.

Der Text auf der Seite kann in der Regel in der zugehörigen Datei geändert werden. Diese startet mit einem `<template>...</template>`, in dem der normale Inhalt mit HTML eingefügt werden kann. Es empfiehlt sich, die [Bootstrap Helferklassen](https://getbootstrap.com/docs/4.4/utilities/position/) zu verwenden. Ansonsten nimmt das Template natürlich auch Vue inhalt an. 

### Seitenintros

Die meisten Seiten starten mit einem Intro element, welches ein Bild und Steinstruktur im Hintergrund enthält. Bis auf die Startseite wird dieses in der kleinen Ausprägung verwendet.
Zudem ist es auch möglich, das standard Hintergrundbild zu ändern, indem man den Pfad für ein anderes Bild an die Komponente übergibt:
```vue
<template>
  <div>
    <Intro small :image-url="require('~/assets/img_galerien.jpg')">
      Elemente, die im Intro verwendet werden.
    </Intro>
    <b-container>
      Sonstiger Seiteninhalt
    </b-container>
  </div>
</template>
```

### Termine

Termine werden in `components/Termine.vue` in dem JS Array von Objekten namens `kalender` gepflegt. Diese werden sowohl für die kleine Vorschau, als auch für die Detailansicht genutzt, sodass sie nur einmal gepflegt werden müssen. 
Weiterhin werden sie so aufbereitet, dass Termine in der Vergangenheit aussortiert werden und sie nach aufsteigendem Datum sortiert werden.

Ein Termin im Kalender kann so aussehen: 
```js
const kalender = [
  {
    time: '2020-09-18', // Datum für Sortierung
    von: '18.09.2020',  // Startdatum
    bis: '20.09.2020',  // Enddatum (optional)
    titel: 'Römer- & Frankenlager', // Titel
    beschreibung: 'Eine kurze Beschreibung' // Beschreibung (optional)
  },
  ...
];
```

### Galerien

Die Bilder aus den Galerien werden nicht über Webpack ausgeliefert, da dies komplikationen beim automatischen erkennen des Pfades im Code hervorruft. Stattdessen werden sie statisch ausgeliefert und sind deshalb im Ordner `static/Galerien`.
