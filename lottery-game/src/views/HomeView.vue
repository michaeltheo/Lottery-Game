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
              @click="handleCLick(index)"
            >
              {{ index }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="numbers in pickednumbers" :key="numbers">
      {{ numbers }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      pickednumbers: [],
      errormessage: "",
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    handleCLick(ballnubmer) {
      if (this.pickednumbers.length < 5) {
        this.pickednumbers.push(ballnubmer);
      } else {
        this.errormessage = "You cant pick more than 5 numbers ";
      }
      console.log(this.pickednumbers);
      console.log(this.errormessage);
    },
  },
};
</script>
