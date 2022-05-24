<template>
  <div>
    <div v-if="preview" class="ig-bg-img-teaser mb-4">
      <b-row>
        <b-col
          v-for="termin in terminVorschau"
          :key="termin.key"
          cols="12"
          sm="6"
          md="4"
        >
          <div class="ig-border-box text-center">
            <span v-if="termin.bis" class="text-primary"
              >{{ termin.von }} - {{ termin.bis }}</span
            >
            <span v-else class="text-primary">{{ termin.von }}</span>
            <br />
            <span>{{ termin.titel }}</span>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-container v-else>
      <div v-for="termin in termine" :key="termin.key">
        <h3 class="h4 text-center mt-5">
          {{ termin.titel }}
        </h3>
        <p class="text-center">
          <span v-if="termin.bis" class="text-primary"
            >{{ termin.von }} - {{ termin.bis }}</span
          >
          <span v-else class="text-primary">{{ termin.von }}</span>

          <span v-if="termin.beschreibung" class="w-50 mx-auto">
            <br />{{ termin.beschreibung }}
          </span>
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash'

const kalender = [
  {
    time: '2018-01-01',
    von: '01.01.2018',
    bis: '03.01.2018',
    titel: 'vergangener Termin',
    beschreibung: 'Er wird automatisch raus gefiltert, dient aber als Beispiel'
  },
  {
    time: '2022-04-09',
    von: '09.04.2022',
    bis: '09.04.2022',
    titel: 'Museumsbesuch',
    beschreibung: 'Gemeinsamer Ausflug in ein Römermuseum'
  },
  {
    time: '2022-04-15',
    von: '15.04.2022',
    bis: '17.04.2022',
    titel: 'Probelager',
    beschreibung:
      'Wir nutzen dieses Event um unsere Ausrüstung vor der Saison zu Benutzen.'
  },
  {
    time: '2022-05-27',
    von: '26.05.2022',
    bis: '29.05.2022',
    titel: 'Spektakulum Worms',
    beschreibung: 'Wie immer im Frühmittelalter bereich'
  },
  {
    time: '2022-06-03',
    von: '03.06.2022',
    bis: '03.06.2022',
    titel: 'Münzenberg',
    beschreibung: 'Tagesgäste ohne Lagern'
  },
  {
    time: '2022-07-08',
    von: '08.07.2022',
    bis: '10.07.2022',
    titel: 'Großwallstadt',
    beschreibung: 'Premiere für uns hier zu lagern, wir freuen uns schon!'
  },
]

export default {
  name: 'Termine',
  props: {
    preview: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    termine() {
      const processed = kalender.map(
        ({ time, von, bis, titel, beschreibung }, i) => {
          return {
            time: new Date(time).getTime(),
            key: `${time}-${i}`,
            von,
            bis,
            titel,
            beschreibung
          }
        }
      )

      // aussortieren von abgelaufenen Daten
      const now = new Date().getTime()
      const filtered = _.filter(processed, (entry) => entry.time > now)

      // sortieren nach von datum
      return _.sortBy(filtered, ['time'])
    },
    terminVorschau() {
      // nur die ersten 3 Termine in der Vorschau
      return this.termine.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.ig-bg-img-teaser {
  padding: 160px 30px;
  background-image: url('~assets/kampflinie.jpg');
  background-position: center center;
  background-size: cover;

  .ig-border-box {
    padding: 15px;
    height: 100%;
  }
}
</style>
