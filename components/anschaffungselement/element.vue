<template>
  <div>
    <b-link>
      <b-img
        fluid
        :src="require(`assets/anschaffungsratgeber/AR-${imgSrc}.jpg`)"
        @click="toggleModal"
      ></b-img>
    </b-link>

    <b-button
      block
      variant="primary-outline"
      class="ig-button"
      @click="toggleModal"
      >{{ title }}</b-button
    >

    <b-modal v-model="showModal" :title="title" size="lg" hide-footer>
      <b-img
        fluid
        :src="require(`assets/anschaffungsratgeber/AR-${imgSrc}.jpg`)"
      ></b-img>
      <p class="mt-4">
        {{ text }}
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Element',
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data: () => ({
    showModal: false
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-button {
  font-family: $font-family-base;
}
</style>
