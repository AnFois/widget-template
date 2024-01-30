function executeWidgetCode() {

    require( ["scripts/vue.min", "DS/DataDragAndDrop/DataDragAndDrop"],   function(Vue, DataDragAndDrop) {

        Vue.component('my-component', {
            props:['fullData'],
            template:`
            <div id="dropObj" style="border: dashed #22BC3C; background-color: #F0FFF3;
                color: black;text-align: center; display: flex; flex-direction: column; 
                justify-content: center; align-items: center; font-size: 18px;">
                <div v-for="(r, index) in fullData" v-bind="r">
                <b>{{r}}</b></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg></div></div>`
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
