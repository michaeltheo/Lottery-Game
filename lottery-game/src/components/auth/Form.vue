<template>
  <div>
    <img
      src="../../assets/epigrafi-opap-.gif"
      class="mx-auto h-44 w-42 rounded-lg"
    />
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          <div v-if="!login">Log In</div>
          <div v-else>Register</div>
        </h1>
        <form @submit.prevent="validate" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="p-5">
              <label>Email address</label>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              v-model="email"
              class="rounded-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <br />
            <div class="p-5">
              <label>Password</label>
            </div>
            <input
              type="password"
              placeholder="Enter your Password"
              class="appearance-none mt-4 rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="password"
            />
          </div>

          <div>
            <button
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              <div v-if="login">Create Account</div>
              <div v-else>Log In</div>
            </button>
          </div>
          <div
            v-if="error"
            class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p class="font-bold">Be Warned</p>
            <p>{{ this.error }}</p>
          </div>
        </form>
      </div>
    </div>
    <div class="text-grey-dark mt-6 hover:text-amber-700">
      <div>
        {{ this.info }}
        <button @click="changetoLogIn">{{ name2 }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      auth: "",
      login: false,
      name2: "Log In",
      info: "Create your account now ",
    };
  },
  methods: {
    ...mapActions(["signUpAction", "signInAction", "authActions"]),
    validate() {
      this.error = "";
      if (!this.email) {
        this.error = `E-mail field can't be empty`;
      } else if (!this.password) {
        this.error = `Password field can't be empty`;
      } else if (!this.email && !this.password) {
        this.error = `Fields can't be empty`;
      } else {
        if (this.login) {
          this.signIn();
        } else {
          this.signUp();
        }
      }
    },
    signIn() {
      this.signUpAction({ email: this.email, password: this.password });
      console.log("hfjfg");
    },
    signUp() {
      this.signInAction({ email: this.email, password: this.password });
    },
    async authenticate() {
      if (this.action.toLowerCase() == "login") {
      }
    },
    changetoLogIn() {
      console.log(this.login);
      this.login = !this.login;
      if (this.login) {
        this.name2 = "Login";
        this.info = "Already have an account? ";
      } else {
        this.name2 = "Register";
        this.info = "Create your account";
      }
    },
  },
  computed: {
    ...mapGetters(["getError", "isUserAuth"]),
  },
  watch: {
    "$store.state.error": {
      handler() {
        this.error = this.getError;
      },
      "$store.state.isAuthenticated": {
        handler() {
          this.authenticate = this.isUserAuth;
        },
      },
    },
  },
};
</script>

<style></style>
