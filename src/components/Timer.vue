<template>
  <div class="timer">
    <h1>{{ timeLeft }}</h1>
    <button v-on:click="toggleCountdown">
      <span v-if="intervalId">Pause</span>
      <span v-else>Start the timer!</span>
    </button>
    <button v-on:click="timeLeft = startTime">Reset</button>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "Timer",
  data: function() {
    return {
      startTime: 5,
      timeLeft: 5,
      intervalId: null
    };
  },
  methods: {
    toggleCountdown: function() {
      if (this.intervalId) {
        this.clearTimer();
      } else {
        this.intervalId = setInterval(() => this.updateTimeLeft(), 1000);
      }
    },
    updateTimeLeft: function() {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 1;
      } else {
        this.clearTimer();
        this.onOutOfTime();
      }
    },
    onOutOfTime: function() {
      this.timeLeft = this.startTime;
      alert("You're out of time!");
    },
    clearTimer: function() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
