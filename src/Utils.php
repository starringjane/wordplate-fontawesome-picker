<?php

namespace StarringJane\WordplateFontawesomePicker;

class Utils
{
    public static function createDirectory($path) {
        if (!$path) {
            return false;
        }

        if (is_array($path)) {
            foreach ($path as $item) {
                self::createDirectory($item);
                return true;
            }
        }

        if (file_exists($path)) {
            return false;
        }

        return mkdir($path, 0777, true);
    }

    public static function copyDir(string $source, string $destination)
    {
        self::createDirectory($destination);

        $files = array_diff(scandir($source), ['.', '..']);

        foreach ($files as $filename) {
            $from = $source . DIRECTORY_SEPARATOR . $filename;
            $to = $destination . DIRECTORY_SEPARATOR . $filename;
            copy($from, $to);
        }
    }
}
