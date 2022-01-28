<template>
    <Navbar></Navbar>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
  background:#ffffff;
}
a{
  text-decoration:none;
  color:rgb(255, 255, 255);
}
li{
  list-style:none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
