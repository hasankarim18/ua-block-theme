<?php
// This file is generated. Do not modify it manually.
return array(
	'Banner' => array(
		'apiVersion' => 3,
		'name' => 'ua-blocks/banner',
		'title' => 'Banner',
		'category' => 'ua-blocks',
		'icon' => 'money',
		'description' => 'University Alpha Theme Blocks',
		'keywords' => array(
			'banner',
			'ub-banner',
			'uabt-blocks',
			'ua'
		),
		'version' => '1.0.0',
		'textdomain' => 'uadomain',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'imageId' => array(
				'type' => 'number',
				'default' => ''
			),
			'backgroundImageUrl' => array(
				'type' => 'string',
				'default' => '/wp-content/themes/ua-block-theme/images/library-hero.jpg'
			)
		),
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'Button' => array(
		'apiVersion' => 3,
		'name' => 'ua-blocks/custom-button',
		'title' => 'Button (Custom)',
		'category' => 'ua-blocks',
		'icon' => 'button',
		'description' => 'University Alpha Theme Button Block',
		'keywords' => array(
			'button',
			'custom button',
			'uabt-button',
			'ua',
			'ua button'
		),
		'version' => '1.0.0',
		'textdomain' => 'uadomain',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Click me'
			),
			'linkObject' => array(
				'type' => 'object',
				'default' => array(
					'url' => '/'
				)
			),
			'target' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'size' => array(
				'type' => 'string',
				'default' => 'medium'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'var(--wp--preset--color--primary)'
			),
			'paddingLeft' => array(
				'type' => 'string',
				'default' => '20px'
			),
			'paddingRight' => array(
				'type' => 'string',
				'default' => '20px'
			),
			'paddingTop' => array(
				'type' => 'string',
				'default' => '10px'
			),
			'paddingBottom' => array(
				'type' => 'string',
				'default' => '10px'
			),
			'borderRadius' => array(
				'type' => 'string',
				'default' => '5px'
			)
		),
		'supports' => array(
			
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'GenericHeading' => array(
		'apiVersion' => 3,
		'name' => 'ua-blocks/generic-heading',
		'title' => 'GenericHeading',
		'category' => 'ua-blocks',
		'icon' => 'text',
		'description' => 'University Alpha Theme Blocks',
		'keywords' => array(
			'heading',
			'generic heading',
			'uabt-menu',
			'ua',
			'ua heading'
		),
		'version' => '1.0.0',
		'textdomain' => 'uadomain',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Heading text...'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'color' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => '16px'
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '700'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'Header' => array(
		'apiVersion' => 3,
		'name' => 'ua-blocks/header',
		'title' => 'Header',
		'category' => 'ua-blocks',
		'icon' => 'menu',
		'description' => 'University Alpha Theme Blocks',
		'keywords' => array(
			'header',
			'menu',
			'uabt-menu',
			'ua'
		),
		'version' => '1.0.0',
		'textdomain' => 'uadomain',
		'attributes' => array(
			
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./style-index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
