<template>
  <div class="container">
      <a href="#" class="title">{{title}}</a>
      <a :href="header.url" v-for="(header,index) in headers" :key="header">
          <div class="item1" v-show="index === 0"
           :style="{backgroundImage:`url(${header.urlToImage})`}"></div>
           <h1 class="cattitle">{{header.title}}</h1>
           <hr>
      </a>

  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
export default {
  props:["title"],
    setup(props){
     const store = useStore();
     let apivalue =` https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=${store.state.apikey} `;
     let headers = ref([]);
     let result = async() => {
        fetch(apivalue)
            .then((response) => {
            return response.json();
        }).then((data) =>{
            data = data.articles;   
            data = data.slice(0, 6);   
            headers.value = data;
        }).catch((err) =>{
            console.log(err.message);
        })
     }
     result();
     
    return { apivalue, headers, result}
 }
}
</script>


<style scoped>
    .container{
        display:flex;
        align-items:left;
        width:450px;
        flex-direction:column;
        flex-wrap:wrap;
    }
    .title{
        font-size:2em;    
        text-decoration: bold;
        margin: 0 5px;

    }
    .item1{
        width:100%;
        height:200px;
    }
    .cattitle{
        color:rgb(73, 72, 72);
        font-size:1em;
        margin-top:3px;
        margin-left:10px;
    }
    hr{
        width:100%;
        background:#3d3d3d3d;
    }
    
</style>