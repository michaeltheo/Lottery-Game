<template>
  <div>
    <NavBar />
    <span class="text-neutral-800 subpixel-antialiased font-bold">
      <h6>My History</h6>
    </span>
    <div class="flex justify-center" v-if="bet.length == 0">
      <h4>You have no History</h4>
    </div>
    <div else class="flex flex-wrap items-center justify-around">
      <div v-for="idx in bet" :key="idx.id">
        <HistoryCard :bet="idx" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import HistorySemiItem from "../components/HistorySemiItem.vue";
import HistoryFullItem from "../components/HistoryFullItem.vue";
import HistoryCard from "../components/HistoryCard.vue";
import db from "@/main";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  getDoc,
  docs,
  doc,
  orderBy,
} from "firebase/firestore";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      bet: [],
    };
  },
  components: {
    NavBar,
    HistorySemiItem,
    HistoryFullItem,
    HistoryCard,
  },
  methods: {
    handleShow() {
      this.show = !this.show;
      console.log(this.show);
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  mounted() {
    setTimeout(() => {
      const colRef = collection(db, "bets");
      const q = query(
        colRef,
        where("user_id", "==", this.getUser.uid),
        orderBy("timestamp", "desc")
      );
      getDocs(q).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          {
            this.bet.push({ ...doc.data(), id: doc.id });
          }
        });
      });
    }, 1);
  },
};
</script>

<style></style>
