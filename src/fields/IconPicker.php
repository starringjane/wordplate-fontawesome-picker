<?php

namespace StarringJane\WordplateFontawesomePicker\Fields;

use WordPlate\Acf\Fields\Field;
use WordPlate\Acf\Fields\Attributes\Pending;
use WordPlate\Acf\Fields\Attributes\Disabled;
use WordPlate\Acf\Fields\Attributes\Required;
use WordPlate\Acf\Fields\Attributes\Placeholder;
use WordPlate\Acf\Fields\Attributes\DefaultValue;
use WordPlate\Acf\Fields\Attributes\Instructions;
use WordPlate\Acf\Fields\Attributes\ConditionalLogic;

class IconPicker extends Field
{
    use ConditionalLogic;
    use DefaultValue;
    use Disabled;
    use Instructions;
    use Pending;
    use Placeholder;
    use Required;

    protected $type = 'text';

    public function __construct(string $label, ?string $name = null)
    {
        parent::__construct($label, $name);

        $this->config->set('readonly', true);
        $this->config->set('wrapper', ['class' => 'fontawesomepicker']);
    }
}
