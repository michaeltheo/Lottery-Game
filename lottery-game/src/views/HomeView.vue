<template>
  <div>
    <NavBar />
    <div class="flex">
      <!-- <div class="home">use is logged in {{ getUser.email }}</div> -->
      <div class="flex-1">
        <div class="w-3/4">
          <div class="m-auto left-0 right-0 flex p-5 flex-wrap">
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
      </div>
      <div class="w-1/4">
        <span>SELECTED NUMBERS</span>
        <div class="m-auto left-0 right-0 flex p-5 flex-wrap">
          <div class="p-5" v-for="number in pickednumbers" :key="number">
            <div
              class="rounded-full text-xl text-white flex justify-center pt-2 pb-2 bg-lime-900 w-10 h-10 hover:animate-bounce"
            >
              {{ number }}
            </div>
            <div
              class="pr-3 w-8 animate-bounce"
              @click="handleClickDeleteBalls(number)"
            >
              <img src="../assets/x.png" />
            </div>
          </div>
        </div>
        <div v-if="pickednumbers.length != 0">
          <div
            class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              class="fill-current w-4 h-4 mr-2 hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
              />
            </svg>
            <p>Clicn on the X mark to delete selected ball</p>
          </div>
        </div>
        <br />
        <button
          :disabled="checkLiveDraw == true"
          @click="submitSelectedNumbers"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Place Your Bet
          </span>
        </button>
      </div>
    </div>
    <div class="justify center w-1/5" v-if="errormessage">
      <div
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">{{ errormessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import NavBar from "../components/NavBar.vue";
import router from "@/router";
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
    ...mapGetters(["getUser", "getDrawLiveActive", "getSelectedNumbers"]),
    checkLiveDraw() {
      if (this.pickednumbers.length == 5) {
        this.toggleActive();
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    submitSelectedNumbers() {
      this.setSelectedNumbers(this.pickednumbers);
      router.push(`/livedraw`);
    },
    ...mapMutations(["toggleActive", "setSelectedNumbers"]),
    handleCLick(ballnubmer) {
      if (this.pickednumbers.length < 5) {
        if (this.pickednumbers.includes(ballnubmer)) {
          this.errormessage = `Ball with number ${ballnubmer} is already selected `;
        } else {
          this.errormessage = "";
          this.pickednumbers.push(ballnubmer);
        }
      } else {
        if (this.pickednumbers.length < 5) {
          this.errormessage = "";
        } else {
          this.errormessage = "You cant pick more than 5 numbers ";
          setTimeout(() => {
            this.errormessage = "";
          }, 2000);
        }
      }
    },
    handleClickDeleteBalls(ball) {
      const newList = this.pickednumbers.filter((number) => number !== ball);
      this.pickednumbers = [...newList];
      if (this.pickednumbers.length < 5) {
        this.toggleActive;
      }
    },
  },
};
</script>
