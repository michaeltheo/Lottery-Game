<template scoped>
  <div class="TOLIOS bg-slate-100 rounded-lg">
    <div class="">
      <img class="flex-1 items-center" src="../assets/opapimage.png" />
      <h6>
        You have Won:
        <span class="text-3xl"> {{ prize }} € </span>
      </h6>
      <button
        class="justify-center p-4 bg-slate-300 rounded-xl m-2"
        @click="handlePlayAgain"
      >
        Play Again
      </button>

      <button
        @click="handlegotoHistory"
        class="justify-center p-4 rounded-lg bg-slate-300 m-2"
      >
        Save to History
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";
import db from "@/main";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export default {
  name: "ModalView",
  props: ["prize", "winningNumbers"],
  computed: {
    ...mapGetters(["getUser", "getSelectedNumbers"]),
  },
  methods: {
    ...mapActions(["ToggleActiveLiveDraw"]),
    handlePlayAgain() {
      this.ToggleActiveLiveDraw;
      router.push("/");
    },
    handlegotoHistory() {
      try {
        const docRef = addDoc(collection(db, "bets"), {
          user_id: this.getUser.uid,
          draw_numbers: this.getSelectedNumbers,
          player_bet: this.winningNumbers,
          timestamp: serverTimestamp(),
          total_amount_won: this.prize,
        });
        console.log("Bet wriitend with id", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      router.push({ name: "History" });
    },
  },
};
</script>

<style>
.TOLIOS {
  width: 500px;
}
</style>
