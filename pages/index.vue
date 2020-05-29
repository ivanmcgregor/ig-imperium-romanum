<template>
  <div>
    <Intro>
      <h2 class="mb-5">SALVETE, AMICI</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Salvete Freunde der römischen Antike ! <br />
          Wir sind eine römische Interessengemeinschaft, die römische
          Bevölkerung im Zivilen wie auch militärischen Bereich um die Zeit
          150n. Chr in der Region Civitas Vangionum (Heutiges Rheinhessen)
          darzustellen versucht. Dabei beziehen wir uns auf regionale Funde, auf
          Buchquellen, Aussagen und Berichte von Archäologen sowie Autodidaktik
          die wir selber im Ausleben antiker Lebensweise betreiben.
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
          <LinkImage
            to="/Tipps & Tricks"
            :bg-image="require(`assets/rüstungen.jpg`)"
            >Anschaffungsratgeber</LinkImage
          >
        </b-col>
        <b-col cols="12" md="6">
          <LinkImage
            to="/Tipps & Tricks/anleitungen"
            :bg-image="require(`assets/anleitungen/scutum-außen-teaser.jpeg`)"
            >Zu unseren (Bau)anleitungen</LinkImage
          >
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
import LinkImage from '~/components/LinkImage'
export default {
  components: { Intro, ButtonWrapper, Termine, Section, LinkImage },
  head() {
    return {
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Webseite der IG Romanum'
        },
        {
          hid: 'google-site-verification',
          property: 'google-site-verification',
          content: '8LJIXqDQlIaKG9Bh_Dd1voRp7aNbhbS6mlmDGChFuKk'
        }
      ]
    }
  }
}
</script>
