<template>
  <body>
    <Header />
    <div class="all-items">
      <div class="show-filters">
        <h4>SHOW:</h4>
      <button @click="filter='showAll'" class="filter-btns" style="background-color: blue; color: white">All tasks</button>
      <button @click="filter='completedTasks'" class="filter-btns" style="background-color: green; color: white">Completed</button>
      <button @click="filter='incompletedTasks'" class="filter-btns" style="background-color: red; color: white">Incompleted</button>
    </div>
      <!-- <div class="title-add">Add a new task</div> -->
      <div class="container-old-items">
        <NewTask @childEmitTask="addTask" />
        <div v-for="task in tasks" :key="task.id" v-show="filter==='showAll' ? true : (filter==='completedTasks' ? task.is_completed : !task.is_completed)">
          <TaskItem
            :item="task"
            @childToggleStatus="completedTask"
            @childEditStatus="editTask"
            @childDeleteStatus="deleteTask"
          />
        </div>
      </div>
    </div>
    <Footer />
  </body>
</template>
<script setup>
import Header from "../components/Header.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../store/task";
import { ref, computed } from "vue";
const filter = ref('showAll') 
useTaskStore().getTasks();
const addTask = async (newTask) => {
  // console.log(newTask)
  const response = await useTaskStore().addTask(
    newTask.title,
    newTask.description
  );
  // console.log(response)
  useTaskStore().getTasks();
};
const tasks = computed(() => {
  // useTaskStore().tasks.filter()
  return useTaskStore().tasks;
});
// un/completed true or false
// crear variable que marque el filtro, usar variable en el filter y retornar lo que de el filter
const completedTask = async (id, booleanValue) => {
  booleanValue = !booleanValue;
  const response = await useTaskStore().completedTask(id, booleanValue);
  useTaskStore().getTasks();
};
const editTask = async (newTask) => {
  const response = await useTaskStore().editTask(
    newTask.title,
    newTask.description,
    newTask.id
  );
  console.log(newTask);
  useTaskStore().getTasks();
};
const deleteTask = async (id) => {
  const response = await useTaskStore().deleteTask(id);
  useTaskStore().getTasks();
};
</script>
<style>
body {
  width: 100%;
  margin: 0;
  font-family: "Darker Grotesque", sans-serif;
}
body {
  background: linear-gradient(
    90deg,
    blue 0%,
    rgba(255, 232, 214, 0) 3%,
    rgba(255, 232, 214, 0) 97%,
    blue 100%);
}
.all-items {
  padding-top: 7.5%;
  margin: 0;
  padding-bottom: 10%;
}
.container-old-items {
  width: 84%;
  display: grid;
  padding: 3% 8% 10% 8%;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(auto, auto));
  /* flex-wrap: wrap; */
  grid-template-columns: 26vw 26vw 26vw;
  /* align-items: center;
  
  justify-content: center; */
}
.show-filters {
    /* position: absolute; */
    right: 0;
    padding-left: 60%;
    padding-right: 8.5%;
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
    align-items: center;
}

.show-filters h4 {
  color: blue;
}

.filter-btns {
  width: auto;
  border-radius: 5px;
  padding: 2%;
  height: fit-content;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid transparent;
  font-family: 'Montserrat Alternates', sans-serif;
} 

@media screen and (max-width: 1100px) {
  .show-filters {
    padding-left: 45%;
    padding-right: 9%;
  }
}

@media screen and (max-width: 1070px) {
  .container-old-items {
    grid-template-columns: auto auto;
  }

}

@media screen and (max-width: 900px) {

  .all-items {
    padding-top: 20%;
  }
  .show-filters {
    padding-left: 15%;
    padding-right: 15%;
  }
  /* .filter-btns {
    font-size: 0.8rem;
  } */
  
}

@media screen and  (max-width: 780px) {
  .container-old-items {
    margin-top: 5%;
    grid-template-columns: auto;
  }

  .filter-btns {
    font-size: 0.8rem;
  }
  
}

</style>
