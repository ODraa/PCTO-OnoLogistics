<template>
<!-- <Chrono/> -->
<div class="html">
  </div>
  <div class="body">
    <HelloWorld>
      <router-view/>
    </HelloWorld>
    
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Chrono from './components/Chrono.vue'

export default {
  // name: 'App',
  components: {
    HelloWorld,
    // Chrono,
  }
}
</script>

<style lang="scss">

.html{
  font-size: 14px;
  background: #f6f6f9;
}

.body{
  width: auto;
  height: auto;
  font-family: poppins, sans-serif;
  font-size: 0.88rem;
  user-select: none;
  // overflow-x: hidden;
  background: #181a1e;
}
</style>