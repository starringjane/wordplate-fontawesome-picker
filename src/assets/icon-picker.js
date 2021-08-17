import Vue from 'vue';
import IconPicker from './IconPicker';

var $ = window.jQuery;

window.WordplateFontawesomePicker = {
    inputElement: null,

    open (inputElement) {
        this.inputElement = inputElement;

        $('body').append('<div id="iconpicker"><icon-picker></icon-picker></div>');

        this.createVueApp(Vue, {
            el: '#iconpicker',
            components: {
                IconPicker,
            },
        });
    },

    createVueApp (Vue, options) {
        return new Vue(options);
    },
};
