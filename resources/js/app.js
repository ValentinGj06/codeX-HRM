require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
    el: '#app',
    data: {
        mode: 'multiple',
        formats: {
            input: ['YYYY-MM-DD'],
        },
        selectedDate: new Date(),
    }
});
new Vue({
    el: '#checkbox_group',
    data() {
        return {
            checkbox_grouped: [],
        }
    },
    methods: {
        uniqueCheck(e){
            this.checkbox_grouped = [];
            if (e.target.checked) {
                this.checkbox_grouped.push(e.target.value);
            }
        }
    }
});