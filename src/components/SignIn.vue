<template>
  <div class="container-main">
    <div class="flexbox-signin">
      <h1 class="title-app">TO-DO TASK APP</h1>
      <form @submit.prevent="signIn">
        <label class="" for="form1">Email</label>
        <div class="">
          <input
            type="email"
            id="form1"
            class=""
            v-model="email"
            required
          />
        </div>
        <label class="" for="form2">Password</label>
        <div class="">
          <input
            v-model="password"
            class=""
            :type="passwordFieldType"
            id="exampleInputPassword4"
            required
          />
          <div class="">
            <i
              v-if="!hidePassword"
              @click="hidePassword = !hidePassword"
              class="fa-solid fa-eye"
            ></i>
            <i
              v-else
              @click="hidePassword = !hidePassword"
              class="fa-solid fa-eye-slash"
            ></i>
          </div>
          <div></div>
        </div>
        <div class="">
          <p v-if="errorMsg" class="" role="alert">{{ errorMsg }}</p>
          <button type="submit" class="">Sign In</button>
        </div>
        <div class="container-signup">
          <div>
            <p>or</p>
            <div class="container-link"></div>
            <OwnRouter :route="routeUp" :buttonText="buttonTextUp" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import OwnRouter from "./OwnRouter.vue";
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/auth'

const routeUp = "/auth/sign-up";
const buttonTextUp = "Sign Up";
const redirect = useRouter();

const email = ref("");
const password = ref("");

const errorMsg = ref("");

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const hidePassword = ref(true);

const signIn = async () => {
  try {
    await useUserStore().signIn(email.value, password.value);
    redirect.push({ path: "/" });
  } catch (error) {
    errorMsg.value =
      "The email or password you entered is incorrect.";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style scoped>

input {
  width: 100%;
  background-color: white;
  border: 2px solid blue;
  border-radius: 5px;
  margin: 2% 0 3% 0;
  padding: 2% 0 2% 3%;
}

button {
  background-color: white;
  color: blue;
  width: 104%;
  border-radius: 5px;
  margin-top: 7%;
  padding: 2% 0 2% 3%;
  border: 2px solid white;
  font-weight: bold;
}

.container-signup {
  text-align: center;
  width: 100%;
}

.container-link {
  background-color: white;
  width: 100%;
}

</style>

<style scoped>
.title-app {
  font-size: 2.4rem;
  text-align: center;
}


a {
  color: white;
  text-decoration: underline;
  width: 100%;
  font-weight: bold;

}
</style>