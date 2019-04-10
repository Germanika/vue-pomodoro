<template>
  <div class="timer">
    <h1>{{ timeDisplay }}</h1>
    <button v-on:click="toggleCountdown">
      <span v-if="intervalId">Pause</span>
      <span v-else>Start</span>
    </button>
    <button v-on:click="setTimeLeft(startTime)">Reset</button>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
import timeFormatter from '../utils/timeFormatter';

const defaultStartTime = 30 * 60;
export default {
  name: 'Timer',
  data() {
    return {
      startTime: defaultStartTime,
      timeLeft: defaultStartTime,
      timeDisplay: timeFormatter(defaultStartTime),
      intervalId: null,
    };
  },
  methods: {
    toggleCountdown() {
      if (this.intervalId) {
        this.clearTimer();
      } else {
        this.intervalId = setInterval(() => this.updateTimeLeft(), 1000);
      }
    },
    setTimeLeft(timeLeft) {
      this.timeLeft = timeLeft;
      this.timeDisplay = timeFormatter(timeLeft);
    },
    updateTimeLeft() {
      if (this.timeLeft > 0) {
        this.setTimeLeft(this.timeLeft - 1);
      } else {
        this.clearTimer();
        this.onOutOfTime();
      }
    },
    onOutOfTime() {
      this.setTimeLeft(this.startTime);
      // TODO: something better than an alert!
      alert("You're out of time!");
    },
    clearTimer() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
};
</script>

<style scoped>
button {
  background: #987284;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  margin: 0 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
