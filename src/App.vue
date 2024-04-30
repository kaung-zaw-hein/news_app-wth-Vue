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
  color: #2c3e50;
  max-width: 100%;
  overflow: hidden;
}
#nprogress .bar {
  background: #FFBB00 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}

#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #FFBB00; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #FFBB00; 
  border-radius: 10px;
  transition: 0.5s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #22c55e; 
}
.link-active {
  color: #FFBB00;
}

</style>
