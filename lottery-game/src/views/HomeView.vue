<template>
  <div>
    <NavBar />
    <div>
      <div class="home">use is logged in {{ getUser.email }}</div>
      <div class="m-auto left-0 right-0 flex p-4 flex-wrap">
        <div class="p-4" v-for="index in 30" :key="index">
          <div class="inline-flex">
            <div
              class="rounded-full text-xl flex justify-center pt-2 pb-2 bg-orange-500 w-10 h-10 hover:animate-bounce cursor-pointer"
            >
              {{ index }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>
