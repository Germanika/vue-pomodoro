<template>
  <div class="current-task">
    <label>What am I working on right now?</label>
    <textarea rows='3' />
    </div>
</template>

<script>
export default {
  name: 'CurrentTask',
};
</script>

<style scoped>
label {
  display: block;
  padding: 10px;
  font-size: 120%;
}
textarea {
  font-size: 150%;
  width: 80%;
  resize: vertical;
}
</style>
