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

Die Galerien werden automatisch aus der Datei `pages/galerie/galerien.js` erstellt. Dabei braucht jeder Eintrag eine bestimmte Struktur:
```js
export default [
  {
    link: '2019_Winterwanderung',
    title: 'Winterwanderung Donnersberg',
    date: '2019-12-08',
    description: 'Am 08.12.19',
    folder: 'Winterwanderung Donnersberg 08.12.19',
    coverFoto: 'DSC_1212XXXX.jpg',
    fotos: [
      'DSC_1170XX.jpg',
      'DSC_1202XX.jpg',
      'DSC_1212XXXX.jpg',
    ]
  },
  {
    // nächstes Objekt vom gleichen Aufbau
    // ...
  }
]
```
Der Name des Eintrags wird auch in der URL verwendet, weshalb ein kurzer titel wichtig ist. Die Reihenfolge der Links auf der Galerie Hauptseite wird durch das `date` Feld bestimmt. Das `date` Feld erwartet einen Inhalt im Format 'JJJJ-MM-TT' (ISO 8601). Aktuell sind sie chronologisch angeordnet, sodass die neusten Galerien zuerst kommen.
Jeder Eintrag muss einen `title` haben, welcher für den Link zur Galerie und als Titel der Galerie verwendet wird. Dieser sollte keine Zahlen enthalten, da sie von der Font in römische Lettern übersetzt werden (aber nicht smart genug, dass es Sinn ergibt). Zusätzlich kann noch eine Beschreibung des Events in der `description` angegeben werden.
Außerdem wird immer ein `coverFoto` benötigt, um beim Link und im Intro dieses Bild anzuzeigen. Das Bild muss im selben Ordner wie die Bilder der Galerie liegen. Es muss aber nicht in den Fotos der Galerie auftauchen! Die Bilder, die in der Galerie angezeigt werden, werden über `fotos` als Array angegeben. Bei den Fotos wird nur der Dateiname (samt Endung) angegeben. Der Ordner, in dem die Bilder liegen muss (exakt gleich geschrieben) in dem Attribut `folder` angegeben werden. Der Ordner muss sich dabei in `static/Galerien/` befinden.
