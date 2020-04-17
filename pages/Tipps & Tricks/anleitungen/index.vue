<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Anleitungen</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Hier sind all unsere Anleitungen aufgelistet.
        </b-col>
      </b-row>
    </Intro>
    <AnleitunsVerzeichnis />
  </div>
</template>

<script>
import AnleitunsVerzeichnis from '~/components/AnleitunsVerzeichnis'
import Intro from '~/components/intro'

export default {
  name: 'Anleitungen',
  components: { AnleitunsVerzeichnis, Intro }
}
</script>

<style scoped></style>
