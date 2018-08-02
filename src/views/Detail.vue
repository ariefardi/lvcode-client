<template>
    <div class="detail">
        <Navbar/>
        <DetailPage/>
    </div>
</template>

<script>
import DetailPage from '@/components/DetailPage.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        DetailPage,
        Navbar
    }
}
</script>

<style scoped>

</style>
