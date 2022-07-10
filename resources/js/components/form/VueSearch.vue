<template lang="">
    <form action="/" class="relative max-w-screen-md w-full mx-auto">
        <vue-input type="text" name="q" placeholder="search..."></vue-input>
        <button type="submit" class="absolute top-5 right-5 text-gray-900 hover:text-red-asw">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
</template>
<script>
import VueInput from './VueInput.vue'

export default {
    components: {
        'vue-input': VueInput,
    }
}
</script>