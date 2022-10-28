<template>
  <div class="container-main">
    <div class="flexbox-signin">
      <h1 class="title-app">TO-DO<br>TASK APP</h1>
      <form @submit.prevent="signUp">
        <label class="" for="form3Example8">Email</label>
        <div class="">
          <input
            type="email"
            id="form3Example8"
            class=""
            v-model="email"
            required
          />
        </div>
        <label class="" for="form3Example5">Password</label>
        <div class="">
          <input
            v-model="password"
            class=""
            :type="passwordFieldType"
            id="exampleInputPassword5"
            required
          />
          <div class="">
            <i
              v-if="!hidePassword"
              @click="hidePassword = !hidePassword"
              class=""
            ></i>
            <i
              v-else
              @click="hidePassword = !hidePassword"
              class=""
            ></i>
          </div>
        </div>
        <label class="" for="exampleInputPassword2">Confirm password</label>
        <div class="">
          <input
            v-model="confirmPassword"
            class=""
            :type="passwordFieldType"
            id="exampleInputPassword2"
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
        </div>
        <p v-if="errorMsg" class="" role="alert">{{ errorMsg }}</p>
        <button type="submit" class="">Sign Up</button>
        <div class="container-signin">
          <p>
            Have an account?
            <OwnRouter :route="route" :buttonText="buttonText" />
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import OwnRouter from "./OwnRouter.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/auth";

// Route Variables
const route = "/auth/login";
const buttonText = "Sign In";
// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
// Error Message
const errorMsg = ref("");
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const hidePassword = ref(true);
const redirect = useRouter();
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value =
        "The email or password you entered is incorrect, please try again.";
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Invalid token";
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');

a {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}

.title-app {
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: .1rem;
  font-family: 'Montserrat Alternates', sans-serif;
}

input {
  width: 100%;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 5px;
  margin: 2% 0 3% 0;
  padding: 2% 0 2% 3%;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 1rem;
}

button {
  background-color: white;
  color: blue;
  width: 104%;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 5px;
  margin-top: 7%;
  padding: 2% 0 2% 3%;
    /* font-family: 'Montserrat Alternates', sans-serif; */


}

.container-signin {
  text-align: center;
  margin-top: 8%;
}
</style>
