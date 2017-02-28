<template>
    <div class="carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="item in top_stories" class="swiper-slide" :style="{ backgroundImage: 'url(' + item.img + ')' }" >
                    <div class="swiper-mask"></div>
                    <!--<h1 class="slider-title">{{item.title}}</h1>-->
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<style lang="sass" >
    @import "../../scss/components/swiper.min.css";
    .swiper-container{
        height: 1.97rem;
    }
    .swiper-slide{
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    .swiper-mask{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
        background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    }
    .slider-title{
        position: absolute;
        bottom: 23px;
        line-height: 1.2;
        left: 0;
        padding: 0 18px;
        font-weight: 300;
        font-size: 21px;
        color: #ffffff;
    }
    }
    .swiper-pagination-bullet{
        width: 0.16rem;
        height: 0.04rem;
        display: inline-block;
        border-radius: 0;
        background: #5a5a5a;
        opacity: .8;
    }
    .swiper-pagination-bullet-active{
        opacity: 1;
        background: #fff;
    }
</style>


<script>
    /*eslint-disable no-new*/
    export default{
        props: ['top_stories'],
        data () {
        return {
        }
    },
    ready () {

        new window.Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            observer: true,
            lazyLoading: true,
            resistanceRatio: 0,
        })
    }
    }
</script>