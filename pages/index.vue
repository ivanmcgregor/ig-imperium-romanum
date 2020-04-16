<template>
  <div>
    <Intro>
      <h2 class="mb-5">SALVETE, AMICI</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Salvete Freunde der römischen Antike ! <br />
          Wir sind eine römische Interessengemeinschaft die römische Bevölkerung
          im Zivilen wie auch militärischen Bereich um die Zeit 150n. Chr in der
          Region Civitas Vangionum (Heutiges Rheinhessen) darzustellen versucht.
          Dabei beziehen wir uns auf regionale Funde, auf Buchquellen, Aussagen
          und Berichte von Archäologen sowie Autodidaktik die wir selber im
          Ausleben antiker Lebensweise betreiben.
        </b-col>
      </b-row>

      <button-wrapper to="/galerie">Bildergalerien</button-wrapper>
      <button-wrapper to="/mitglieder" last-item
        >Unsere Mitglieder</button-wrapper
      >
    </Intro>

    <Section title="Nächste Veranstaltungen">
      <Termine preview></Termine>
      <button-wrapper to="/termine"
        >Alle Veranstaltungen ansehen</button-wrapper
      >
    </Section>

    <Section title="Tipps und Tricks">
      <b-row>
        <b-col cols="12" md="6">
          <b-button variant="primary" size="lg" to="/Tipps & Tricks" block
            >Anschaffungsratgeber</b-button
          >
          <b-img
            fluid
            :src="require(`assets/rüstungen.jpg`)"
            class="ig-teaser-img"
          ></b-img>
        </b-col>
        <b-col cols="12" md="6">
          <b-button
            variant="primary"
            size="lg"
            to="/Tipps & Tricks/scutum"
            block
            >Bauanleitung Scutum</b-button
          >
          <b-img
            fluid
            :src="require(`assets/anleitungen/scutum-außen-teaser.jpeg`)"
            class="ig-teaser-img"
          ></b-img>
        </b-col>
      </b-row>
    </Section>
  </div>
</template>

<script>
import Intro from '~/components/intro'
import ButtonWrapper from '~/components/ButtonWrapper'
import Termine from '~/components/Termine'
import Section from '~/components/section'
export default {
  components: { Intro, ButtonWrapper, Termine, Section }
}
</script>

<style lang="scss" scoped>
.ig-teaser-img {
  max-width: 100%;
  height: 240px;
  opacity: 0.5;
}
</style>
