const state = {
  types: [{type: '1' , name: "第一梯次"},{type: '2' , name: "第二梯次"},{type: '3' , name: "第三梯次"}],
}
const getters = {
  allAgendaType: state => state.types
}

export default {
  state,
  getters,
  // actions,
  // mutations
}
