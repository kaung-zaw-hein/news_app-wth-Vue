<template>
  <Source></Source>
  <Header></Header>
  <News></News>
</template>

<script>
import Source from '../components/Source'
import News from '../components/News'
import Header from '../components/Header'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Source,
    News,
    Header,
  }
}
</script>
