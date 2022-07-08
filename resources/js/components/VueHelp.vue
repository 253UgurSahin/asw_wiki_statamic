<template lang="">
    <div class="w-fit fixed flex flex-col items-end z-40 bottom-1 right-1 sm:right-3 gap-y-4">
        <div @click="open = !open" class="origin-bottom-right max-w-100 bg-white rounded-md shadow-md px-4 py-2 flex flex-col gap-y-4 transition-all transform duration-200" :class="open ? 'scale-100' : 'scale-0'">
            <slot></slot>
        </div>

        <div  @click="open = !open" class="w-fit flex justify-center items-center text-5xl md:text-6xl cursor-pointer bg-white rounded-full p-1 text-red-asw hover:shadow-md transition-all">
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