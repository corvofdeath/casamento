<template>
    <div>
        <section>
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

