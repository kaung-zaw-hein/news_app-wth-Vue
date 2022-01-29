<template>
    <h1></h1>
    <!-- <div v-if="searchKey.length > 0">
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
    <Spinner v-else></Spinner> -->
</template>

<script>
export default {

}
</script>

<style>

</style>