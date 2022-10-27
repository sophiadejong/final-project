<template>
  <div class="container-tasks">
    <!-- <h2 class="title-margin">Add a new task</h2> -->
    <div class="task-form" id="formInputs">
        <div class="title-add">Add a new task</div>
      <input
        type="text"
        id="form3Example1"
        class=""
        placeholder="New task title"
        v-model="title"
      />
      <div>
        <textarea
          type="text"
          id="form3Example2"
          class=""
          placeholder="Description"
          v-model="description"
        />
      </div>
      <div class="show-error">
        <p v-if="showErrorMessage" class="" role="alert">{{ errorMessage }}</p>
        <button @click.prevent="errorFunction" class="btn-add-task">Add a task</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../store/task'

const getTasks = useTaskStore()
const title = ref('')
const description = ref('')

const showErrorMessage = ref(false)

const errorMessage = ref(null);
const emit = defineEmits(["childEmitTask"])

const errorFunction = () => {
  if (title.value.length === 0 || description.value.length === 0) {
    showErrorMessage.value = true;
    errorMessage.value = "Task needs a title and description to be saved"
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 5000);
  } else {
    const newTask = {
      title: title.value,
      description: description.value,
    };
    emit("childEmitTask", newTask);
    title.value = "";
    description.value = "";
    id.value = "";
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;700&display=swap');

.title-margin {
  padding-left: 6%;
  margin: 0 0 2% 0;
  text-transform: uppercase;
}

.title-add {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 3%;
  font-size: 1.2rem;
  /* margin: 0; */
  color: white;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: bold;
}

.container-tasks h2 {
  font-size: 1rem;
  color: blue;
  letter-spacing: 0;
}

.container-tasks {
  /* margin-top: 10%; */
  /* padding: 8% 8% 0 8%; */
  height: fit-content;
  font-family: "Darker Grotesque", sans-serif;
}

.task-form {
  background-color: blue;
  /* width: 23%; */
  border-radius: 25px;
  padding: 6%;
  font-family: "Darker Grotesque", sans-serif;
}

.show-error p {
  color: white;
  font-size: 0.8;
}

input,
textarea {
  background-color: white;
  width: -webkit-fill-available;
  font-family: "Darker Grotesque", sans-serif;
  border: 2px solid antiquewhite;
  margin: 2% 0 4% 0;
  border-radius: 5px;
  padding: 2% 0 2% 3%;
}

.btn-add-task {
  background-color: white;
  border: 2px solid antiquewhite;
  border-radius: 5px;
  width: 100%;
  color: blue;
  font-weight: bold;
  padding: 2% 0 2% 3%;
}
</style>
