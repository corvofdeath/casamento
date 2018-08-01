<template>
    <div id="history">
        <b-row class="title">
            <b-col class="center">
                <h1>Nossa História</h1>
            </b-col>
        </b-row>
        <div class="padding20"></div>
        <b-row class="content">
            <b-col>
                <b-row>
                    <b-col class="center">
                        <p>Content</p>
                        <p>Nossa maravilhosa historia juntos...</p>
                        <p>Tudo comecou de uma maneira muito doida</p>
                        <p>E agora vamos nos casar</p>
                        <p>Amor</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="display-flex">
                        <div class="auto-margins">
                            <b-carousel controls indicators background="#ababab" :interval="4000" img-width="640" img-height="320">
                                <b-carousel-slide img-src="https://aleteiaen.files.wordpress.com/2018/01/web3-happy-young-couple-laugh-outside-street-shutterstock_573938254-ivanko80-ai.jpg?quality=100&strip=all&w=640"></b-carousel-slide>
                                <b-carousel-slide img-src="https://www.the-open-mind.com/wp-content/uploads/2015/02/o-HAPPY-COUPLE-facebook-e1423946777340.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="https://i.pinimg.com/originals/ff/7c/bc/ff7cbc240036b5dd550f673a41b99635.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="https://aleteiaen.files.wordpress.com/2018/05/web3-couple-smile-hugging-love-care-shutterstock.jpg?quality=100&strip=all&w=640"></b-carousel-slide>
                                <b-carousel-slide img-src="https://aleteiaen.files.wordpress.com/2017/05/web3-couple-kissing-nose-boyfriend-girlfriend-husband-wife-cc.jpg?quality=100&strip=all&w=640"></b-carousel-slide>
                            </b-carousel>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "app-history"
}
</script>

<style lang="scss" scoped>
.title {
    font-family: 'Amatic SC', cursive
}

.content {
    font-family: 'Pacifico', cursive;
}

.display-flex {
    display: flex;
}

.auto-margins {
    margin-left: auto;
    margin-right: auto;
}
</style>


