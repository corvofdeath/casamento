<template>
    <div>
        <section v-bind:style="{ opacity: fadeOut }">
            <Head></Head>
        </section>
        <section id="history">
            <History></History>
        </section>
    </div>
</template>

<script>

// @ is an alias to /src
import Head from '@/components/Head.vue'
import History from '@/components/History.vue'

export default {
    name: 'app-home',
    
    components: {
        Head,
        History
    },

    data: function () {
        return {
            fadeOut: 1
        }
    },

    methods: {
        handleScroll: function (event) {
            this.fadeOut = 1 - window.scrollY / 250;
        }
    },

    // ====== hooks ========
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss">
section {
    height: 100vh;
}
</style>

