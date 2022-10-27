<template>
  <div class="main-container">
    <div>
      <div id="main-menu" class="main-menu container-header">
        <router-link to="/">
          <h2>TO-DO TASK APP</h2>
        </router-link>
        <p id="welcomemsg" class="">
          <u>Username:</u><b>&nbsp;<span> {{ name }}</span></b>
        </p>
        <p id="today">Today is: <b>{{ today.toDateString() }}</b></p>
        <button @click="signOut" type="button" id="btnsignout">Sign Out</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/auth'

const router = "/";
const redirect = useRouter();
const userStore = useUserStore();
const timeAcross = Date.now();
const today = new Date(timeAcross);

const email = userStore.user.email;

const name = email;

const signOut = async () => {
  try {
    // llama al usuario y le hago un logout
    await useUserStore().signOut();
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
}
h2 {
  letter-spacing: .1rem;
  font-family: 'Montserrat Alternates', sans-serif;
}

#check {
  width: 10%;
}

#btnsignout {
  background-color: white;
  color: red;
  height: fit-content;
  padding: 0.5%;
  border-radius: 5px;
  border: 2px solid transparent;
  font-weight: bold;
}

.container-header {
  font-family: "Darker Grotesque", sans-serif;
  width: 96%;
  display: flex;
  background-color: blue;
  color: white;
  /* letter-spacing: .05rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2% 0 2%;
  position: fixed;
}

a {
  color: white;
  text-decoration: none;
}

@media screen and  (max-width: 900px) {
  #welcomemsg, #today {
    display: none;
  }
}

</style>
