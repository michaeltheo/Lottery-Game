<template>
  <div>
    <NavBar />
    <!-- <div>efwefwef{{ selectedNumbers }}</div> -->
    <div v-if="showModal" class="grid place-items-center h-screen">
      <ModalView
        :prize="prize"
        :winningNumbers="winningNumbers"
        :showModal="showModal"
      />
    </div>
    <div v-else>
      <div class="float-left w-1/2">
        <h6 class="py-10 text-neutral-800 subpixel-antialiased font-bold">
          Bet
        </h6>
        <div
          class="p-3 inline-block"
          v-for="Number in winningNumbers"
          :key="Number"
        >
          <div
            class="rounded-full text-xl text-black flex justify-center pt-2 pb-2 bg-orange-500 w-10 h-10 hover:animate-bounce"
          >
            {{ Number }}
          </div>
        </div>
      </div>

      <div class="float-right w-1/2">
        <h6 class="py-10 text-neutral-800 subpixel-antialiased font-bold">
          Submitted Bet
        </h6>
        <div
          class="p-3 inline-block"
          v-for="number in selectedNumbers"
          :key="number"
        >
          <div
            class="rounded-full text-xl text-white flex justify-center pt-2 pb-2 w-10 h-10 hover:animate-bounce"
            :class="
              winningNumbers.includes(number) ? 'bg-lime-700' : 'bg-red-800'
            "
          >
            {{ number }}
          </div>
        </div>
      </div>

      <div class="fixed bottom-0 right-0 pb-4 pr-7">
        <i class="font-semibold text-xl">Winning Prize: </i>
        <span class="text-3xl">{{ prize }} €</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalView from "../components/ModalView.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      winningNumbers: [],
      handle: null,
      commonValues: [],
      showModal: false,
      count: 0,
      prize: 0,
    };
  },
  components: {
    NavBar,
    ModalView,
  },
  computed: {
    ...mapGetters({
      selectedNumbers: ["getSelectedNumbers"],
      drawliveactive: ["getDrawLiveActive"],
    }),
  },
  methods: {
    ...mapActions(["ToggleActiveLiveDraw"]),
    generateRandom() {
      if (this.winningNumbers.length !== 5) {
        var RandomNubmer = Math.floor(Math.random() * 30 + 1);
        if (this.winningNumbers.includes(RandomNubmer)) {
          console.log("Number already displayed");
        } else {
          this.winningNumbers.push(RandomNubmer);
          if (this.selectedNumbers.includes(RandomNubmer)) {
            this.count++;
          }
          switch (this.count) {
            case 5:
              this.prize = 20;
              break;
            case 4:
              this.prize = 10;
              break;
            case 3:
              this.prize = 5;
              break;

            default:
              break;
          }
        }
      } else {
        clearInterval(this.handle);
        this.showModal = true;
        this.ToggleActiveLiveDraw();
      }
    },
  },
  mounted() {
    setTimeout(4000);
    this.handle = setInterval(() => {
      this.generateRandom();
    }, 1000);
  },
};
</script>

<style></style>
