<template>
    <div id="logistics_part">
        <section class="msg">
            <p class="msg_title">物流信息 <span>{{logistics_msg.company}} {{logistics_msg.no}}</span></p>
            <div>
                <ul>
                    <li v-for="item in logistics_msg.list">
                        <span>{{item.datetime}}</span><p>{{item.remark}}</p>
                    </li>

                </ul>

            </div>

            <p @click="go_logistics" class="more">
                查看更多信息...
            </p>
        </section>
    </div>
</template>

<script>
    export default {
        props:['logistics_msg'],
        methods:{
            go_logistics(){
                this.$route.router.go({'name':'watchLogistics',params:{"orderId":this.$route.params.orderId}})
//                console.log();
            }
        },
        ready(){
    }
    }
</script>

<style lang="sass">
    #logistics_part{

    %s{
         margin-top: 0.12rem;
         background:#fff;
         font-size: 0.13rem;
         border:1px solid #e0e0e0;
         border-width:1px 0;
     }

    .msg{
    @extend %s;
    span{
        vertical-align: inherit;
    }

    .msg_title{
        font-size:0.15rem;
        padding:0.07rem 0.12rem 0.11rem 0.17rem;
        border-bottom:1px solid #e0e0e0;
    span{
        font-size: 0.13rem;
        float: right;
    }
    }

    div{
        margin:0.12rem 0.16rem 0.08rem;
        padding-bottom:0.08rem;
        border-bottom:1px solid #e0e0e0;
    li{
        display: flex;
        white-space:nowrap;

    span:first-child{
        margin-right: 0.12rem;
        min-width:1.2rem;
    }
    p{
        white-space: normal;
    }
    }
    }

    .more{
        margin:0.12rem;
        text-align: center;
        font-size: 0.15rem;
        color:rgba(0, 0, 0, 0.54);
    }
    }
    }
</style>