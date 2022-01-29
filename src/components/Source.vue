<template>
  <Splide :options="{ rewind: true ,perPage: 5, perMove: 3,}">
    <SplideSlide v-for="source in sources" :key="source.id">
     <a :href="source.url">
          <img  
       :src="getImgUrl(source.id)" 
       :alt="source.id">
       <h1>{{source.name}}</h1>
     </a>
    </SplideSlide>
  </Splide>
</template>
<script>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import { ref } from "vue";
import { useStore } from 'vuex'
export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const store = useStore();
    let apivalue =` https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${store.state.apikey} `;
    let sources = ref([]);
    let options = {
      rewind: true,
      perPage: 6,
    };
    let getImgUrl = (pic) => {
         var images = require.context('../assets/images/', false, /\.png$/)
        return images('./' + pic + ".png")
    }
    let result = async() => {
        fetch(apivalue)
            .then((response) => {
            return response.json();
        }).then((data) =>{
            data = data.sources;   
            sources.value = data;
        }).catch((err) =>{
            console.log(err.message);
        })
     }
     result();
    return { options, apivalue, sources, result,getImgUrl };
  },
} );
</script>

<style scoped>
.splide__slide{
    width:60px!important;
    margin:20px 10px;
}
img{
    width: 60px;
    height:60px;
    border-radius: 50%;
}
h1{
    font-size:0.8em;
    margin:0 auto;
}
</style>