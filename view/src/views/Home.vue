<template>
    <div>
        <section v-bind:style="{ opacity: fadeOut }">
            <Head></Head>
        </section>
        <section id="history">
            <b-container fluid class="tabs">
                <b-row>
                    <b-col></b-col>
                    <b-col cols="12" md="8">
                        <History v-if="location === items[0]"></History>
                        <List v-if="location === items[1]"></List>
                    </b-col>
                    <b-col>
                        <ul class="side-nav">
                            <li><b-link :class="{ selected: location === items[0] }" @click="onChangeLocation(items[0])">História</b-link></li>
                            <li><b-link :class="{ selected: location === items[1] }" @click="onChangeLocation(items[1])">Lista</b-link></li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>

// @ is an alias to /src
import Head from '@/components/Head.vue'
import History from '@/components/History.vue'
import List from '@/components/List.vue'

export default {
    name: 'app-home',
    
    components: {
        Head,
        History,
        List
    },

    data: function () {
        return {
            fadeOut: 1,
            location: '',
            items: [
                'history',
                'list'
            ]
        }
    },

    methods: {
        handleScroll: function (event) {
            this.fadeOut = 1 - window.scrollY / 250;
        },

        // events
        onChangeLocation: function (newLocation) {
            this.location = newLocation;
        }
    },

    // ====== hooks ========
    created: function () {
        window.addEventListener('scroll', this.handleScroll);

        // initial location for section two
        this.location = this.items[0];
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

.tabs {
    padding-top: 10vh;
}

.side-nav {
    list-style-type: none;
    padding: 0;
    font-family: 'Amatic SC', cursive;
    font-size: 1.5em;

    a {
        color: black;
    }

    a:hover {
        color: #42b883;
    }
}

.selected {
    color: #42b883 !important;
}

@media (max-width: 640px) {
    .side-nav li {
        display: inline;
        margin-left: 5px;
    }
}
</style>

