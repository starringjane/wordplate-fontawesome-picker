<?php

namespace StarringJane\WordplateFontawesomePicker;

class WordplateFontawesomePicker
{
    public $version = '1.0.0';

    public $name = 'wordplate-fontawesome-picker';

    public $path;

    public function __construct($path)
    {
        $this->path = $path;
        $this->registerHooks();
    }

    public static function create($path)
    {
        return new self($path);
    }

    public function registerHooks()
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueAssets']);
        add_action('wp_ajax_sjwfp_search', [$this, 'search']);
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
            'ajax_uri' => admin_url('admin-ajax.php'),
            'availableStyles' => $this->getAvailableStyles(),
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

    public function search()
    {
        $search = empty($_POST['search']) ? '' : $_POST['search'];

        wp_send_json([
            'results' => $this->searchForIcons($search),
        ]);

        wp_die();
    }

    private function searchForIcons($searchTerm) {
        $files = $this->searchInFiles($searchTerm);

        $icons = array_map(function ($file) {
            $path = array_reverse(explode(DIRECTORY_SEPARATOR, $file));
            $name = str_replace('.svg', '', $path[0]);
            $style = $path[1];
            $styleClass = $this->getStyleClass($style);
            $nameClass = $this->getNameClass($name);

            return [
                'style' => $style,
                'class' => "$styleClass $nameClass",
                'svg' => file_get_contents($file),
            ];
        }, $files);

        return $icons;
    }

    private function searchInFiles($searchTerm) {
        $searchTerms = explode(' ', $searchTerm);

        $files = null;

        foreach ($searchTerms as $searchTerm) {
            $results = glob(rtrim($this->path, '/') . '/**/*' . $searchTerm . '*', GLOB_BRACE);
            $files = is_array($files) ? array_values(array_intersect($files, $results)) : $results;
        }

        return $files;
    }

    private function getNameClass($name)
    {
        return "fa-$name";
    }

    private function getStyleClass($style)
    {
        if ($style === 'brands') return 'fab';
        if ($style === 'duotone') return 'fad';
        if ($style === 'light') return 'fal';
        if ($style === 'regular') return 'far';
        if ($style === 'solid') return 'fas';
        if ($style === 'thin') return 'fat';
        if ($style === 'sharp-light') return 'fasl';
        if ($style === 'sharp-regular') return 'fasr';
        if ($style === 'sharp-solid') return 'fass';
        return 'far';
    }

    private function getAvailableStyles()
    {
        $directories = glob(rtrim($this->path, '/') . '/*', GLOB_ONLYDIR);

        return array_map(function ($dir) {
            $parts = explode(DIRECTORY_SEPARATOR, $dir);
            return end($parts);
        }, $directories);
    }
}
