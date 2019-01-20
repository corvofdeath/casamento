<template>
    <div id="history">
        <b-row class="title">
            <b-col class="center">
                <h1>Lista de Casamento</h1>
            </b-col>
        </b-row>
        <div class="padding20"></div>
        <b-row class="content">
            <b-col class="center">
                <b-card-group deck>
                    <ListItem v-for="item in items" :key="item._id" :id="item._id" :title="item.title" :text="item.text" :img="item.img" :gifted="item.gifted"></ListItem>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';
import axios from 'axios';

export default {
    name: "app-list",
    components: {
        ListItem
    },
    data: function () {
        return {
            items: []
        }
    },
    mounted: async function () {
        try {
            const result = await axios.get('http://localhost:3000/api/v1/item');
            this.items = result.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-family: 'Amatic SC', cursive
}

.content {
    font-family: 'Pacifico', cursive;
}

.card-deck {
    margin-left: 15px;
}
</style>


