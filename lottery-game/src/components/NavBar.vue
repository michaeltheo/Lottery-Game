<template>
  <div class="font-sans antialiased bg-cyan-800" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
        <img src="../assets/kino-logo.png" class="mr-4 w-23 h-16" />

        <span class="font-semibold text-xl tracking-tight">
          <i class="text-amber-500"> Mtheo Tzoker </i>
        </span>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
            to="/"
          >
            Home
          </router-link>
          <router-link
            to="/livedraw"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            LiveDraw
          </router-link>
          <router-view />
        </div>
      </div>
      <div class="pr-2">
        <Avatar
          image="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
        />
      </div>
      <button
        @click="handleLogOut"
        class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0"
      >
        Log out
      </button>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Avatar from "vue-avatar-component";
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      error: "",
    };
  },
  computed: {
    ...mapGetters(["getError"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    handleLogOut() {
      this.error = "";
      this.signOutAction();
      console.log("Logged Out");
      if (this.error.length > 1) {
        console.log(this.error);
      }
    },
  },
};
</script>

<style></style>
