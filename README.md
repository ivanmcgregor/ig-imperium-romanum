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


