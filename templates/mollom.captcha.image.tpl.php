<?php
/**
 * @file
 * Provide the HTML output for the CAPTCHA image display.
 *
 * Available variables:
 * - $captcha_url:  The CAPTCHA image to present based
 * - $audio_enabled: boolean indicates if audio CAPTCHAs are enabled
 *   for this site.
 */

$instructions = t("Type the characters you see in the picture; if you can't read them, submit the form and a new image will be generated. Not case sensitive.");
$image_alt_text = t('Type the characters you see in this picture.');
?>

<?php
  $captcha_output = theme('image', array('path' => $captcha_url, 'alt' => $image_alt_text, 'getsize' => FALSE));
?>
<div class="grid-2"><span class="mollom-captcha-content mollom-image-captcha"><?php print $captcha_output; ?></span></div>>
