/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

import IllestWaveform from "1llest-waveform-vue"
import "1llest-waveform-vue/lib/style.css"

const app = createApp({});
const form = createApp({});

import cards from './components/cards.vue';

import temario from './components/temario.vue';
import address from './components/Address.vue';
import PaymentOptions from './components/PaymentOptions.vue';
import Experience from './components/Experience.vue';
import Interes from './components/Interes.vue';
import Phone from './components/Phone.vue';
import Mail from './components/Mail.vue';

app.use(IllestWaveform);
app.component('cards', cards);
form.component('temario', temario);
form.component('AddressForm' , address);
form.component('payment-options', PaymentOptions);
form.component('experience', Experience);
form.component('interes', Interes);
form.component('phone', Phone);
form.component('mail', Mail);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
form.mount('#address');
