<template lang="">
    <div class="w-fit fixed flex flex-col items-end z-20 bottom-12 md:bottom-2 right-1 sm:right-3 gap-y-4">
        <div v-show="show" @click="open = !open" class="origin-bottom-right z-20 sm:mr-10 max-w-100 bg-white rounded-md shadow-md px-4 py-2 flex flex-col gap-y-4 transition-all transform duration-200" :class="open ? 'z-10 scale-100' : 'scale-0'">
            <slot></slot>
        </div>

        <div  @click="open = !open" class="w-fit z-20 flex justify-center items-center text-5xl md:text-6xl cursor-pointer bg-white rounded-full p-1 text-red-asw hover:shadow-xl hover:scale-105 transition-all transform">
            <i class="fa-solid fa-circle-info"></i>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        open: false
    }),

    methods: {

    },

    mounted() {
    }
}
</script>