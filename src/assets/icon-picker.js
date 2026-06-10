import './style.css';
import { createApp } from 'vue';
import IconPicker from './IconPicker.vue';

const $ = window.jQuery;

window.WordplateFontawesomePicker = {
    inputElement: null,
    _app: null,

    open(inputElement) {
        this.inputElement = inputElement;
        $('body').append('<div id="iconpicker"></div>');
        this._app = createApp(IconPicker);
        this._app.mount('#iconpicker');
    },

    close() {
        if (this._app) {
            this._app.unmount();
            this._app = null;
        }
        $('#iconpicker').remove();
    },
};
