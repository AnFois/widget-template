function executeWidgetCode() {

    require( ["scripts/vue.min", "DS/DataDragAndDrop/DataDragAndDrop"],   function(Vue, DataDragAndDrop) {

        Vue.component('my-component', {
            props:['fullData'],
            template:`
            <div id="borderDiv" style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;
				border: dashed #2B3669; color: #2B3669;
				font-size: 14px;">
				<div v-if="!displayData">Drop here object to code</div>
				<div v-if="displayData">Object dropped </div>
				<div v-if="!displayData"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
					<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
				</svg></div>
			</div>`
        });

        let myWidgetApp = new Vue({
            el: '#app',

            data: {
               show: true,
               fullData: [],
               displayData : false
            },

            methods: {
                toggleShow: function() {
                    this.show = !this.show;
                },

                navigateTo: async function(page){
                    return this.currentPage = page;
                },

                makeDroppable: function () {
                    var dropElement = document.getElementById("space");
                    var borderDiv = document.getElementById("borderDiv");
                    DataDragAndDrop.droppable(dropElement, {
                        drop: function(data){
                            borderDiv.style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; border: solid #118921; color: #118921";        
                            this.displayData = !this.displayData;
                            myWidgetApp.makeDroppable();
                        },
                        enter: function(){
                            console.log("Enter");
                            this.displayData = false;
                        },
                        leave: function(){
                            borderDiv.style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; border: solid red;";                                                        
                            this.displayData = false;
                        },
                        over: function(){
                            borderDiv.style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; border: solid orange;";                            
                            this.displayData = false;
                        } 
                        
                    })
                },
            }
        });

        widget.addEvent('onLoad', function(){
            myWidgetApp.makeDroppable();
        })
    });
        
}
