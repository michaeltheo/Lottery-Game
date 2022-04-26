<template>
  <div class="bg-amber-300 rounded-lg w-50 px-2 mt-4 mb-4">
    <div class="text-xs flex-end w-6">
      <button @click.alt="handleDeleteDoc()">X</button>
    </div>
    <div>
      <p>
        Draw day Time :
        <span class="text-xs">
          {{ handleTimestamp() }}
        </span>
      </p>
    </div>
    <p>My Bet:</p>
    <div class="flex flex-wrap justify-between">
      <div v-for="ball in bet.player_bet" :key="ball">
        <div
          class="rounded-full text-sm text-black pt-2 pb-2 bg-orange-500 w-6 h-6 leading-3 hover:animate-bounce"
        >
          {{ ball }}
        </div>
      </div>
    </div>
    <p>Drawed Numbers:</p>
    <div class="flex flex-wrap justify-between">
      <div v-for="ball in bet.draw_numbers" :key="ball">
        <div
          class="rounded-full text-sm text-black pt-2 pb-2 w-6 h-6 leading-3 hover:animate-bounce"
          :class="
            bet.player_bet.includes(ball) ? 'bg-lime-700' : 'bg-orange-500'
          "
        >
          {{ ball }}
        </div>
      </div>
    </div>
    <p>
      Total amount won:

      <span class="text-2xl"> {{ bet.total_amount_won }} € </span>
    </p>
    <div>
      <div v-if="bet.total_amount_won > 0">
        <p>Status: Won</p>
      </div>
      <div v-else>
        <p>Status: Lost</p>
      </div>
    </div>
    <!-- <button @click="$router.go(-1)">Go Back</button> -->
  </div>
</template>

<script>
import { deleteDoc, doc } from "firebase/firestore";
import db from "@/main";
export default {
  props: {
    bet: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handleTimestamp() {
      console.log(this.bet.timestamp);

      var convertTimestamp = new Date();
      var time =
        convertTimestamp.getDate() +
        "/" +
        convertTimestamp.getMonth() +
        "/" +
        convertTimestamp.getFullYear() +
        " " +
        convertTimestamp.getHours() +
        ":" +
        convertTimestamp.getMinutes() +
        ":" +
        convertTimestamp.getSeconds();

      return time;
    },

    //delete Document
    handleDeleteDoc() {
      console.log(this.bet.id);
      deleteDoc(doc(db, "bets", this.bet.id));
      this.$router.go();
    },
    // this.$router.go();
  },
};
</script>

<style></style>
