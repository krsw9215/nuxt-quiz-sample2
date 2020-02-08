export const state = () => ({
  isClear1: false,
  isClear2: false,
  isClear3: false
})

export const getters = {
  isClear1: state => state.isClear1,
  isClear2: state => state.isClear2,
  isClear3: state => state.isClear3
}

export const mutations = {
  setClear1 (state) {
    state.isClear1 = true
  },
  setClear2 (state) {
    state.isClear2 = true
  },
  setClear3 (state) {
    state.isClear3 = true
  }
}
