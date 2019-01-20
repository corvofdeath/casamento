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
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
    name: "app-list",
    components: {
        ListItem
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


