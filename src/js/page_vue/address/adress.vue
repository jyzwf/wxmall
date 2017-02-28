<!--收货地址总的管理-->
<template>
    <div id="about_adress">
        <header>
            <img src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
            <span>选择收货地址</span>
            <a v-link="{ name: 'manageAd'}">管理</a>
        </header>

        <router-view></router-view>
    </div>
</template>

<style lang="sass">
    #about_adress{
        header{
            background: gray;
            padding:0.12rem 0.16rem;
            text-align: center;
            color:#fff;
            display:flex;
            align-items:center;
            justify-content:space-between;

            a{
                color:#fff;
            }

        }
    }
</style>