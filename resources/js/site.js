import { createApp } from 'vue'

import VueClick from './components/VueClick.vue'
// form
import VueInput from './components/form/VueInput.vue'

let app = createApp({
    components: {
        'vue-click': VueClick,
        'vue-input': VueInput,
    }
});

app.mount('#app');