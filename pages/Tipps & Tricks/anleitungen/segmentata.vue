<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Die Lorica Segmentata</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Die vermutlich prunkvollste und deshalb auch bei Darstellern
            beliebte Rüstung ist die Segmentrüstung. Diese Rüstung der schweren
            Infanterie funktioniert insbesondere mit dem Scutum: Der Schild
            schützt den Körper, alle Schläge, die über den Schild kommen werden
            vom ausgeprägten den Schulterschutz abgefangen. Im laufe der Zeit
            gab es verschiedene Typen dieser Rüstung, beschrieben in dem in der
            Szene bekannten Buch von M.C. Bishop zu
            <a
              target="_blank"
              href="https://www.researchgate.net/publication/301655364_Lorica_Segmentata_Volume_I_A_Handbook_of_Articulated_Roman_Plate_Armour"
              >Articulated Roman Plate Armor</a
            >. Das Buch enthält viele Beschreibungen und Zeichnungen.
          </p>
        </b-col>
      </b-row>
    </Intro>
    <Section title="Anfertigen einer Segmentata">
      <p>
        Wenn man eine Segmentata selbst herstellen will braucht man einiges an
        Werkzeug und Geduld, es gibt jedoch Anleitungen bei
        <a target="_blank" href="https://www.larp.com/legioxx/lorica.html"
          >Legio XX</a
        >
        und
        <a
          target="_blank"
          href="http://www.travelsoutwest.com/docs/seg_instr.pdf"
          >Alex Matras</a
        >. Mit dem Bau, der Reparatur und der Instandhaltung unserer Rüstungen
        haben wir aber auch in unserer Gruppe einen guten Wissensfundus
        aufgebaut.
      </p>
      <p>
        Die klare Empfehlung ist, zuerst einen Pappprototypen zu bauen, damit
        man die ungefähren Dimensionen und Anordnungen ausprobieren kann, bevor
        man sich ans Metall wagt. Und auf jeden Fall sollte man ein bisschen
        Puffer in der Breite einplanen, nicht dass einem die Rüstung dann (und
        sei es in ein paar Jahren) zu eng ist und man sie nicht tragen kann.
      </p>
    </Section>
    <Section title="Kauf einer Segmentata">
      <p>
        Vor dem Kauf sollte man sich sicher sein, welche Zeit man darstellen
        möchte, da es unterschiedliche Rüstungen zu unterschiedlichen Zeiten
        gab. Natürlich gibt es da auch eine Menge Überschneidungen und
        Ungewissheit, sodass man auch nicht vollends eingeschränkt ist. Vor dem
        Kauf sollte man idealerweise die unterschiedlichen Typen anprobieren, da
        sie unterschiedliche Passformen haben. Meist gibt es zudem bei vielen
        Händlern noch unterschiedliche Größen.
      </p>
      <p>
        Wenn man aber eine Rüstung kauft, so muss man (insbesondere bei den
        günstigeren Modellen) noch einige Anpassungen vornehmen, damit sie
        richtig sitzt. Wir haben den Eindruck, dass bei den Depeka Modellen über
        die letzten Jahre immer mehr gespart wird und die Qualität nachlässt.
        Einige Riemen und Stifte muss man von Werk aus erstmal austauschen, um
        eine tragbare Rüstung daraus zu machen. Auch sind die Platten oftmals
        nicht so gebogen, dass man eine Rüstung direkt tragen kann oder will.
        Hier ein Vergleich links vor, rechts nach Anpassungen.
      </p>
      <b-img fluid :src="require(`assets/rüstungen.jpg`)"></b-img>
    </Section>
  </div>
</template>

<script>
import Intro from '~/components/intro'
import Section from '~/components/section'

export default {
  name: 'LoricaSegmentata',
  components: { Intro, Section },
  head() {
    return {
      title: 'Lorica Segmentata',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Anleitung zur Lorica Segmentata der IG Romanum'
        }
      ]
    }
  }
}
</script>
