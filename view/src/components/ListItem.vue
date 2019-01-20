<template>
  <div id="list-item">
    <div>
      <b-card
        :title="title"
        :border-variant="border"
        :img-src="img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-2"
      >
        <p class="card-text">{{ text }}</p>
        <b-button variant="outline-secondary" @click="gift">{{ internalGifted ? 'Recebido' : 'Presentear' }}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "app-list-item",
    props: {
      title: String,
      text: String,
      img: String,
      gifted: Boolean,
      id: String,
    },
    data: function () {
        return {
           internalGifted: this.gifted
        }
    },
    computed: {
      border: function () {
        return this.internalGifted ? 'success' : 'none';;
      }
    },
    methods: {
        gift: async function () {

            try {
              const result = await axios.put('http://localhost:3000/api/v1/item/gift/' + this.id);
              
              this.internalGifted = result.data;
            } catch (error) {
              console.log(error);
            } 
        }
    }
};
</script>

<style lang="scss" scoped>
</style>


