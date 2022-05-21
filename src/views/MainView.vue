<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h5>Привет, друг!</h5>
    <p>Данный тест поможет тебе понять уровень схожести с идеями Буддизма.</p>
    <button type="button" class="btn btn-success mb-3">
      <a
        class="text-light text-decoration-none"
        @click="$router.push({ name: 'Question' })"
        >Приступить к тестированию</a
      >
    </button>
    <button
      @click="this.openModalInfo = true"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#infoModal"
    >
      Информация о проекте
    </button>
    <modal-window v-show="this.openModalInfo">
      <template v-slot:header>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          @click="this.openModalInfo = false"
          aria-label="Close"
        ></button>
      </template>
      <template v-slot:main>
        <nav id="navbar-example2" class="navbar navbar-light bg-light">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">О проекте</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Разработчики</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3"
                >Немного о буддизме</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">Полезные ссылки</a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          class="scrollspy-example px-2"
          tabindex="0"
        >
          <h4 id="scrollspyHeading1">О проекте</h4>
          <p>
            Проект разработан с целью определения твоего уровня сходимости с
            идеями Буддизма
          </p>
          <h4 id="scrollspyHeading2">Разработчики</h4>
          <p>Матвиенко Назар</p>
          <h4 id="scrollspyHeading3">Немного о буддизме</h4>
          <p>...</p>
          <h4 id="scrollspyHeading4">Полезные ссылки</h4>
          <div class="text-wrap">
            <div
              class="text-wrap text-decoration-none w-45"
              v-for="link in this.links"
              :key="this.links.indexOf(link)"
            >
              {{ this.links.indexOf(link) + 1 }}.
              <a class="text-wrap" :href="link">{{ link }}</a>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          @click="this.openModalInfo = false"
        >
          Закрыть
        </button>
      </template>
    </modal-window>
  </div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  name: "MainView",
  components: {
    "modal-window": ModalWindow,
  },
  data() {
    return {
      openModalInfo: false,
      links: [
        "https://eksmo.ru/trends/pyat-glavnykh-printsipov-buddizma-ID15544812/",
        "https://www.nur.kz/family/self-realization/1379262-buddizm-osnovnyye-idei-i-printsipy/",
        "https://hbr-russia.ru/liderstvo/delo-zhizni/a13155/",
        "https://arzamas.academy/mag/599-buddha",
      ],
    };
  },
};
</script>
