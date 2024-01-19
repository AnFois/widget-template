function executeWidgetCode() {

    require( ["scripts/vue.min", "DS/DataDragAndDrop/DataDragAndDrop"],   function(Vue, DataDragAndDrop) {

        Vue.component('my-component', {
            template:`
            <div class="card" style="width: 18rem; margin-top:20px">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>`
        });

        let myWidgetApp = new Vue({
            el: '#app',

            data: {
               show: true,
               message: "Showww!!",
               currentPage: "#index"
            },

            methods: {
                toggleShow: function() {
                    this.show = !this.show;
                },

                navigateTo: async function(page){
                    return this.currentPage = page;
                },

                dropzone: function(eltHTML){
                    DataDragAndDrop.droppable(eltHTML[0], {
                        drop: function(data){
                           console.log('Drop data ' + data);
                           var dataDnD = JSON.parse(data);
                           var physicalid = dataDnD.data.items[0].objId;
                           widget.body.style="border:5px hidden;"
                           myWidget.displayInfo({physicalid: physicalid});
                        },
                        enter: function(){
                            widget.body.style="border:5px solid orange;"
                        },
                        leave: function(){
                            widget.body.style="border:5px hidden;"
                        }
                     });                 
                },
            }
        });
    });
        
}
