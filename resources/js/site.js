import { createApp } from 'vue'

import VueHelp from './components/VueHelp.vue'
// form
import VueInput from './components/form/VueInput.vue'
import VueSearch from './components/form/VueSearch.vue'

let app = createApp({
    components: {
        'vue-help': VueHelp,
        'vue-input': VueInput,
        'vue-search': VueSearch,
    },

    data: () =>({
        navOpen: false,
    }),
});

app.mount('#app');