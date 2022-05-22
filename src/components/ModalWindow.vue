<template>
  <div
    class="modal-mask"
    :class="{
      'fs-6 lh-sm': this.width < 768,
    }"
  >
    <div class="modal-wrapper">
      <div
        class="modal-container my-3"
        :class="{
          'col-3':
            this.$route['fullPath'].split('/')[1] === 'question' &&
            this.width >= 768,
          'col-6':
            this.$route['fullPath'].split('/')[1] === 'question' &&
            this.width < 768,
          'col-8':
            this.$route['fullPath'].split('/')[1] !== 'question' &&
            this.width < 768,
          'col-5':
            this.$route['fullPath'].split('/')[1] !== 'question' &&
            this.width >= 768,
        }"
      >
        <header class="modal-header">
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="main"></slot>
        </main>
        <footer class="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
a.nav-link {
  padding: 2px 10px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

header h3 {
  margin-top: 0;
  color: #42b983;
}

main {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      width: 0,
    };
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
