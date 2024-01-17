function executeWidgetCode() {

    require(["UWA/Drivers/jQuery"], function($) {
        var myWidget = {
            onLoadWidget: function(){
                widget.body.innerHTML ="<p>Hello, World!</p>" + "<br/>";
            },
        };

        widget.addEvent("onLoad", myWidget.onLoadWidget);
        });
}

