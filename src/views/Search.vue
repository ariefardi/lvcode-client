<template>
    <div>
        <Navbar/>
        <SearchPage/>
    </div>
</template>

<script>
import SearchPage from '@/components/SearchPage.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        SearchPage,
        Navbar
    }
}
</script>

<style scoped>

</style>
