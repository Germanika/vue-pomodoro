<template>
  <div id="app">
    <h1>Stay Focused</h1>
    <div class='card task'>
      <CurrentTask />
    </div>
    <div class='card timer'>
      <h2>Time Left:</h2>
      <Timer />
    </div>
  </div>
</template>


<script>
import Timer from './components/Timer.vue';
import CurrentTask from './components/CurrentTask.vue';

export default {
  name: 'app',
  components: {
    Timer,
    CurrentTask,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  color: #25283d;
}
#app > h1 {
  color: white;
}
.card {
  border: none;
  border-radius: 2px;
  box-shadow: 2px 1px 2px black;
  max-width: 500px;
  width: 100%;
  margin: 12px 0;
  padding: 24px 0 24px;
  text-align: center;
  background: white;
}
body {
  background: #263d42;
}
</style>
