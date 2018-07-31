<template>
    <b-container fluid>
        <b-row>
            <b-col md="12">
                <div id="content">
                    <h1>Dream Tuscany</h1>
                    <h3>The Only Tuscany Travel Guide</h3>
                    <hr>
                    <b-button href="#other" variant="light" v-smooth-scroll="{ duration: 1000, offset: 0 }">Let’s Go</b-button>
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
export default {
    name: "app-head"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
    z-index: 1;
    position: relative;
    text-align: center;
    padding-top: 40vh;
}

h1 {
    font-weight: 700;
    font-size: 5em;
    text-shadow: 0 1px 0 #ccc,
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15);
}
  
h3 {
    text-shadow: 0px 4px 3px rgba(0,0,0,.4),
                 0px 8px 13px rgba(0,0,0,.1),
                 0px 18px 23px rgba(0,0,0,.1);
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
    background-image: url(https://images.unsplash.com/photo-1505868954261-144157311e7e?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
}
  
.slideshow li:nth-child(2) {
    background-image: url(https://images.unsplash.com/photo-1444214058525-761aeb793113?auto=format&fit=crop&w=1778&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
    animation-delay: 7s;
}
  
.slideshow li:nth-child(3) {
    background-image: url(https://images.unsplash.com/photo-1434025697302-54853b8da166?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
    animation-delay: 14s;
}
  
.slideshow li:nth-child(4) {
    background-image: url(https://images.unsplash.com/photo-1462015983553-d102a6c9a7ce?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
    animation-delay: 21s;
}
  
.slideshow li:nth-child(5) {
    background-image: url(https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
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
