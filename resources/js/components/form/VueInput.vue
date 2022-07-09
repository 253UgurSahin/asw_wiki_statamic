<template lang="">
    <div class="flex flex-col mb-4">        
        <input v-if="type !== 'textarea'" :type="type" :placeholder="!placeholder ? 'Type hier je waarde' : placeholder" :name="name" :class="class"/>
        <textarea v-if="type === 'textarea'" :placeholder="!placeholder ? 'Type hier je waarde' : placeholder" :name="name" :class="class"></textarea>
    </div>
</template>

<script>
export default {
    props: ['name', 'label', 'type', 'placeholder'],

    data: () => ({
        class: "transition-all duration-300 focus:shadow-xl shadow-md mt-3 outline-none border-l-4 focus:border-l-6 hover:border-l-6 transition border-red-asw px-5 py-2 bg-white text-zinc-800"
    }),
}
</script>