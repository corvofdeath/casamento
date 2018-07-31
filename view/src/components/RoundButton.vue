<template>
    <div class="button-container">
        <a :href="href" class="button" v-smooth-scroll="{ duration: 1500, offset: 0 }"><font-awesome-icon :icon="img"></font-awesome-icon></a>
    </div>
</template>

<script>
export default {
    name: "round-button",
    props: {
        href: String,
        img: String
    }
}
</script>

<style lang="scss" scoped>

.button-container {
    text-align: center;
}

.button {
    width: 72px;
    height: 72px;
    line-height: 72px;
    display: block;
    position: relative;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #fff;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 10;
    color: #fff;
}

.button:hover {
    color: #fff;
    border: 2px solid #444;
}

.button:after {
    position: absolute !important;
    content: "";
    width: 56px;
    height: 56px;
    display: block;
    position: relative;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    right: 6px;
    top: 6px;
    background-color: #333;
    visibility: hidden;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    -moz-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    opacity: 1\9;
    visibility: visible\9;
    display: none\9;
    -moz-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    z-index: -1;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

.button:hover:after {
    visibility: visible;
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    display: block\9;
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}
</style>


