<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Die Feminalia</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Nördlich der Alpen waren Hosen im Winter schlicht praktisch. Die
            römischen Soldaten haben sich dieser Mode im Laufe der Zeit
            angepasst. Es sollte allerdings noch länger dauern, bis diese Mode
            in Rom ankam und wurde dort noch als barbarisch betrachtet, während
            die Soldaten schon die Wärme von Hosen genossen.
          </p>
        </b-col>
      </b-row>
    </Intro>

    <Section title="Anfertigen von Feminalia">
      <h3 class="h4 mt-4">1. Variante</h3>
      <b-img
        alt="Nicos Anleitung für Feminalia"
        :src="require('assets/anleitungen/nicos_feminalia.jpg')"
        fluid
      />

      <h3 class="h4 mt-4">2. Variante</h3>
      <p>
        Alternativ kannst du auch andere für die Zeit übliche Schnittmuster
        verwenden. Es ist davon auszugehen, dass der Schnitt der Thorsberghose
        auch schon zu jener Zeit verwendet wurde und sich Legionäre bei lokalen
        Händlern eingedeckt haben. Ich habe
        <a target="_blank"
          href="http://www.shelaghlewins.com/reenactment/thorsbjerg_construction/thorsbjerg_trews_construction.htm"
          >diese Anleitung</a
        >
        verwendet.
      </p>
    </Section>
  </div>
</template>

<script>
import Intro from '~/components/intro'
import Section from '~/components/section'

export default {
  name: 'Feminalia',
  components: { Intro, Section }
}
</script>

<style scoped></style>
