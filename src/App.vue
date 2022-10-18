<template>
  <h1>Task App</h1>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'login' }">Login</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<script setup>
// import { createClient } from "@supabase/supabase-js";
import { onMounted } from "vue";
import {login,newTask} from './api'

onMounted(async() => {
  const id = await login('sophiamarinadejongy@gmail.com','1234567');
  newTask({
    user_id: id,
    title: 'Titulo',
    description: 'Description de otro task'
  })

});
</script>

<style scoped></style>
