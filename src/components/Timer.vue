<template>
  <div class="timer">
    <h1>{{ timeDisplay }}</h1>
    <button v-on:click="toggleCountdown" class='start-stop-button'>
      <span v-if="intervalId">Pause</span>
      <span v-else>Start</span>
    </button>
    <button v-on:click="setTimeLeft(startTime)">Reset</button>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
import timeFormatter from '../utils/timeFormatter';
import notify from '../utils/notify';

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
      notify('Time to take a break!');
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
  background: #e85f5c;
  box-shadow: 1px 1px 1px gray;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 5px 8px;
  margin: 0 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 120%;
}
button.start-stop-button {
  background: #263d42;
}
</style>
