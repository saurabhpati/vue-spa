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

const fetchDataAsync = (store, route) => {
  let categoryId = route.params.id == "mobile" ? 11 : 2;
  return store.dispatch("postsModule/updateCategory", categoryId);
};

export default {
  asyncData(store, route) {
    return fetchDataAsync(store, route);
  },
  components: {
    "app-post": Post
  },
  methods: {
    loadPosts() {
      fetchDataAsync(this.$store, this.$route);
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

