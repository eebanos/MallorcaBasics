<?php

function mallorca_basics_alpha_preprocess_html(&$vars) {
  drupal_add_css('//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',array('type' => 'external'));
//  drupal_add_css('//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',array('type' => 'external'));

  $path = drupal_get_path('theme', 'mallorca_basics');
//  drupal_add_js(drupal_get_path('theme', 'mallorca_basics') .'/js/jquery.onepage-scroll.min.js', 'file');
//  drupal_add_css($path . '/css/onepage-scroll.css');
  drupal_add_css($path . '/css/animations.css');
  drupal_add_js(drupal_get_path('theme', 'mallorca_basics') .'/js/behaviors.js', 'file');
  
  /*Obtengo una variable global para jQuery, ruta al tema*/
  drupal_add_js('jQuery.extend(Drupal.settings, { "pathToTheme": "' . path_to_theme() . '" });', 'inline');
}

function mallorca_basics_alpha_preprocess_page(&$vars) {
    if (isset($vars['page']['content']['content']['content']['system_main']['default_message'])) {
           unset($vars['page']['content']['content']['content']['system_main']['default_message']);
           drupal_set_title(t(''));
    }
    $slogans = array(
        t('Do you have a <span>dream</span> to <span>finally</span> move to the sun and relaxed lifestyle of <span>Mallorca</span>, Spain? '),
        t('Maybe <span>setup</span> or <span>buy</span> a small owner-operated <span>bar</span>, <span>pub</span>, <span>cafe</span>, or <span>restaurant</span>? '),
        t('Need professional <span>business solutions</span> and <span>consulting</span> to start in <span>Mallorca</span>? '),
    );
    if (drupal_is_front_page()) {
        $vars['site_slogan'] = $slogans[array_rand($slogans)].'<a href="#"></a>';
    }
}

function mallorca_basics_html_head_alter(&$head_elements) {
  unset($head_elements['system_meta_generator']);
}

