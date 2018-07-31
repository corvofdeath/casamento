<template>
    <div>
        <section v-bind:style="{ opacity: fadeOut }">
            <Head></Head>
        </section>
        <section id="other"></section>
    </div>
</template>

<script>

// @ is an alias to /src
import Head from '@/components/Head.vue'

export default {
    name: 'app-home',
    
    components: {
        Head
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

section:nth-child(2) {
    background: lightgreen;
}
</style>

