import { createStore } from "vuex";

export default createStore({
  state: {
    countQuestion: 10,
    countAnsweredQuestions: 0,
    answersByUser: 0,
  },
  getters: {
    getAnswersByUser(state) {
      return state.answersByUser;
    },
    getCountAnsweredQuestions(state) {
      return state.countAnsweredQuestions;
    },
    getCountQuestions(state) {
      return state.countQuestion;
    },
    getPercent(state) {
      return Math.round(100 * (state.answersByUser / state.countQuestion));
    },
  },
  mutations: {
    setAnswersByUser(state, value) {
      state.answersByUser += value;
    },
    zeroAnswers(state) {
      state.answersByUser = 0;
      state.countAnsweredQuestions = 0;
    },
    setCountAnsweredQuestions(state) {
      if (state.countAnsweredQuestions < state.countQuestion) {
        state.countAnsweredQuestions++;
      }
    },
  },
  actions: {},
  modules: {},
});
