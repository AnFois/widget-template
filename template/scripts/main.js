function executeWidgetCode() {
  
  function onLoadWidget(){
    const app = Vue.createApp({
    template: '<h1>Prova</h1>'
    })

    app.mount('#app')
  }

  widget.addEvent("onLoad", onLoadWidget);

}