<template>
  <div>
    <button
      :data-value="weight"
      class="w-100 btn btn-outline-warning my-2 btn-sm text-center"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AnswerComponent",
  props: {
    weight: Boolean,
    answer: String,
    questionNumber: Number,
  },
};
</script>
