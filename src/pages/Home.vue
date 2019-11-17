<template>
    <div>
        <van-sticky>
            <van-nav-bar title="首页" >
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </van-sticky>
        <van-swipe style="height: 200px;" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" style="height: 200px;width: 100%"/>
            </van-swipe-item>
        </van-swipe>

        <van-grid>
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
        <!--<p>极品豪车</p>-->
        <div class="teaweb_title">极品豪车</div>
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    icon="photo-o"
                    text="文字"
            />
        </van-grid>

        <!--<p>精品茶具</p>-->
        <div class="teaweb_title">精品茶具</div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                images: [
                    'http://img3.imgtn.bdimg.com/it/u=1656811409,1242727312&fm=26&gp=0.jpg',
                    'http://pic1.win4000.com/wallpaper/8/543797a594fe7.jpg',
                    'http://pic1.nipic.com/2008-09-01/20089113335364_2.jpg',
                    'http://file16.zk71.com/File/CorpEditInsertImages/2017/10/31/shipin_3028_20171031155933.jpg',
                    'http://i1.sinaimg.cn/qc/photo1/AudiR85.2FSIquattro/U2798P33T148D324265F2100DT20090202100705.jpg'
                ]
            };
        },
        methods:{
            goDetail(index){
                this.$router.push('goodsDetail')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
