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
    const docRef = doc(db, "bets", "PMGUqUsuZ3Fjs0diLkJv");
    const docSnap = getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>

<style></style>
