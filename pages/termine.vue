<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Termine und Veranstaltungen</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Zunächst warten wir ab, was COVID-19 macht, entsprechend werden ggf.
          Termine noch abgesagt.
        </b-col>
      </b-row>
    </Intro>

    <TerminComponent />
  </div>
</template>

<script>
import Intro from '~/components/intro'
import TerminComponent from '~/components/Termine'

export default {
  name: 'Termine',
  components: { Intro, TerminComponent }
}
</script>

<style scoped></style>
