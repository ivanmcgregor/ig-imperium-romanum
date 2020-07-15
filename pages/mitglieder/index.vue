<template>
  <div>
    <Intro small :image-url="require('~/assets/banner/banner_mitglieder.jpg')">
      <h2 class="mb-5">Unsere Mitglieder</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Hier sind alle aufgelistet, die momentan in der IG Imperium Romanum
            aktiv sind.
          </p>
          <p>
            Auch wenn die Liste aktuell viele Soldaten enthält, so freuen wir
            uns doch, wenn wir bald hoffentlich mehr der Zivilbevölkerung
            darstellen können.
          </p>
        </b-col>
      </b-row>
    </Intro>

    <div
      v-for="(memberGroup, index) in memberGroups"
      :key="index"
      class="ig-mosaic"
    >
      <b-container
        ><b-row>
          <b-col
            v-for="(member, idx) in memberGroup"
            :key="idx"
            cols="12"
            md="4"
            class="mb-3"
          >
            <div class="ig-border-box d-flex justify-content-center">
              <h3 class="mb-0 align-self-center">{{ member.name }}</h3>
            </div>
            <div class="ig-spacing">
              <div class="ig-img-overflow">
                <b-img
                  fluid
                  :src="require(`assets/mitglieder/${member.img}.jpg`)"
                />
              </div>
              <p class="mt-3">{{ member.text }}</p>
            </div>
          </b-col>
        </b-row></b-container
      >
    </div>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  name: 'IndexVue',
  components: { Intro },
  data: () => ({
    membersRaw: [
      {
        img: 'IGImperiumRomanum-4839',
        name: 'Optio Nicos',
        text:
          'Nach dem "überraschenden" Ableben des Zenturios vorläufiger Kopf der Truppe. Man munkelt er versteckt mittels dem Helmbusch eine alte Kriegsnarbe.'
      },
      {
        img: 'Fabian',
        name: 'Tesserarius Fabius',
        text:
          'Behauptungen nach ist er der einzige der Truppe, der schreiben kann. Zufällig muss dringend etwas geschrieben werden, wenn es harte Arbeit gibt...'
      },
      {
        img: 'Lars',
        name: 'Vexillifer Lars',
        text:
          'Er schwört darauf das Vexillium in der Not so rabiat zu verteidigen wie seinen Ruf als Frauenschwarm.'
      },
      {
        img: 'Thomas',
        name: 'Legionär Thomasus',
        text:
          'Erzählt gerne Geschichten über die Siege seiner Legion, auch wenn die Meisten davon freilich erfunden sind.'
      },
      {
        img: 'Nina',
        name: 'Bürgerin Nina',
        text:
          'Kameraden erzählen sich sie habe ein Warn-Mosaik eines Hundes vor ihrem Hof, das an Größe nur durch das Tier selbst übertroffen wird.'
      },
      // {
      //   img: 'Kristina',
      //   name: 'Bürgerin Kristina',
      //   text: 'Man sagt sie war eine angesehene römische Bürgerin, bis sie sich scheinbar in einen prahlerischen Legionär verguckte.'
      // },
      {
        img: 'Manu',
        name: 'Legionär Manus',
        text:
          'Sprichwörtlich die rechte Hand des Optios wenn es Aufgaben besonderer "Präzision" geht.'
      },
      {
        img: 'Franzi',
        name: 'Griechin Franzisca',
        text:
          'Bediente als Freigelassene Schankwirtin in der Nähe des Kastells indem sich Legionär Manus befand, der sie oft aufsuchte.'
      },
      {
        img: 'Andre',
        name: 'Auxiliar Andreus',
        text:
          'Ist als Kind in einen Kessel voller Mulsum gefallen, und lehrt seitdem die Barbaren das Fürchten.'
      },
      {
        img: 'Max',
        name: 'Legionär Maxentius',
        text: 'Gnade den Barbaren, wenn Sie die Mulsumlieferung überfallen.'
      }
    ]
  }),
  computed: {
    memberGroups() {
      const members = [].concat(this.membersRaw)
      const groups = []
      const times = Math.ceil(members.length / 3)
      for (let i = 0; i <= times; i++) {
        groups.push(members.splice(0, 3))
      }
      return groups
    }
  },
  head() {
    return {
      title: 'Mitglieder',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Mitglieder der IG Romanum'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ig-mosaic {
  background-image: url('~assets/mosaik.jpg');
  background-size: auto 60px;
  background-position: left top;
  background-repeat: repeat-x;

  .ig-border-box {
    text-align: center;
    height: 60px;
    h3 {
      font-size: 1.4rem;
    }
  }
  .ig-spacing {
    margin: 0 5px;
    .ig-img-overflow {
      max-height: 520px;
      overflow: hidden;
    }
  }
}
</style>
