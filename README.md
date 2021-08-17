![Starring Jane](logo.png)

# Wordplate Fontawesome Picker

A package that allows you to pick icons from fontawesome with wordplate

## Installation

```shell
composer require starring-jane/wordplate-fontawesome-picker
```

Create a WordpressBlade instance in `functions.php`

```php
use StarringJane\WordplateFontawesomePicker\WordplateFontawesomePicker;

WordplateFontawesomePicker::create();
```

## Usage

```php
use StarringJane\WordplateFontawesomePicker\Fields\IconPicker;

IconPicker::make('Icon')
    ->instructions('Click to select an icon');
```

## Contributors

* Jef Vermeire (jef@starringjane.com) [![Twitter Follow](https://img.shields.io/twitter/follow/JefVermeire.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/JefVermeire)
* Maxim Vanhove (maxim@starringjane.com) [![Twitter Follow](https://img.shields.io/twitter/follow/MrMaximVanhove.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/MrMaximVanhove)

## Credits

Special thanks to the contributors of [wordplate](https://github.com/wordplate/wordplate) for allowing us to create Wordpress websites in a modern development environment
