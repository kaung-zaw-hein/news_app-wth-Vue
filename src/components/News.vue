<template>
  <div>
        <div class="band animate__animated animate__fadeInUp"
        v-if="headers.length > 0">
        <h1>NEWS</h1>
            <div 
            v-for="(header, index) in headers" :key="header.title" class="item"
            :class="{item1: index === 0}">
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
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
export default {
    setup(){
     const store = useStore();
     let apivalue =` https://newsapi.org/v2/everything?q=n&sortBy=popularity&apiKey=${store.state.apikey} `;
     let headers = ref([]);
     let result = async() => {
        fetch(apivalue)
            .then((response) => {
            return response.json();
        }).then((data) =>{
            data = data.articles;   
            data = data.slice(0, 19);   
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
    /* .container{
        display: flex;
        flex-wrap: wrap;  
        justify-content:flex-start;  
        background-attachment: fixed;
    }
    .card_container {
        width:450px;
        display:flex;
        flex-direction:column;
        justify-content:start;
        color:rgb(0, 0, 0);
        margin: 15px 10px;
        cursor:pointer;
    }
    .card_container:hover img{
        transition-delay:1.5s;
        transform:scale(1.5);
        border-radius:0;
    }
    img{
        width: 100%;
        transition:1s;
    }
    
    .content{
        text-align: left;
        padding-left: 15px;
    }
    .date{
        color:rgb(125, 180, 180);
        float: left;
    }
    .author{
        color:cadetblue;
        float: right;
    } */
</style>