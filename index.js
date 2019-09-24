import AlertComponent from './components/AlertComponent';

export default {

    register(Vue) {
        Vue.component('alert-component', AlertComponent);
    }

};

export { AlertComponent };