<template>
  <div class="ig-section">
    <div class="ig-mosaic mb-4">
      <b-container>
        <b-row>
          <b-col offset-md="2" md="8" class="ig-border-box">
            <h2 class="ig-section-heading">{{ title }}</h2>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <slot></slot>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-section {
  margin-bottom: $large-margin;
}

.ig-mosaic {
  background-image: url('~assets/mosaik.jpg');
  background-size: auto 60px;
  background-position: left center;
  background-repeat: repeat-x;

  .ig-section-heading {
    font-size: 2.2rem;
    margin-bottom: 0;
    text-align: center;
    padding: 20px;
  }
}
</style>
