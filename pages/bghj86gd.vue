<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      問題1
    </h3>

    <template v-if="isClear === false">
      <h2 v-show="badanswer">
        不正解！
      </h2>
      <br>パンはパンでも食べられないパンは食べない方がいーいか？
      <br>
      <b-field>
        <b-input v-model="answer" />
      </b-field>
      <b-button @click="check(answer)">
        OK
      </b-button>
    </template>
    <template v-else>
      <h2>正解！</h2>
      <div class="content has-text-centered">
        <nuxt-link to="/jkv75gaka">
          問2へ
        </nuxt-link>
      </div>
    </template>

    <div class="content has-text-centered">
      <nuxt-link to="/">
        トップへ
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Q1',
  data () {
    return {
      keywords: ['たこ', 'タコ', 'tako'],
      badanswer: false,
      answer: ''
    }
  },
  computed: {
    isClear () {
      return this.$store.getters.isClear1
    }
  },
  methods: {
    check (answer) {
      let isCorrect = false
      for (const keyword of this.keywords) {
        if (keyword === answer.toLowerCase()) {
          isCorrect = true
          this.$store.commit('setClear1')
          break
        }
      }
      if (isCorrect === false) {
        this.badanswer = true
      }
    }
  }
}
</script>
