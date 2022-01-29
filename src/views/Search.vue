<template>
    <div v-if="searchKey.length > 0">
        <h1 class="searchKey"> Results of {{searchkey}}</h1>
        <div class="blog-container"
        v-for="key in searchKey" :key="key.title">
        
            <a :href="key.url">
                <div class="blog-header">
                    <div class="blog-cover" v-if="key.urlToImage !== null"
                    :style="{backgroundImage:`url(${key.urlToImage})`}">
                    <div class="blog-author">
                        <h3>{{key.author}}</h3>
                    </div>
                    
                </div>
            </div>

                <div class="blog-body">
                    <div class="blog-title">
                    <h1><a href="#">{{key.title}}</a></h1>
                    </div>
                    <div class="blog-summary">
                    <p>{{key.description}}</p>
                    </div>
                    <div class="blog-tags">
                    <ul>
                        <li v-show="key.atuhor !== null"><a href="#">{{key.author}}</a></li>
                        <li><a href="#">{{key.source.name}}</a></li>
                        <li><a :href="key.url">Website</a></li>
                    </ul>
                    </div>
                </div>
            
                <div class="blog-footer">
                    <ul>
                    <li class="published-date">{{key.publishedAt}}</li>
                    <li class="comments"><a href="#"><svg class="icon-bubble"><use xlink:href="#icon-bubble"></use></svg><span class="numero">Br</span></a></li>
                    <li class="shares"><a href="#"><svg class="icon-star"><use xlink:href="#icon-star"></use></svg><span class="numero">Nyr</span></a></li>
                    </ul>
                </div>
            </a>

        </div>
    </div>
    <Spinner v-else></Spinner>
</template>

<script>
import Spinner from '../components/Spinner'
import { ref, computed } from "vue";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: { Spinner },
  props:['searchkey'],
    setup(props){
    const route = useRoute()
     const store = useStore();
	 let searchKey = ref(['']);
     let apivalue =` https://newsapi.org/v2/everything?q=${props.searchkey}&sortBy=popularity&apiKey=${store.state.apikey} `;
	 let result = async() => {
        fetch(apivalue)
            .then((response) => {
            return response.json();
        }).then((data) =>{
            data = data.articles; 
            searchKey.value = data;
        }).catch((err) =>{
            console.log(err.message);
        })
     }
     
     result();
     
    return { apivalue, searchKey, result}
 }
}
</script>

<style>
.searchKey{
    display:block;
	margin: 48px 400px;
}
 .blog-container {
	 background: #fff;
	 border-radius: 5px;
	 box-shadow: rgba(0, 0, 0, .2) 4px 4px 2px -2px;
	 font-family: "adelle-sans", sans-serif;
	 font-weight: 100;
	 margin: 48px auto;
	 width: 20rem;
}
 @media screen and (min-width: 480px) {
	 .blog-container {
		 width: 28rem;
	}
}
 @media screen and (min-width: 767px) {
	 .blog-container {
		 width: 40rem;
	}
}
 @media screen and (min-width: 959px) {
	 .blog-container {
		 width: 50rem;
	}
}
 .blog-container a {
	 color: #4d4dff;
	 text-decoration: none;
	 transition: 0.25s ease;
}
 .blog-container a:hover {
	 border-color: #ff4d4d;
	 color: #ff4d4d;
}
 .blog-cover {
	 background-size: cover;
	 border-radius: 5px 5px 0 0;
	 height: 15rem;
	 box-shadow: inset rgba(0, 0, 0, .2) 0 64px 64px 16px;
}
 .blog-author, .blog-author--no-cover {
	 margin: 0 auto;
	 padding-top: 0.125rem;
	 width: 80%;
}
 .blog-author h3 {
	 color: #fff;
	 font-weight: 100;
}
 .blog-body {
	 margin: 0 auto;
	 width: 80%;
}
 .blog-title h1 a {
	 color: #333;
	 font-weight: 100;
}
 .blog-summary p {
	 color: #4d4d4d;
}
 .blog-tags ul {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: wrap;
	 list-style: none;
	 padding-left: 0;
}
 .blog-tags li + li {
	 margin-left: 0.5rem;
}
 .blog-tags a {
	 border: 1px solid #999;
	 border-radius: 3px;
	 color: #999;
	 font-size: 0.75rem;
	 height: 1.5rem;
	 line-height: 1.5rem;
	 letter-spacing: 1px;
	 padding: 0 0.5rem;
	 text-align: center;
	 text-transform: uppercase;
	 white-space: nowrap;
	 width: 5rem;
}
 .blog-footer {
	 border-top: 1px solid #e6e6e6;
	 margin: 0 auto;
	 padding-bottom: 0.125rem;
	 width: 80%;
}
 .blog-footer ul {
	 list-style: none;
	 display: flex;
	 flex: row wrap;
	 justify-content: flex-end;
	 padding-left: 0;
}
 .blog-footer li:first-child {
	 margin-right: auto;
}
 .blog-footer li + li {
	 margin-left: 0.5rem;
}
 .blog-footer li {
	 color: #999;
	 font-size: 0.75rem;
	 height: 1.5rem;
	 letter-spacing: 1px;
	 line-height: 1.5rem;
	 text-align: center;
	 text-transform: uppercase;
	 position: relative;
	 white-space: nowrap;
}
 .blog-footer li a {
	 color: #999;
}
 .comments {
	 margin-right: 1rem;
}
 .published-date {
	 border: 1px solid #999;
	 border-radius: 3px;
	 padding: 0 0.5rem;
}
 .numero {
	 position: relative;
	 top: -0.5rem;
}
 .icon-star, .icon-bubble {
	 fill: #999;
	 height: 24px;
	 margin-right: 0.5rem;
	 transition: 0.25s ease;
	 width: 24px;
}
 .icon-star:hover, .icon-bubble:hover {
	 fill: #ff4d4d;
}
 
</style>