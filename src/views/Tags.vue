<template>
<div>
    <Navbar/>
    <v-container>
        <v-layout justify-center row wrap>
            <v-flex xs12 sm8 v-for="(article, index) in articlesByTag" :key="index" >
                <v-card style="margin:20px">
                    <v-card-media
                    :src="article.imgSrc"
                    height="200px"
                    ></v-card-media>
                    <v-card-title primary-title>
                    <div>
                          <router-link :to="`detail/${article._id}`"> <h3 class="headline mb-0"> {{article.title}} </h3> </router-link>
                        <div> {{article.content}} </div>
                        <span>by : {{article.author.username}} </span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn :to="`/edit/${article._id}`" v-if="article.author.username==userlogin" icon flat color="orange"><v-icon>edit</v-icon> </v-btn>
                    <v-btn @click="deleteArticle(index)" v-if="article.author.username==userlogin" icon flat color="orange"><v-icon>delete</v-icon></v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat small > {{article.category}} </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {mapState, mapActions} from 'vuex'
export default {
    components: {
        Navbar
    },
    data () {
        return {
            userlogin: ''
        }
    },
    created () {
        this.$store.dispatch('getArticles')
        this.userlogin = localStorage.getItem('username')
        this.triggerUser ()
    },
    computed: {
        ...mapState([
            'articles', 'articlesByTag'
        ])
    },
    methods: {
        ...mapActions([
            'deleteArticle','getByAuthor', 'getByCategory'
        ]),
        triggerUser () {
            let query = this.$route.params.tags
            console.log(query, 'ini query')
            this.getByCategory(query)
        }
    }
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none
}
a:hover {
    color: grey
}
</style>
