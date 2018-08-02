<template>
    <div class="detail-page">
    <v-jumbotron :src="pageArticle.imgSrc" dark>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                    <h1 style="margin-left:50%" class="display-3">{{pageArticle.title}}</h1>
                </v-flex>
            </v-layout>
        </v-container>
  </v-jumbotron>
  <v-container>
      <v-layout justify-center>
          <v-flex xs8 >
              <v-card flat >
                      {{pageArticle.realContent}}
              </v-card>
              <v-card flat >
                  <p v-if="!pageArticle.author" > Loading... </p>
                  <p v-else style="margin-left:80%" > by : {{pageArticle.author.username}} </p>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    created () {
        this.triggerId()
    },
    methods: {
        triggerId () {
            let query = this.$route.params.id
            // console.log(query)
            this.getPageArticle(query)
        },
        ...mapActions([
            'getPageArticle'
        ])
    },
    computed: {
        ...mapState([
            'pageArticle'
        ])
    }
}
</script>

<style scoped>

</style>
