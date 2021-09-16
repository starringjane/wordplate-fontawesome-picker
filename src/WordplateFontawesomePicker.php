<?php

namespace StarringJane\WordplateFontawesomePicker;

class WordplateFontawesomePicker
{
    public $version = '1.0.0';

    public $name = 'wordplate-fontawesome-picker';

    public function __construct()
    {
        $this->registerHooks();
    }

    public static function create()
    {
        return new self();
    }

    public function registerHooks()
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueAssets']);
    }

    public function enqueAssets()
    {
        $this->publishAssets();

        $styles_uri = $this->getAssetUri('style.css');
        $script_uri = $this->getAssetUri('index.js');
        $picker_script_uri = $this->getAssetUri('icon-picker.js');

        wp_enqueue_style('gutenberg-wordplate-fontawesome-picker', $styles_uri, false, $this->version, 'all');
        wp_enqueue_script('gutenberg-wordplate-fontawesome-picker', $script_uri, [], $this->version);
        wp_localize_script('gutenberg-wordplate-fontawesome-picker', 'WordplateFontawesomePickerLocalized', [
            'picker_script_uri' => $picker_script_uri,
        ]);
    }

    public function publishAssets()
    {
        $source = realpath(__DIR__ . '/../dist');
        $destination = wp_upload_dir()['basedir'] . DIRECTORY_SEPARATOR . $this->name . DIRECTORY_SEPARATOR . 'dist';

        Utils::copyDir($source, $destination);
    }

    public function getAssetUri($filename = '')
    {
        $url = wp_upload_dir()['baseurl'] . '/' . $this->name . '/dist/' . $filename;

        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
            $url = str_replace('http://', 'https://', $url);
        }

        return $url;
    }
}
