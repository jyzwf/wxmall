<script>
    export default {
        props:['fan_des']
    }
</script>

<template>
    <div class="no_fans">
        <img src="../../asset/imgs/ic-no-fans-copy.svg" alt=""/>
        <span>{{fan_des}}</span>
    </div>
</template>


<style lang="sass">
    .no_fans{
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items:center;
    img{
        width:0.96rem;
        height:0.96rem;
        margin: 1.7rem 0 0.16rem;
    }

    span{
        font-size: 0.13rem;
        color: rgba(0,0,0,.54);
    }
    }
</style>