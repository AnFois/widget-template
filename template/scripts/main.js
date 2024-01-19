function executeWidgetCode() {

  require(["UWA/Drivers/jQuery"], function($) {
      var myWidget = {
          onLoadWidget: function(){
            const app = Vue.createApp({
                data() {
                    return {
                        show: true,
                        message: "Show"
                    };
                },
                methods: {
                    toggleShow() {
                        this.show = !this.show;
                    }
                }
            });

            app.mount('#app');
          },
      };

      widget.addEvent("onLoad", myWidget.onLoadWidget);
      });
}

