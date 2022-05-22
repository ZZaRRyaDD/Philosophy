<template>
  <div>
    <button
      :data-value="weight"
      class="btn btn-outline-info w-100 my-2 btn-sm text-center text-dark"
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
  },
};
</script>
