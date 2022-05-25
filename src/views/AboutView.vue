<template>
    <div class="container">
        <div class="px-2">
            <h4 id="scrollspyHeading2">О проекте</h4>
            <p>
                Проект разработан с целью определить, насколько темперамент пользователя схож с 
                идеями Буддизма.
            </p>
            <h4 id="scrollspyHeading1">Разработчики</h4>
            <p>Матвиенко Назар</p>
            <h4 id="scrollspyHeading3">Используемые технологии</h4>
            <p>
            <ul class="list-group w-50">
                <li 
                    class="list-group-item"
                    v-for="tech in this.technology"
                    :key="this.technology.indexOf(tech)"
                >
                    <a
                        class="text-dark text-decoration-none"
                        :href="tech.url"
                    >
                        {{ tech.name }}
                    </a>
                </li>
            </ul>
            </p>
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
    </div>
</template>

<script>
export default {
    name: "AboutView",
    data () {
        return {
            links: [
                "https://eksmo.ru/trends/pyat-glavnykh-printsipov-buddizma-ID15544812/",
                "https://www.nur.kz/family/self-realization/1379262-buddizm-osnovnyye-idei-i-printsipy/",
                "https://hbr-russia.ru/liderstvo/delo-zhizni/a13155/",
                "https://arzamas.academy/mag/599-buddha",
                "https://studybuddhism.com/ru/prodvinutyy-uroven/istoriya-i-kultura/buddizm-v-sovremennom-mire/buddizm-i-nauka",
                "https://studybuddhism.com/ru/tibetskiy-buddizm/o-buddizme/mir-buddizma/buddizm-v-sovremennom-mire",
                "https://studybuddhism.com/ru/prodvinutyy-uroven/istoriya-i-kultura/buddizm-v-sovremennom-mire/privlekatelnost-buddizma-dlya-sovremennogo-mira",
                "https://buddhayana.ru/%D0%BF%D1%83%D1%82%D1%8C-%D0%B1%D1%83%D0%B4%D0%B4%D1%8B-%D0%B2-%D0%BC%D0%B8%D1%80%D0%B5.html",
                "https://www.krugosvet.ru/enc/kultura_i_obrazovanie/religiya/BUDDA_I_BUDDIZM.html",
            ],
            technology: [
                {
                    "url": "https://vuejs.org/",
                    "name": "Vue 3",
                },
                {
                    "url": "https://vuex.vuejs.org/",
                    "name": "Vuex 4",
                },
                {
                    "url": "https://router.vuejs.org/",
                    "name": "Vue Router 4",
                },
                {
                    "url": "https://getbootstrap.com/",
                    "name": "Bootstrap 5.1.3",
                },
            ],
        }
    },
}
</script>