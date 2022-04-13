<template scoped>
  <div class="TOLIOS bg-slate-100 rounded-lg">
    <div class="text-center items-center">
      <img class="w-30 h-20" src="../assets/opapimage.png" />
      <h6>
        You have Won:
        <span class="text-3xl"> {{ prize }} € </span>
      </h6>
      <button
        class="float-left p-4 bg-slate-300 rounded-xl m-2"
        @click="handlePlayAgain"
      >
        Play Again
      </button>
      <button class="float-right p-4 rounded-lg bg-slate-300 m-2">
        Save to History
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "ModalView",
  props: ["prize"],
  methods: {
    ...mapActions(["ToggleActiveLiveDraw"]),
    handlePlayAgain() {
      this.ToggleActiveLiveDraw;
      router.push("/");
    },
  },
};
</script>

<style>
.TOLIOS {
  width: 800px;
}
</style>
