<template>
  <div class="item-container">
    <h3 class="title">{{ item.title }}</h3>
    <p class="description">{{ item.description }}</p>
    <div class="buttons-container">
      <button
        type="button"
        class="completed-task"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Mark as complete"
        @click="completedTask"
      >
        Completed task
        <span
          v-if="!isCompleted"
          style="
            .card-title,
            .card-text {
              text-decoration: line-through;
            }
          "
          class="card-text"
        >
        </span>
        <span v-else class=""> </span>
      </button>
      <button
        type="button"
        class="show-edit"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Edit"
        @click="showEdit"
      >
        Show edit
        <i class=""></i>
      </button>
      <button
        type="button"
        class="delete-task"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Delete"
        @click="deleteTask"
      >
        Delete task

        <i class=""></i>
      </button>
    </div>
    <div class="edit-container" v-if="showEditOptions">
      <form @submit.prevent="editTask" class="edit-task">
        <input
          type="text"
          id="form3Example20"
          class=""
          placeholder="Edit title"
          v-model="taskTitle"
        />
        <div>
          <textarea
            type="text"
            id="form3Example21"
            class=""
            placeholder="Edit description"
            v-model="taskDescription"
          />
        </div>
        <div class="">
          <button type="submit" id="btnEdit" class="edit-btn">Edit Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const taskTitle = ref("");
const taskDescription = ref("");
const showEditOptions = ref(false);
const isCompleted = ref(false);
const emit = defineEmits([
  "childEditStatus",
  "childToggleStatus",
  "childDeleteStatus",
]);

const props = defineProps(["item"]);
const showEdit = () => {
  showEditOptions.value = !showEditOptions.value;
};

const editTask = () => {
  const newTask = {
    title: taskTitle.value,
    description: taskDescription.value,
  };
  emit("childEditStatus", newTask);
  (taskTitle.value = ""), (taskDescription.value = "");
};

const completedTask = (id) => {
  isCompleted.value = !isCompleted.value;
  emit("childToggleStatus", props.item.id);
};

const deleteTask = () => {
  emit("childDeleteStatus", props.item.id);
};
</script>


<!-- <style scoped>
.title {
  font-size: 0.5rem;
}
</style> -->

<style>
.title {
  text-align: center;
  margin: 0;
  font-size: 1.2rem;
  font-family: 'Montserrat Alternates', sans-serif;
}

.description {
  height: 12vh;
}
.item-container {
  background-color: blue;
  display: block;
  color: white;
  width: 300px;
  padding: 2%;
  margin-right: 2%;
  border-radius: 25px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.completed-task,
.show-edit,
.delete-task,
.edit-btn {
  width: auto;
  /* aspect-ratio: 1; */
  border-radius: 5px;
  padding: 2%;
  color: blue;
  font-weight: bold;
  border: 2px solid transparent;
}

.edit-container {
  padding-top: 5%;
}

</style>
