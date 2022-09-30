// pages/Food/index.js
Page({
    data: {
        options: [{
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