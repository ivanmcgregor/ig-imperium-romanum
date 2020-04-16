<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Unsere Mitglieder</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Text für Mitglieder
        </b-col>
      </b-row>
    </Intro>

    <b-row
      v-for="member in members"
      :key="member.key"
      cols="1"
      cols-sm="2"
      cols-md="3"
    >
      <b-col>
        <b-img :src="require(`assets/mitglieder/PB-${member.img}.jpg`)" />
      </b-col>
      <b-col>
        <h3>{{ member.name }}</h3>
        <p>{{ member.text }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  name: 'IndexVue',
  components: { Intro },
  data: () => ({
    members: [
      {
        key: 'nico',
        img: 'Nico',
        name: 'Optio Nico',
        text:
          'Man munkelt er würde mit seinem Helmbusch eine Kriegsnarbe verstecken.'
      },
      {
        key: 'fabian',
        img: 'Fabian',
        name: 'Skriptorius Fabius',
        text:
          'Behauptungen nach ist er der einzige der Truppe, der schreiben kann.'
      },
      {
        key: 'manu',
        img: 'Manu',
        name: 'Legionär Manus',
        text: 'Sie nannten ihn Legionär Hand.'
      },
      {
        key: 'thomas',
        img: 'Thomas',
        name: 'Legionär Thomasus',
        text: 'Lorem ipsum Thomasus textus.'
      },
      {
        key: 'franzi',
        img: 'Franzi',
        name: 'Bürgerin Franziska',
        text: 'Lorem ipsum Franziska textus.'
      },
      {
        key: 'andre',
        img: 'Andre',
        name: 'Legionär Andreus',
        text: 'Lorem ipsum Andreus textus.'
      },
      {
        key: 'Max',
        img: 'Max',
        name: 'Legionär Maximilius',
        text: 'Lorem ipsum Maximilius textus.'
      },
      {
        key: 'Lars',
        img: 'Lars',
        name: 'Signifer Lars',
        text: 'Lorem ipsum Lars textus.'
      }
    ]
  })
}
</script>

<style scoped></style>
