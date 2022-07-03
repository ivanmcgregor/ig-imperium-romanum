<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Links</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Hier findest du einige von uns empfohlene und auch selbst genutzte
          Seiten um dich mit römischen Ausrüstungen und Gegenständen
          einzudecken. Wir beraten auch gerne, wenn es um spezielle
          Anschaffungen geht, da wir mittlerweile viele Erfahrungen gesammelt
          haben was die Qualität und Verarbeitung angeht, und wo die
          Unterschiede liegen. Einen groben Zusammenschnitt was man sich wann
          zulegen sollte findest du unter unserem
          <nuxt-link to="/Tipps & Tricks/anschaffungsratgeber"
            >Anschaffungsratgeber</nuxt-link
          >.
        </b-col>
      </b-row>
    </Intro>
    <b-container>
      <h3 class="h4 mt-4">Händler</h3>
      <ul class="mb-4">
        <li>
          <a target="_blank" href="https://www.der-roemer-shop.de/"
            >Der Römer Shop</a
          >
        </li>
        <li>
          <a target="_blank" href="http://www.kayserstuhl.de/">Kayserstuhl</a>
          (Ein Besuch zum Anprobieren kann sich lohnen)
        </li>
        <li>
          <a target="_blank" href="http://www.aus-omas-truhe.de/">Omas Truhe</a>
        </li>
        <li>
          <a target="_blank" href="http://www.battlemerchant.com/"
            >Battle Merchant</a
          >
        </li>
        <li>
          <a target="_blank" href="https://www.peraperis.com/">Pera Peris</a>
        </li>
        <li>
          <a target="_blank" href="https://www.cultellus.de/"
            >Der Messermacher Cultellus</a
          >
          (antwortet nicht immer...)
        </li>

        <li>
          <a
            target="_blank"
            href="https://www.fabri-armorum.com/en/c/other-swords/ancient-swords/"
            >Schwerter von Krondak</a
          >
          (Solide, schaukampffähige Schwerter)
        </li>
      </ul>

      <h3 class="h4 mt-4">Freunde</h3>
      <ul class="mb-4">
        <li>
          <a target="_blank" href="http://castrum-callido.com/"
          >Verein Für Erlebbare Geschichte der Römischen Antike CASTRUM
            CALLIDO e.V
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/pictrail_de"
          >Christine Lincke (Photografin)
          </a>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  name: 'LinksVue',
  components: { Intro },
  head() {
    return {
      title: 'Links',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Von der IG Romanum weiter empfohlene Seiten'
        }
      ]
    }
  }
}
</script>
