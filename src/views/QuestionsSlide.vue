<template>
  <div class="main container">
    <div class="d-flex flex-column align-items-center">
      <question-component
        :questionNumber="this.numberQuestion"
        @nextQuestion="this.numberQuestion++"
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
  box-shadow: 5px 2px 2px black;
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
      numberQuestion: 0,
      openModalResult: false,
    };
  },
};
</script>
