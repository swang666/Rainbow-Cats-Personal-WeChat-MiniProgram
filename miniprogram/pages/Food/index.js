// pages/Food/index.js
Page({
    data: {
        options: [
            {
                name: "炸鸡"
            },
            {
                name: "咖喱"
            },
            {
                name: "沙拉"
            },
            {
                name: "汉堡"
            },
            {
                name: "茶餐厅"
            },
            {
                name: "川菜"
            },
            {
                name: "火锅"
            },
            {
                name: "冒菜"
            },
            {
                name: "披萨"
            },
            {
                name: "越南粉"
            },
            {
                name: "芝士猪扒饭"
            },
            {
                name: "意大利面"
            },
            {
                name: "重庆小面"
            },
            {
                name: "台湾烧肉饭"
            },
            {
                name: "猪脚饭"
            },
            {
                name: "海南鸡"
            },
            {
                name: "炸串"
            },
            {
                name: "罗非鱼"
            },
        ],
        selected: "",
        loading: false,
    },

    onGenerateClick(e) {
        let n = this.data.options.length
        let i = Math.floor(Math.random() * n)
        this.setData({
            selected: "",
            loading: true
        })
        setTimeout(() => {
            this.setData({
                selected: this.data.options[i].name,
                loading: false
            })
        }, 2000)
        
    }
})