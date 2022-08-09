<?php

/**
    Plugin Name: structure de base blocks jeux wordpress
    Description: intègre la structure de base pour ajouter un block personnalisé de jeu
    Author: Vaugoyeau Jérémy
    Author URI: https://github.com/VjeremyV

 */

define('GAME_PLUD_DIR', plugin_dir_url(__FILE__));
require_once plugin_dir_path(__FILE__) . 'functions/game-functions.php';

add_action( 'enqueue_block_editor_assets', 'game_addAssetsEditor');
add_action('wp_enqueue_scripts', 'game_addFront');
