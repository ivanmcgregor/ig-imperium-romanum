<template>
  <div>
    <Intro
      small
      :image-url="require('~/assets/banner/banner_tipps+tricks.jpg')"
    >
      <h2 class="mb-5">Tipps und Tricks</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Salvete Rekruten und Neueinsteiger ins Römerhobby. In diesem Bereich
            befindet sich der von unserer Gruppe erarbeitete Wissensfundus. So
            haben wir beispielsweise einen bebilderten Anschaffungsratgeber.
            Dieser hilft, einen Überblick zu gewinnen, was welche Gegenstände in
            welcher Reihenfolge angeschafft werden sollten.
          </p>
          <button-wrapper to="/Tipps & Tricks/anschaffungsratgeber"
            >Zum Anschaffungs<span class="d-inline-block d-md-none"
              >-<br /></span
            >ratgeber</button-wrapper
          >
          <p>
            Bei vielen Gegenständen, die man als Römer braucht, lohnt es sich,
            diese selbst herzustellen. Ganz vorne mit dabei ist hier die Tunika
            zu nennen, aber auch komplexere Gegenstände wurden von unserer
            Gruppe bereits erstellt. Zu vielen Projekten gibt es auch
            Anleitungen, die dazu einladen sollen, sich selbst daran zu
            versuchen.
          </p>
          <p>
            Für alles, was man nicht selbst herstellen kann oder möchte
            empfehlen wir, auf der
            <nuxt-link to="/Tipps & Tricks/links">Link Seite</nuxt-link>
            nachzuschauen.
          </p>
        </b-col>
      </b-row>
    </Intro>
    <AnleitunsVerzeichnis />
  </div>
</template>

<script>
import AnleitunsVerzeichnis from '~/components/AnleitunsVerzeichnis'
import ButtonWrapper from '~/components/ButtonWrapper'
import Intro from '~/components/intro'

export default {
  name: 'TippsUndTricks',
  components: { AnleitunsVerzeichnis, ButtonWrapper, Intro },
  head() {
    return {
      title: 'Tipps und Tricks',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Tipps, Tricks und Anleitungen der IG Romanum'
        }
      ]
    }
  }
}
</script>
