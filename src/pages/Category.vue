<template>
    <div>
        <van-sticky>
            <van-nav-bar title="分类"  >
            </van-nav-bar>
        </van-sticky>
        <van-tree-select
                height="100%"
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
        />
    </div>
</template>

<script>

    export default {

        data() {
            return {
                items:[
                    {
                        // 导航名称
                        text: '全部',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            },
                            {
                                text: '杭州',
                                id: 3
                            },
                            {
                                text: '杭州',
                                id: 4
                            },
                            {
                                text: '杭州',
                                id: 5
                            },
                            {
                                text: '杭州',
                                id: 6
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '精品茶叶分类',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '所有城市1111',
                        // 导航名称右上角徽标
                        // 是否在导航名称右上角显示小红点
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                                // 禁用选项
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    }
                ],
                activeId: 1,
                activeIndex: 0
            };
        },

    };
</script>

<style lang="less">

</style>