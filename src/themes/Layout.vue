<template>
  <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <category></category>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Category from "./Category.vue";

export default {
  components: {
      'app-header': AppHeader,
      'app-footer': AppHeader,
      'category': Category
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
$primary: #287ab1;
@import "~bulma";
.columns {
  flex-wrap: wrap;
}
</style>


