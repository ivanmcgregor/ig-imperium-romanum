<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Anschaffungsratgeber</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Text für Galerien
        </b-col>
      </b-row>
    </Intro>
    <AnschaffungsratgeberComponent />
  </div>
</template>

<script>
import AnschaffungsratgeberComponent from '~/components/anschaffungsratgeber'
import Intro from '~/components/intro'

export default {
  name: 'Anschaffungsratgeber',
  components: { AnschaffungsratgeberComponent, Intro }
}
</script>

<style scoped></style>
