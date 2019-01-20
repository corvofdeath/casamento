<template>
    <b-container fluid>
        <b-row>
            <b-col md="12">
                <div id="content">
                    <h1>Casamento</h1>
                    <h3>Filipe & Liliane</h3>
                    <hr>
                    <round-button href="#history" img="heart"></round-button>
                </div>
                <ul class="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
    name: "app-head",
    
    components: {
        RoundButton
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
    z-index: 1;
    position: relative;
    text-align: center;
    padding-top: 40vh;
    color: white;
    font-family: 'Amatic SC', cursive;
}

@media (max-width: 640px) {
    h1 {
        font-size: 2.5rem !important;
    }
}

h1 {
    font-size: 5em;
    // text-shadow: 0 1px 0 #ccc,
    //              0 2px 0 #c9c9c9,
    //              0 3px 0 #bbb,
    //              0 4px 0 #b9b9b9,
    //              0 5px 0 #aaa,
    //              0 6px 1px rgba(0,0,0,.1),
    //              0 0 5px rgba(0,0,0,.1),
    //              0 1px 3px rgba(0,0,0,.3),
    //              0 3px 5px rgba(0,0,0,.2),
    //              0 5px 10px rgba(0,0,0,.25),
    //              0 10px 10px rgba(0,0,0,.2),
    //              0 20px 20px rgba(0,0,0,.15);
}
  
h3 {
    // text-shadow: 0px 4px 3px rgba(0,0,0,.4),
    //              0px 8px 13px rgba(0,0,0,.1),
    //              0px 18px 23px rgba(0,0,0,.1);
}
  
hr {
    width: 35%;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid rgba(0,0,0,.3);
}
  
.slideshow {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    list-style: none;
    margin: 0;
    padding: 0;
}
  
.slideshow li {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 35s linear infinite;
}
  
.slideshow li:nth-child(1) {
    background-image: url(https://dg.imgix.net/the-surpassing-goal-marriage-lived-for-the-glory-of-god-hddop4xr-en/landscape/the-surpassing-goal-marriage-lived-for-the-glory-of-god-hddop4xr.jpg?ts=1498767585&ixlib=rails-2.1.4&w=580&h=327&dpr=2&ch=Width%2CDPR&auto=format%2Ccompress&fit=min);
}
  
.slideshow li:nth-child(2) {
    background-image: url(https://timedotcom.files.wordpress.com/2017/09/marriage-harder-than-ever-maybe-better.jpg);
    animation-delay: 7s;
}
  
.slideshow li:nth-child(3) {
    background-image: url(https://www.findnicknames.com/wp-content/uploads/2017/11/nicknames-for-couples.jpg);
    animation-delay: 14s;
}
  
.slideshow li:nth-child(4) {
    background-image: url(https://jooinn.com/images/couple-54.jpg);
    animation-delay: 21s;
}
  
.slideshow li:nth-child(5) {
    background-image: url(https://www.fluentin3months.com/wp-content/uploads/2015/05/couple-travel.jpg);
    animation-delay: 28s;
}
  
@keyframes imageAnimation {
    0% {
        opacity: 0;
        animation-timing-function: ease-in;
    }
    10% {
        opacity: 1;
        animation-timing-function: ease-out;
    }
    20% {
        opacity: 1
    }
    30% {
        opacity: 0
    }
}
  
/* Older browser support */
.no-cssanimations .slideshow li { opacity: 1; }
</style>
