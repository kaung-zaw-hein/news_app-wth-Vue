<template>
  <div id="nav">
    <div class="logo_container">
        <router-link to="/"><img src="../../public/Brnyr-logos_transparent.png" alt=""></router-link> 
    </div>
    <div class="router-link-container">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">About</router-link>
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
    }
    .router-link-container a.router-link-exact-active {
        color: #FFFA65;
    }
    .box{
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translate(-50%,-50%);
    }
    .input {
        padding: 10px;
        width: 80px;
        height: 80px;
        background: none;
        border: 4px solid #fafafa;
        border-radius: 50px;
        box-sizing: border-box;
        font-family: Comic Sans MS;
        font-size: 26px;
        color: #ffffff;
        outline: none;
        transition: .5s;
    }
    .box:hover input{
        width: 350px;
        background: #272133;
        border-radius: 10px;
    }
    input:focus{
        width: 350px;
        background: #272133;
        border-radius: 10px;
    }
    .box:focus i{
        opacity: 0;
    }
    i{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(-50%,-50%);
        font-size: 26px;
        color: #000000;
        transition: .2s;
    }
    .box:hover i{
        opacity: 0;
        z-index: -1;
    }
</style>