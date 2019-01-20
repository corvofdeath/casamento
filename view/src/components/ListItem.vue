<template>
  <div id="list-item">
    <div>
      <b-card
        title="Liquidificador"
        :border-variant="border"
        img-src="https://www.extra-imagens.com.br/Eletroportateis/LiquidificadoreseAcessorios/Liquidificadores/5082526/149304780/liquidificador-philco-ph900-com-12-velocidades-e-1200w-vermelho-5082526.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-2"
      >
        <p class="card-text">Observações</p>
        <b-button :disabled='gifted' variant="outline-secondary" @click="gift">{{ gifted ? 'Recebido' : 'Presentear' }}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
    name: "app-list-item",
    
    data: function () {
        return {
            gifted: false,
            border: 'none'
        }
    },
    methods: {
        gift: function () {
            this.gifted = true;
            this.border = 'success';
        }
    }
};
</script>

<style lang="scss" scoped>
</style>


