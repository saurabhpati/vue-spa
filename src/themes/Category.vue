<template>
    <div class="columns">
        <div class="column is-one-third" v-for="post in posts" :key="post.id">
            <app-post :link="post.rest_api_enabler.Link">
              <h3 slot="title" v-html="post.title.rendered"></h3>
              <span slot="content" v-html="post.excerpt.rendered"></span> 
            </app-post>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-post": Post
  },
  methods: {
    loadPosts() {
      let categoryId = this.$route.params.id == "mobile" ? 11 : 2;
      this.$store.dispatch("postsModule/updateCategory", categoryId);
    }
  },
  created() {
    this.loadPosts();
  },
  watch: {
    $route: function(newRoute) {
      this.loadPosts();
    }
  },
  computed: {
    ...mapGetters("postsModule", ["posts"])
  }
};
</script>

