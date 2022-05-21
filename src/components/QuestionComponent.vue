<template>
  <div class="d-flex flex-column">
    <div class="py-3">
      {{ this.questions[questionNumber]["question"] }}
    </div>
    <div class="px-3 d-flex flex-row">
      <img class="image" :src="this.getPath(questionNumber + 1)" />
      <div class="d-flex flex-column mx-3">
        <answer-component
          v-for="(weight, answer, index) in this.questions[questionNumber][
            'answers'
          ]"
          :weight="weight"
          :answer="answer"
          :key="index"
          :numberQuestion="questionNumber"
          @click="this.getValue"
        ></answer-component>
      </div>
    </div>
  </div>
</template>

<style>
.image {
  width: 500px;
  height: 300px;
}
</style>

<script>
import AnswerComponent from "@/components/AnswerComponent.vue";
export default {
  name: "QuestionComponent",
  props: {
    questionNumber: Number,
  },
  components: {
    "answer-component": AnswerComponent,
  },
  data() {
    return {
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
            Прощаю: true,
            "Держу злобу": false,
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
        event.target.dataset.value === "true"
      );
      this.$store.commit("setCountAnsweredQuestions");
      if (
        this.$store.getters.getCountQuestions !==
        this.$store.getters.getCountAnsweredQuestions
      ) {
        this.$emit("nextQuestion");
      } else {
        this.$emit("openResult");
      }
    },
  },
};
</script>
