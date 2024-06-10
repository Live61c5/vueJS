import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
           tasks: [
               { id: 1, content: 'Faire la vaisselle', done: false },
               { id: 2, content: 'Sortir les poubelles', done: true },
               { id: 3, content: 'Promener le chien', done: false },
               { id: 4, content: 'Faire les courses', done: false },
               { id: 5, content: 'Faire le ménage', done: false },
           ],
        }
    },
    methods: {
        taskClass(task) {
            if (task.done) {
                return 'text-success text-decoration-line-through';
            } else {
                return 'text-danger';
            }
        }
    }   
}).mount('#app')