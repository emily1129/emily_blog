<template>
  <div>
    <p class="line typewritter">
      Yu-Hsuan Liu
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.line {
  position: relative;
  top: 50%;
  width: 6em;
  margin: 0 auto;
  border-right: 2px solid rgb(255, 255, 255);
  font-size: 140%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

.typewritter {
  animation: typewritter 4s steps(40) 1s 1 normal both,
    blinkTextCursor 500ms steps(40) infinite normal;
}

@keyframes typewritter {
  from {
    width: 0;
  }
  to {
    width: 7em;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgb(0, 0, 0);
  }
  to {
    border-right-color: transparent;
  }
}

</style>
