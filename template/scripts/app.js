const app = Vue.createApp({
    data() {
        return {
            show : true,
            message: "Show"
        }
    },

    methods: {
        toggleShow() {
            this.show = !this.show;
        }
    }
})

app.mount('#app')