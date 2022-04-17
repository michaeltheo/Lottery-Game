<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import db from "@/main";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  docs,
  doc,
  getDocFromCache,
} from "firebase/firestore";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  mounted() {
    setTimeout(() => {
      const colRef = collection(db, "bets");
      getDocs(colRef).then((snapshot) => {
        let bet = [];
        snapshot.docs.forEach((doc) => {
          bet.push({ ...doc.data(), id: doc.id });
        });
        console.log(bet);
      });
    }, 3000);
  },
};
</script>

<style></style>
