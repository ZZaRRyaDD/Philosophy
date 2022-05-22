<template>
    <div class="container">
        <div class="px-2">
            <h4 id="scrollspyHeading2">О проекте</h4>
            <p>
                Проект разработан с целью определения сходимости уровня пользователя с
                идеями Буддизма.
            </p>
            <h4 id="scrollspyHeading1">Разработчики</h4>
            <p>Матвиенко Назар</p>
            <h4 id="scrollspyHeading3">Используемые технологии</h4>
            <p>
            <ul class="list-group w-50">
                <li 
                    class="list-group-item"
                    v-for="technologue in this.technologues"
                    :key="this.technologues.indexOf(technologue)"
                >
                    <a
                        class="text-dark text-decoration-none"
                        :href="technologue.url"
                    >
                        {{ technologue.name }}
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
            ],
            technologues: [
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