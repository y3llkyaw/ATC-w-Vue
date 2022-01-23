<template>
    <div>
        <Nav/>
        <slot/>
    </div>
</template>
<script>
import Nav from './Nav.vue'
export default {
  components: { Nav },
    name:'Master',
}
</script>