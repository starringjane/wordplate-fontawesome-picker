var $ = window.jQuery;

function init () {
    $('body').on('click', '.fontawesomepicker input', onClickOnPicker);
}

async function onClickOnPicker () {
    const inputElement = this;

    await loadIconPicker();

    window.WordplateFontawesomePicker.open(inputElement);
}

function loadIconPicker () {
    return new Promise(function (resolve, reject) {
        try {
            if ('WordplateFontawesomePicker' in window) {
                return resolve();
            }

            loadScript(window.WordplateFontawesomePickerLocalized.picker_script_uri, function () {
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
}

function loadScript(src, callback) {
    var script = document.createElement('script');

    script.onload = callback;
    script.src = src;

    document.body.appendChild(script);
}

$(document).ready(init);
