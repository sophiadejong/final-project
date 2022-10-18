import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      tasks: []
    }
  },
  actions: {
    setTask(){
        // TODO guargar en el estado las tasks que nos da supabase
    },
    updateTask(id, task){
        // TODO modifica el estado del task
        // Encontrar el indice de la task con ese id y cambiarle el contenido con task
    }, 
    deleteTask(id){
        // TODO modificar el estado borrando ese task
        // Encontrar el indice de ese id y eliminamos ese indice de la array

    }, 
    addTask(task){
        // TODO modificar el estado de taks haciendo un push de la task
        // comprobar que tenemos el id al insertar el regiso, en caso de no 
        // tenerlo tendrimaos que hacer el getTask
    }
  }
})