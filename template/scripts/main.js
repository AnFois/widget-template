function executeWidgetCode() {

    require( ["scripts/vue.min"],   function(Vue) {
        let myWidgetApp = new Vue({
            el: '#app',

            data: {
               show: true,
               message: "Showww!!"
            },

            methods: {
                toggleShow: function() {
                    this.show = !this.show;
                }
            }
        });
    });
        
}
