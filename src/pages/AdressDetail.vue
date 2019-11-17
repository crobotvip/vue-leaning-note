<template>
    <div>
        <van-sticky>
            <van-nav-bar :title="title" @click-left="onClickLeft"
                         left-arrow
                         right-text="完成"
                         @click-right="onClickRight"
            >
            </van-nav-bar>
        </van-sticky>
        <van-address-edit
         :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>

    import areaList from './../address.js';
    export default {
        name: 'goods',
        components: {},
        data() {
            return {
                list: [],
                areaList: areaList,
                loading: false,
                finished: false,
                title:this.$route.params.action=='add'?"新增地址":"地址详情",
                searchResult: []
            };
        },
        created: function () {
            console.log(this.$route.params.action);

        },
        mounted: function () {

        },
        methods: {

            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {
                this.$router.back()
            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
