<?php



class UABT_BlockHandler
{
    public function __construct()
    {

        add_action('init', [$this, 'register_blocks']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_scripts']);
        add_filter('block_categories_all', [$this, 'get_block_categories']);
        // block assets
        add_action('enqueue_block_assets', [$this, 'enqueue_block_assets_callback']);

    }

    public function enqueue_block_assets_callback()
    {
        wp_enqueue_style(
            'blockAndFrontStyles',
            get_theme_file_uri() . '/inc/blockAndFrontStyles.css',
            [],
            '1.0.0',
            'all'
        );
    }

    public function get_block_categories($categories)
    {
        return array_merge(

            [
                [
                    'slug' => 'ua-blocks',
                    'title' => "UA Blocks",
                    'icon' => 'star',
                ],
            ],
            $categories
        );
    }



    public function register_blocks()
    {
        $manifest_data = require get_template_directory() . '/blocks/build/blocks-manifest.php';
        //var_dump($manifest_data);
        foreach (array_keys($manifest_data) as $block_type) {
            register_block_type(get_template_directory() . '/blocks/build/' . $block_type);

        }

    }


    public function enqueue_frontend_scripts()
    {

        $manifest_data = require get_template_directory() . '/blocks/build/blocks-manifest.php';
        foreach (array_keys($manifest_data) as $block_type) {
            wp_enqueue_style(
                "uabt_{$block_type}_style",
                get_template_directory_uri() . '/blocks/build/' . $block_type . '/style-index.css',
                [],
                '1.0.0',
                'all'
            );
        }
    }


}

new UABT_BlockHandler();