<template>
  <div class="d-flex flex-column container mx-100">
    <div
      class="py-3 w-100"
      :class="{
        'fs-6 lh-sm': this.width < 768,
        'fs-5': this.width >= 768,
      }"
      style="font-family: 'Italic', sans-serif"
    >
      {{ this.questions[this.$store.state.countAnsweredQuestions]["question"] }}
    </div>
    <div
      class="px-3 d-flex row"
      :class="{
        'flex-row': this.width >= 768,
        'flex-column': this.width < 768,
      }"
    >
      <img
        class="col"
        :src="this.getPath(this.$store.state.countAnsweredQuestions + 1)"
        :class="{
          'w-50': this.width >= 768,
        }"
      />
      <div
        class="d-flex flex-column col"
        :class="{
          'mx-3': this.width >= 768,
        }"
      >
        <answer-component
          v-for="(weight, answer, index) in this.questions[
            this.$store.state.countAnsweredQuestions
          ]['answers']"
          :weight="weight"
          :answer="answer"
          :key="index"
          @click="this.getValue"
        ></answer-component>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerComponent from "@/components/AnswerComponent.vue";
export default {
  name: "QuestionComponent",
  components: {
    "answer-component": AnswerComponent,
  },
  data() {
    return {
      width: 0,
      questions: [
        {
          question: "Как вы относитесь к смертной казни, эвтаназии?",
          answers: {
            Отрицательно: true,
            Положительно: false,
          },
        },
        {
          question: "Учение Будды основано на:",
          answers: {
            "Многократном опыте": true,
            Вере: false,
          },
        },
        {
          question:
            "Честные высказывания с вашей стороны преобладают над оскорблениями/лживыми высказываниями/сплетнями?",
          answers: {
            Согласен: true,
            Частично: false,
            "Не согласен": false,
          },
        },
        {
          question:
            "Какова цель человека, решившего связать свою жизнь с буддизмом?",
          answers: {
            "«вернуться к корню и открыть новое»": false,
            "Достичь просветвления": true,
            "«исходя из учения о внутренней совершенной мудрости, решить проблему внешней царственности»": false,
          },
        },
        {
          question:
            "Согласны ли вы, что 'в самые тяжелые времена Вселенная придет на помощь. Человеку не будет дано больше испытаний, чем он сможет вынести'?",
          answers: {
            Согласен: true,
            Частично: false,
            "Не согласен": false,
          },
        },
        {
          question: "Какие элементы сделают любовь искренней:",
          answers: {
            Доброжелательность: false,
            Сострадание: false,
            Спокойствие: false,
            Радость: false,
            "Все выше перечисленное": true,
          },
        },
        {
          question: "Каково ваше отношение к алкоголю?",
          answers: {
            Отрицательно: true,
            Положительно: false,
          },
        },
        {
          question:
            "Согласны ли вы с данными высказываниями Буддистов: 'Депрессию и отчаяние вызывает наша неспособность контролировать собственные желания. Медитация, строгое следование несложным правилам, а главное, принятие и использование своей боли в качестве ценного ресурса помогут вам достичь нирваны.'?",
          answers: {
            Согласен: true,
            Частично: false,
            "Не согласен": false,
          },
        },
        {
          question:
            "Прощаете ли вы человека, который вас обидел или держите на него злобу всю оставшуюся жизнь?",
          answers: {
            "Держу злобу": false,
            Прощаю: true,
          },
        },
        {
          question: "Вы живете:",
          answers: {
            Будущим: false,
            Настоящим: true,
            Прошлым: false,
          },
        },
      ],
    };
  },
  methods: {
    getPath(number) {
      return require(`../images/picture${number}.jpeg`);
    },
    getValue(event) {
      this.$store.commit(
        "setAnswersByUser",
        this.$store.state.answersByUser +
          (event.target.dataset.value === "true")
      );
      if (
        this.$store.getters.getCountQuestions - 1 ===
        this.$store.getters.getCountAnsweredQuestions
      ) {
        this.$emit("openResult");
      } else if (
        this.$store.getters.getCountQuestions >
        this.$store.getters.getCountAnsweredQuestions
      ) {
        this.$store.commit("setCountAnsweredQuestions");
      }
    },
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
  updated() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
};
</script>
