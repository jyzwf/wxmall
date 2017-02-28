<script>
    export default{
        props:['fan_list']
    }
</script>
<template>
    <div id="myFans_list">
        <div class="fan_list" v-for="fan in fan_list">
            <img src="{{ fan.fans_head_img }}" alt=""/>
            <div class="list">
                <p>{{fan.fans_name}}</p>
                <p>
                    <span>ID:{{fan.fans_id}}</span>
                    <span>{{fan.fans_follow_time}} 关注</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .fan_list{
        display: flex;
        padding: 0.12rem 0.16rem;
    img{
        width:0.4rem;
        height:0.4rem;
        min-width: 0.4rem;
        border-radius: 0.04rem;
        margin-right: 0.16rem;
    }

    .list{
        flex:auto;
        padding-bottom:0.12rem;
        border-bottom:1px solid rgba(0,0,0,.12);
        font-size:0.13rem;
        span{
            vertical-align: inherit;
        }
        p:last-child{
            margin-top: 0.02rem;
            span:last-child{
                margin-left:0.08rem;
                color:rgba(0, 0, 0, 0.54);
                font-size: 0.11rem;

            }
        }
    }

    }
</style>