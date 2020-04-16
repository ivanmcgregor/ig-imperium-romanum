<template>
  <div class="ig-intro text-center">
    <div class="ig-mosaic"></div>
    <div class="ig-marble-1">
      <div class="ig-offset-image">
        <div class="container">
          <b-img
            fluid
            :src="require(`assets/banner.jpg`)"
            class="ig-img-cover"
          ></b-img>
        </div>
      </div>
    </div>
    <div class="ig-marble-2">
      <div class="container">
        <div class="ig-border-box">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-intro {
  margin-bottom: $large-margin;

  .ig-mosaic {
    background-image: url('~assets/mosaik.jpg');
    background-size: auto 60px;
    height: 60px;
    margin-top: 200px;
  }
  .ig-marble-1 {
    background-image: url('~assets/marble.jpg');
    background-position: bottom left;
    background-size: 512px;
    position: relative;
    height: 310px;

    .ig-offset-image {
      position: absolute;
      top: -260px;
      width: 100%;

      .ig-img-cover {
        object-fit: cover;
      }

      img {
        height: 540px;
        max-width: 100%;
      }
    }
  }
  .ig-marble-2 {
    background-image: url('~assets/marble_short.jpg');
    background-position: top left;
    background-size: 410px;
    background-repeat: repeat-x;

    .ig-border-box {
      padding: 20px;
    }
  }
}
</style>
