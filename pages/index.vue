<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Nuxtサンプルクイズ
    </h3>

    <div class="columns">
      <div class="column">
        <nuxt-link to="/bghj86gd">
          <img src="/door.png">
        </nuxt-link>
      </div>

      <div class="column">
        <template v-if="isClear1">
          <nuxt-link to="/jkv75gaka">
            <img src="/door.png">
          </nuxt-link>
        </template>
        <template v-else>
          <img src="/door_locked.png">
        </template>
      </div>

      <div class="column">
        <template v-if="isClear2">
          <nuxt-link to="/hv8bdf57">
            <img src="/door.png">
          </nuxt-link>
        </template>
        <template v-else>
          <img src="/door_locked.png">
        </template>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  computed: {
    isClear1 () {
      return this.$store.getters.isClear1
    },
    isClear2 () {
      return this.$store.getters.isClear2
    }
  }
}
</script>
