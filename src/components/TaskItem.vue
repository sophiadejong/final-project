<template>
  <div class="item-container" :class="{'completed-task-bg': item.is_completed}">
    <div class="date-item">
      <div class="time">
      {{date}}
    </div>
    </div>
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
          v-if="!isCompleted">
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
          :placeholder="props.item.title"
          v-model="taskTitle"
        />
        <div>
          <textarea
            type="text"
            id="form3Example21"
            class=""
            :placeholder="props.item.description"
            v-model="taskDescription"
          />
        </div>
        <div class="edit-close-btns">
          <button type="submit" id="btnEdit" class="edit-btn">Edit task</button>
          <button v-on:click="showEditOptions = false" type="" id="closeEdit" class="close-edit-btn">Close edit task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps(["item"]);
const showEdit = () => {
  showEditOptions.value = !showEditOptions.value;
};

const taskTitle = ref(props.item.title);
const taskDescription = ref(props.item.description);
const showEditOptions = ref(false);
const isCompleted = ref(false);
const emit = defineEmits([
  "childEditStatus",
  "childToggleStatus",
  "childDeleteStatus",
]);

const date = computed ( () => {
  const time = new Date (props.item.created_at)
  return time.toDateString()
})

const editTask = () => {
  const newTask = {
    title: taskTitle.value,
    description: taskDescription.value,
    id: props.item.id
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
  height: fit-content;
}
.item-container {
  background-color: red;
  display: block;
  height: fit-content;
  color: white;
  /* flex: 1 1 auto; */
  width: 23.5vw;
  padding: 6%;
  margin-right: 2%;
  border-radius: 25px;
  transition: 1s;
}

.buttons-container, .edit-close-btns {
  display: flex;
  justify-content: space-between;
}

.date-item {
  width: 100%;
  display: flow-root;
}

.time {
  float: right;
  font-size: 0.9rem;
}

#btnEdit {
  background-color: blue;
  color: white;
}
#closeEdit {
  color: red;
  /* background-color: red; */
}

.completed-task,
.show-edit,
.delete-task,
.edit-btn,
.close-edit-btn {
  width: auto;
  /* aspect-ratio: 1; */
  border-radius: 5px;
  padding: 2%;
  color: blue;
  font-size: 0.7rem;
  font-weight: bold;
  border: 2px solid transparent;
}

.edit-container {
  padding-top: 5%;
}

.completed-task-bg {
  background-color: green;
}


</style>
