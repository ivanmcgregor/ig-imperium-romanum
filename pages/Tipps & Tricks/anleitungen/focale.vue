<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Die Focale</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Dieser Schal dient in erster Linie dem Schutz des Trägers,
            insbesondere gegen das Scheuern der eigenen Rüstung. Jedoch kann es
            auch beispielsweise als Wundverband verwendet werde. Insgesamt ist
            die Focale auch ein Erkennungsmerkmal eines Soldaten. Es gibt die
            Theorie, dass Soldaten dieses Tuch weiter trugen, bis daraus die
            heutige Kravatte wurde.
          </p>
        </b-col>
      </b-row>
    </Intro>

    <Section title="Anfertigen von Focale">
      <b-img
        alt="Nicos Anleitung für die Focale"
        :src="require('assets/anleitungen/nicos_focale.jpg')"
        fluid
      />
    </Section>
  </div>
</template>

<script>
import Intro from '~/components/intro'
import Section from '~/components/section'

export default {
  name: 'Focale',
  components: { Intro, Section },
  head() {
    return {
      title: 'Focale',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Anleitung für Focale der IG Romanum'
        }
      ]
    }
  }
}
</script>
