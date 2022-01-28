<template>

  <div class="band animate__animated animate__fadeInUp"
  v-if="headers.length > 0">
  <h1 class="title">Top Headlines in US</h1>
    <div 
    v-for="(header, index) in headers" :key="header.title" class="item"
    :class="{item1: index===0 }">
        <a :href="header.url" class="card">
        <div class="thumb" :style="{backgroundImage:`url(${header.urlToImage})`}"></div>
        <article>
            <h1>{{header.title}}</h1>
            <p>{{header.description}}</p>
            <span>{{header.author}}</span>
            <span>{{header.publishedAt}}</span>
        </article>
        </a>
    </div>
  </div>
    <Spinner v-else></Spinner>
 
</template>

<script>
import Spinner from './Spinner'
import { ref } from "vue";
import { useStore } from 'vuex'
export default {
  components: { Spinner },
 setup(){
     const store = useStore();
     let apivalue =` https://newsapi.org/v2/top-headlines?country=us&apiKey=${store.state.apikey} `;
     let headers = ref([]);
     let result = async() => {
        fetch(apivalue)
            .then((response) => {
            return response.json();
        }).then((data) =>{
            data = data.articles;
            data = data.slice(0, 7);   
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

<style >
    .band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  margin-top:20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}
@media (min-width: 30em) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 60em) {
  .band {
    grid-template-columns: repeat(4, 1fr);
  }
}
.title {
  color:rgb(73, 72, 72);
  width:400px;
  font-size:2em;
}
.card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
}
.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}
.card article {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card h1 {
  font-size: 18px;
  margin: 0;
  color: #333;
}
p{
color: #333;
text-align: left;
font-size: 14px;
}
.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
}
.card .thumb {
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
}
@media (min-width: 60em) {
  .item1 {
    grid-column: 1 / span 2;
  }
  .item1 h1 {
    font-size: 24px;
  }
}

</style>