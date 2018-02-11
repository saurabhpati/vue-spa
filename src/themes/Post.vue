<template>
    <div class="card">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" :href="link">Read More</a>
        </footer>
    </div>
</template>

<script>
export default {
  props: ['link']
}
</script>

