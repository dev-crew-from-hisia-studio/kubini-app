/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'hour-glass': '&#xe979;',
            'loading': '&#xe979;',
            'spinner': '&#xe97a;',
            'loading2': '&#xe97a;',
            'spinner2': '&#xe97b;',
            'loading3': '&#xe97b;',
            'spinner3': '&#xe97c;',
            'loading4': '&#xe97c;',
            'spinner4': '&#xe97d;',
            'loading5': '&#xe97d;',
            'spinner5': '&#xe97e;',
            'loading6': '&#xe97e;',
            'spinner6': '&#xe97f;',
            'loading7': '&#xe97f;',
            'spinner7': '&#xe980;',
            'loading8': '&#xe980;',
            'spinner8': '&#xe981;',
            'loading9': '&#xe981;',
            'spinner9': '&#xe982;',
            'loading10': '&#xe982;',
            'spinner10': '&#xe983;',
            'loading11': '&#xe983;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/pi/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
