<template>
  <b-row :class="classString">
    <b-col offset-md="3" md="6">
      <b-button variant="primary" size="lg" :to="to" block
        ><slot></slot
      ></b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ButtonWrapper',
  props: {
    lastItem: {
      type: Boolean,
      default: false,
      required: false
    },
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    classString() {
      return this.lastItem ? '' : 'mb-4'
    }
  }
}
</script>
