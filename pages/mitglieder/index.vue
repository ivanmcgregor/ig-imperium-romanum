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

    <div v-for="memberGroup in memberGroups" class="ig-mosaic">
      <b-container
        ><b-row>
          <b-col v-for="member in memberGroup" cols="12" md="4" class="mb-3">
            <div class="ig-border-box d-flex justify-content-center">
              <h3 class="mb-0 align-self-center">{{ member.name }}</h3>
            </div>
            <div class="ig-spacing">
              <div class="ig-img-overflow">
                <b-img
                  fluid
                  :src="require(`assets/mitglieder/PB-${member.img}.jpg`)"
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
        img: 'Nico',
        name: 'Optio Nico',
        text:
          'Man munkelt er würde mit seinem Helmbusch eine Kriegsnarbe verstecken.'
      },
      {
        img: 'Fabian',
        name: 'Tesserarius Fabius',
        text:
          'Behauptungen nach ist er der einzige der Truppe, der schreiben kann.'
      },
      {
        img: 'Thomas',
        name: 'Legionär Thomasus',
        text: 'Lorem ipsum Thomasus textus.'
      },
      {
        img: 'Manu',
        name: 'Legionär Manus',
        text: 'Sie nannten ihn Legionär Hand.'
      },
      {
        img: 'Franzi',
        name: 'Bürgerin Franziska',
        text: 'Lorem ipsum Franziska textus.'
      },
      {
        img: 'Andre',
        name: 'Legionär Andreus',
        text: 'Lorem ipsum Andreus textus.'
      },
      {
        img: 'Max',
        name: 'Legionär Maximilius',
        text: 'Lorem ipsum Maximilius textus.'
      },
      {
        img: 'Lars',
        name: 'Signifer Lars',
        text: 'Lorem ipsum Lars textus.'
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
