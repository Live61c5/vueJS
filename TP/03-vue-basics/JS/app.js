import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            title: 'Hello Vue!',
            nom: 'Doe',
            prenom: 'John',
            zoo: [ 'Lion', 'Tigre', 'Ours', 'Crocodile' ],
            user: {
                nom: 'Doe',
                prenom: 'John',
                age: 24,
                enfants: ['Alice', 'Bob', 'Charlie'],
            },
            imageExemple: 'images/vue.png',
            altExemple: 'alt Vue.js',
            nomDeClasse: 'mt-3 text-center text-primary',

        }
    }
}).mount('#app')