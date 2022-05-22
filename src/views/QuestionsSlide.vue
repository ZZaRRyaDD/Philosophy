<template>
  <div class="main container">
    <div class="d-flex flex-column align-items-center">
      <question-component
        @openResult="this.openModalResult = true"
      ></question-component>
      <modal-result
        v-show="this.openModalResult"
        @close="this.openModalResult = false"
      >
        <template v-slot:header>
          <h5 class="modal-title">Результат</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            @click="
              this.$store.commit('zeroAnswers');
              $router.push({ name: 'Main' });
            "
            aria-label="Close"
          ></button>
        </template>
        <template v-slot:main>
          <p
            class="px-3"
            v-text="`Ваш результат: ${this.$store.getters.getPercent}%`"
          ></p>
        </template>
        <template v-slot:footer>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="
              this.$store.commit('zeroAnswers');
              $router.push({ name: 'Main' });
            "
          >
            На главную
          </button>
        </template>
      </modal-result>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 1px #40c4e7;
}
</style>

<script>
import QuestionComponent from "@/components/QuestionComponent.vue";
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  name: "QuestionsSlide",
  components: {
    "question-component": QuestionComponent,
    "modal-result": ModalWindow,
  },
  data() {
    return {
      openModalResult: false,
    };
  },
  mounted() {
    this.$store.commit(
      "setAnswersByUser",
      (localStorage.answersByUser === undefined)
        ? 0
        : Number(localStorage.answersByUser)
    );
    this.$store.commit(
      "setCountAnsweredQuestionsInit",
      (localStorage.countAnsweredQuestions === undefined)
        ? 0
        : Number(localStorage.countAnsweredQuestions)
    );
  },
};
</script>
