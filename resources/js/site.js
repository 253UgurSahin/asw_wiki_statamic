import { createApp } from 'vue'

import VueHelp from './components/VueHelp.vue'
// form
import VueInput from './components/form/VueInput.vue'

let app = createApp({
    components: {
        'vue-help': VueHelp,
        'vue-input': VueInput,
    }
});

app.mount('#app');