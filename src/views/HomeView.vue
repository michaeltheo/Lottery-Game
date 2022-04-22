<template>
  <div>
    <NavBar />
    <div class="flex">
      <div class="flex">
        <div class="w-1/2">
          <div class="m-auto left-0 right-0 grid grid-cols-10 gap-15">
            <div class="p-10" v-for="index in 30" :key="index">
              <div class="inline-flex">
                <div
                  class="rounded-full text-4xl flex justify-center pt-2 pb-2 bg-orange-500 hover:animate-bounce cursor-pointer"
                  @click="handleCLick(index)"
                >
                  {{ index }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 pt-2">
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
            ></svg>
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
      router.push({ name: "LiveDraw" });
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
