/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
alert("clicked");
(function ($, Drupal, window, document) {
    alert("clicked");

  'use strict';
  alert("clicked");
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
      alert("clicked");
    attach: function (context, settings) {
        alert("clicked");
        $(function() {
            alert("clicked");
            $('h1').click(function() {
                alert("clicked");
            });
        })

    }
  };

})(jQuery, Drupal, this, this.document);
