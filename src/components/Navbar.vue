<template>
  <div id="nav">
    <div class="logo_container">
        <router-link to="/"><img src="../../public/Brnyr-logos_transparent.png" alt=""></router-link> 
    </div>
    <div class="router-link-container">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">About</router-link>
         <router-link :to="{name:'Category',params:{catego:'business'}}">Business</router-link>
         <router-link :to="{name:'Category',params:{catego:'entertainment'}}">Entertainment</router-link>
         <router-link :to="{name:'Category',params:{catego:'technology'}}">Technology</router-link>
         <router-link :to="{name:'Category',params:{catego:'health'}}">Health</router-link>
         <router-link :to="{name:'Category',params:{catego:'science'}}">Science</router-link>
         <router-link :to="{name:'Category',params:{catego:'sports'}}">Sports</router-link>
    </div>
    <div class="box">
        <form name="search" >
            <input type="text" class="input" name="txt" v-model="search"
            @keydown.enter="Searchkey">
        </form>
            <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'
export default {
    setup(){
        let search = ref("");
        let router = useRouter();
        let Searchkey =  () => {
            router.push({ name: 'Search', params: { searchkey: search.value } })
            search.value = "";
        }
        return{ search, Searchkey};
    }
}
</script>

<style .scoped>
    #nav{
        display:flex;
        align-items:center;
        padding:10px 0;
       background-color:#3D3D3D;
       position: relative;
    }
    .logo_container{
        margin: 0 20px;
    }
    .logo_container img{
        width:100px;
        height:50px;
    }
    .router-link-container{
        margin-left: 10px;
    }
    .router-link-container a{
        margin-right:20px;
        transition:0.5s;
    }
    .router-link-container a.router-link-exact-active {
        color: #FFFA65;
    }
    .box{
        top: 0;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: center;
    }
    .input {
        padding: 10px;
        padding-left: 20px;
        width: 200px;
        background: none;
        border: none;
        border-bottom: 1px solid #fafafa;
        box-sizing: border-box;
        font-family: Comic Sans MS;
        color: #ffffff;
        outline: none;
        transition: .5s;
    }
    i{
        color: #ffffff;
        transition: .2s;
        margin-right: -15px;
    }
</style>