<template>
  <Header></Header>
  <Cards></Cards>
</template>

<script>
import Cards from '../components/Cards'
import Header from '../components/Header'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Cards,
    Header,
  }
}
</script>
