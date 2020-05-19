<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Die Penula</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Hier gibt es verschiedene Typen, bei dem der Mantel eine eckige,
            halbkreisförmige, oder runde Grundform hatte. Als Material sollte
            ein dicker gewalkter Wollstoff (z.B. Loden) verwendet werden. Ein
            Mantel war nicht nur im Winter, sondern auch bei schlechtem Wetter
            ein Muss.
          </p>
        </b-col>
      </b-row>
    </Intro>

    <Section title="Anfertigen von Mänteln">
      <h3 class="h4 mt-4">1. Variante</h3>
      <b-img
        alt="Nicos Anleitung für die Penula"
        :src="require('assets/anleitungen/nicos_penula.jpg')"
        fluid
      />

      <h3 class="h4 mt-4">2. Variante</h3>
      <p>
        Und eine
        <a target="_blank" href="http://www.romanarmy.net/howto.shtml#sagum"
          >alternative Anleitung</a
        >. Wir haben Stoff von 140cm auf 300cm als Basis genommen, den Halbkreis
        ausgeschnitten und aus den Reststücken jeweils ein Quadrat, welches
        zusammengenäht die Kapuze ergibt.
      </p>
    </Section>
  </div>
</template>

<script>
import Intro from '~/components/intro'
import Section from '~/components/section'

export default {
  name: 'Penula',
  components: { Intro, Section },
  head() {
    return {
      title: 'Penula',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Anleitung für Penula der IG Romanum'
        }
      ]
    }
  }
}
</script>
