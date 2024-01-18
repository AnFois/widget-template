function executeWidgetCode() {

  require(["UWA/Drivers/jQuery"], function($) {
      var myWidget = {
          onLoadWidget: function(){
          },
      };

      widget.addEvent("onLoad", myWidget.onLoadWidget);
      });
}

