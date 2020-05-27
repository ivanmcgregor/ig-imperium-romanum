<template>
  <div class="ig-footer py-5 mt-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="2">
          <b-img fluid :src="require(`assets/schild.jpg`)"></b-img>
        </b-col>
        <b-col cols="12" md="3">
          <b-nav vertical class="mt-4 mt-md-0">
            <b-nav-item
              v-for="route in primaryRoutes"
              :key="route.name"
              :to="route.path"
            >
              {{ route.text }}

              <b-nav
                v-if="route.children && route.name.startsWith('Tipp')"
                vertical
                class="ig-footer-sub-nav"
              >
                <b-nav-item
                  v-for="child in route.children"
                  :key="child.name"
                  :to="child.path"
                >
                  {{ child.text }}
                </b-nav-item>
              </b-nav>
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="12" md="3">
          <b-nav vertical class="mt-4 mt-md-0">
            <b-nav-item
              v-for="route in secondaryRoutes"
              :key="route.name"
              :to="route.path"
            >
              {{ route.text }}
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="12" md="4" class="text-right mt-4 mt-md-0">
          © {{ year }}, IG Imperium Romanum
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { getFooterLeftMenu, getFooterRightMenu } from '~/utils/routesHelper'

export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    },
    primaryRoutes() {
      return getFooterLeftMenu(this.$router.options.routes)
    },
    secondaryRoutes() {
      return getFooterRightMenu(this.$router.options.routes)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-footer {
  color: $white;
  background-image: url('~assets/marble.jpg');
  background-size: 512px;

  .nav-link {
    padding: 0;

    color: $white;
    &.nuxt-link-exact-active {
      text-decoration: underline;
    }
  }

  .ig-footer-sub-nav {
    padding-left: 15px;
    font-size: 0.9rem;
  }
}
</style>
