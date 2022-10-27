<template>
  <body>
    <Header />
    <div class="all-items">
      <div class="show-filters">
      <button @click="filter='showAll'">Show all</button>
      <button @click="filter='completedTasks'">Completed</button>
      <button @click="filter='incompletedTasks'">Incompleted</button>
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

.all-items {
  padding-top: 7.5%;
  margin: 0;
}

.container-old-items {
  width: 84%;
  display: grid;
  padding: 3% 8% 10% 8%;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(auto, auto));
  /* flex-wrap: wrap; */
  grid-template-columns: auto auto auto;
  /* align-items: center;
  justify-content: center; */
}

.show-filters {
  padding-left: 10%;
}

button {
  width: auto;
  /* aspect-ratio: 1; */
  border-radius: 5px;
  padding: 1%;
  margin-right: 2%;
  color: blue;
  font-size: 0.7rem;
  font-weight: bold;
  border: 2px solid transparent;
} 
</style>
