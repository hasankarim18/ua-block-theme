<?php
$text = $attributes['text'] ?? '';
$align = $attributes['textAlign'] ?? 'left';
$color = $attributes['color'] ?? '#000000';
$font_size = $attributes['fontSize'] ?? '';
$font_weight = $attributes['fontWeight'] ?? '';
?>

<h1 <?php echo get_block_wrapper_attributes([
    'style' => sprintf(
        'text-align:%s; color:%s; font-weight:%s',
        esc_attr($align),
        esc_attr($color),
        esc_attr($font_weight),
    ),
    'class' => sprintf(
        'uatb-generic-heading uatb-generic-heading-%s',
        esc_attr($font_size)
    )
]); ?>>
    <?php echo $text; ?>
</h1>