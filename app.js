const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Gym con Vue - por la gorda Val',
        tareas: [],
        nuevaTarea:''
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            },
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
        }
        }
    }
);
