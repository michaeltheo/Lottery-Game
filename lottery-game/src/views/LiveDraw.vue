<template>
  <div>
    <NavBar />
    <div>efwefwef{{ selectedNumbers }}</div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters({ selectedNumbers: ["getSelectedNumbers"] }),
  },
};
</script>

<style></style>
