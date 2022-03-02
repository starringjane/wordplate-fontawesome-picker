<?php

namespace StarringJane\WordplateFontawesomePicker\Fields;

class IconPicker extends \WordPlate\Acf\Fields\Text
{
    public function __construct(string $label, ?string $name = null)
    {
        parent::__construct($label, $name);

        if(isset($this->config)) {
            $this->config->set('readonly', true);
            $this->config->set('wrapper', ['class' => 'fontawesomepicker']);
        } else {
            $this->settings['readonly'] = true;
            $this->settings['wrapper'] = ['class' => 'fontawesomepicker'];
        }
    }
}
