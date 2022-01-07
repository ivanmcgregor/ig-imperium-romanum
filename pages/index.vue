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

    <Section title="Anspruch der Gruppe">
      <p>
        Wir wollen antike Dinge durch aktives Benutzen und Erleben erforschen.
        Dabei bauen und fertigen wir viele Gegenstände des römischen Alltags,
        insbesondere dem eines Soldaten. Oft setzen wir auf Autodidaktik,
        insbesondere in Bereichen wie Kampftechniken, Schützen, Gesang, Kochen,
        Schmieden, Nähen usw.
      </p>

      <p>
        Da wir alle berufstätig sind, dabei aber keine Schneider: Maschinennähte
        sind für uns akzeptabel, wenn sie nicht überdeutlich sichtbar sind. Wir
        freuen uns aber sehr darüber, wenn ein Kleidungsstück authentisch ist.
        Bei der Stoffverarbeitung bevorzugen wir Leinen und Wollstoffe,
        insbesondere für Anfänger ist aber auch Baumwolle in Ordnung. Je weiter
        man in der Darstellung voran schreitet, desto mehr sollte man sich weg
        von Baumwolle orientieren.
      </p>
      <p>
        Moderne Materialien, die auch direkt als solche zu erkennen sind, sind
        in der Gruppe verpönt. Dazu zählen insbesondere Aluminium, Plastik und
        Polyester. Aber auch Hohlnieten sind nicht erwünscht.
      </p>
      <p>
        Wir orientieren unsere Darstellung an der Zeit um 150 nach Christus. Wir
        legen uns dabei bewusst nicht komplett fest und folglich sind für uns
        auch Darstellungen und Fundstücke, die etwa 20 Jahre davor oder danach
        datiert werden genehm. Etwas, das 100 Jahre davor oder danach datiert
        wird, passt allerdings nicht in den Rahmen. Wichtig ist vorrangig ein
        atmosphärisches, stimmiges, historisch korrektes Bild für den
        Normalbürger und für Römisch interessierte und belesene. Jedoch nicht
        für A-Päpste oder für Historiker, welche jede Niete genau datieren
        können und wollen. Schlussendlich soll es ein uns Spaß machendes Hobby
        sein, jedoch nicht unsere alleinige Lebensaufgabe.
      </p>
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
        }
      ]
    }
  }
}
</script>
