
<template>
  <div class="item-container">
  <h3 class="title">{{ item.title }}</h3>
  <p class="description">{{ item.description }}</p>
  <div class="">
    <button type="button" class="completed-task" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as complete"
      @click="completedTask">
      <span v-if="!isCompleted" style=".card-title, .card-text {text-decoration: line-through;}" class="">
      </span>
      <span v-else class="">
      </span>
    </button>
    <button type="button" class="" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" @click="showEdit">
      <i class=""></i>
    </button>
    <button type="button" class="" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" @click="deleteTask">
      <i class=""></i>
    </button>
  </div>
  <div class="" v-if="showEditOptions">
    <form @submit.prevent="editTask">
      <input type="text" id="form3Example20" class="" placeholder="Edit title" v-model="taskTitle" />
      <div>
        <textarea type="text" id="form3Example21" class="" placeholder="Edit description" v-model="taskDescription" />
      </div>
      <div class="">
        <button type="submit" id="btnEdit" class="">
          Edit Task
        </button>
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

<style>


.item-container {
  background-color: blue;
  display: block;
  color: white;
  width: 23%;
  padding: 2%;
  margin: 4%;
  border-radius: 25px;
}

</style>

