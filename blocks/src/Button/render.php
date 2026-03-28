<?php
$text = sanitize_text_field($attributes['text'] ?? '');
$linkObject = $attributes['linkObject'];
$textColor = sanitize_text_field($attributes['textColor'] ?? '');
$size = $attributes['size'] ?? 'small';
$backgroundColor = sanitize_text_field($attributes['backgroundColor'] ?? '');
$padding = $attributes['paddingTop'] . ' ' . $attributes['paddingRight'] . ' ' . $attributes['paddingBottom'] . ' ' . $attributes['paddingLeft'];
$border_radius = $attributes['borderRadius'] ?? '';



$btn_classes = sprintf(
    'uabt-btn btn-%s uatb-btn--%s',
    esc_attr($size),
    esc_attr($backgroundColor)
);
$btn_styles = sprintf(
    'color: %s;border-radius: %s;',
    esc_attr($textColor),
    esc_attr($border_radius)
);


?>

<div <?php echo
    get_block_wrapper_attributes([
        'style' => "width:100%; display:flex; justify-content:center;align-items:center;"
    ]); ?>>
    <a style="<?php echo $btn_styles; ?>" href=" <?php echo esc_url($linkObject['url']); ?>"
        class="<?php echo ($btn_classes); ?>">
        <?php echo wp_kses_post($text); ?> </a>
</div>