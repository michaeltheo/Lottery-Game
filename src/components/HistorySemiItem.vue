<template>
  <div>
    <div class="bg-amber-300 rounded-lg w-50 px-2 mt-4 mb-4">
      <p>Drawed Numbers:</p>
      <div class="flex flex-wrap justify-between">
        <div v-for="ball in bet.draw_numbers" :key="ball">
          <div
            class="rounded-full text-sm text-black pt-2 pb-2 w-6 h-6 leading-3 hover:animate-bounce bg-orange-500"
          >
            {{ ball }}
          </div>
        </div>
      </div>
      <div v-if="bet.total_amount_won > 0">
        <p>Status: Won</p>
        <p>
          Total amount won:

          <span class="text-2xl"> {{ bet.total_amount_won }} € </span>
        </p>
      </div>
      <div v-else>
        <p>Status: Lost</p>
        <p>Total amount won: -</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    bet: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style></style>
