<template>
  <div>
    <h2>Termine und Veranstaltungen</h2>

    Zunächst warten wir ab, was COVID-19 macht, entsprechend werden ggf. Termine
    noch abgesagt.

    <TerminComponent />
  </div>
</template>

<script>
import TerminComponent from '~/components/Termine'
export default {
  name: 'Termine',
  components: { TerminComponent }
}
</script>

<style scoped></style>
