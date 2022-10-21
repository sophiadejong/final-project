<template>
<body>
<Header/>
<NewTask @childEmitTask="addTask" />
<div class="container-old-items">
<TaskItem 
    v-for="task in useTaskStore().tasks"
    :key="task.id"
    :item="task"
    @childToggleStatus="completedTask"
    @childEditStatus="editTask"
    @childDeleteStatus="deleteTask"
  />
</div>
<Footer/>
</body>
</template>

<script setup>

import Header from '../components/Header.vue'
import NewTask from '../components/NewTask.vue'
import TaskItem from '../components/TaskItem.vue'
import Footer from '../components/Footer.vue'
import { useTaskStore } from '../store/task'

useTaskStore().getTasks();
const addTask = async (newTask) => {
  // console.log(newTask)
  const response = await useTaskStore().addTask(newTask.title, newTask.description);
  // console.log(response)
  useTaskStore().getTasks();

};

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

.container-old-items {
  width: 900px;
  display: flex;
  /* columns: ; */
  /* padding-bottom: 10%; */
  padding: 3% 8% 10% 8%;
}
</style>

