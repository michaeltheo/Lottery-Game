<template>
  <div>
    <transition name="flip">
      <div v-if="showFront" @click="showFront = !showFront" key="1">
        <HistorySemiItem :bet="bet" />
      </div>
      <div v-else @click="showFront = !showFront" key="2">
        <HistoryFullItem :bet="bet" />
        <div
          class="bg-blue-400 border-l-4 border-blue-900 text-white p-4"
          role="info"
        >
          <p class="font-bold">Press alt+X to delete bet</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HistorySemiItem from "../components/HistorySemiItem.vue";
import HistoryFullItem from "../components/HistoryFullItem.vue";
export default {
  data() {
    return {
      showFront: true,
    };
  },
  components: {
    HistorySemiItem,
    HistoryFullItem,
  },
  props: {
    bet: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.flip-leave-active,
.flip-enter-active {
  transition: 0.4s ease-in;
}

.flip-enter,
.flip-leave {
  transition: 0.5s;
  transform: rotateY(180deg);
  opacity: 1;
}
</style>
