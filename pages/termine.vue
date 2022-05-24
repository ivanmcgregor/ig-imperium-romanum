<template>
  <div>
    <Intro small :image-url="require('~/assets/banner/banner_termine.jpg')">
      <h2 class="mb-5">Termine und Veranstaltungen</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Hier könnt ihr alle kommenden Termine sehen, bei denen wir entweder in vollem Glanz als Besucher, oder als Lagerer mit allem drum und dran zu sehen sein werden.
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
  components: { Intro, TerminComponent },
  head() {
    return {
      title: 'Termine',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Anstehende Termine der IG Romanum'
        }
      ]
    }
  }
}
</script>
