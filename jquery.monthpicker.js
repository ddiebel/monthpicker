/**
 * monthPicker - a simple but useful month/year picker
 * this plugin creates two selectboxes where the user can can select month and year. afterwars a unix-timestamp is written into the
 * original input field.
 *
 * Copyright (c) Dirk Diebel <http://www.werzahltmehr.de/>.
 * Released under MIT License
 *
 *
 * <usage>
 *
 * $('#id-selector').monthpicker([options]);
 *
 * [options] accepts following JSON properties:
 *  minYear     - the minimum year the selectbox should show
 *  maxYear     - the maximum year the selectbox should show
 *  lang        - language in which all labels should be generated
 *  month       - a map of month labels (overrides the lang parameter if set)
 *  class       - a custom class of selectbox tags
 *  f.e. german months
 *   month : ['January','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
 * </usage>
 *
 *
 * @author Dirk Diebel
 * @version 2.0.0
 * @date May 26, 2014
 *
 */
(function ($) {
    $.fn.monthpicker = function (options, language) {

        var month  = {
            "de" : {
                "month" :  ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ]
            },
            "at" : {
                "month" :  ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ]
            },
            "es" : {
                "month" : ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
            },
            "fr" : {
                "month" : ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
            },
            "hu" : {
                "month" : ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december']
            },
            "it" : {
                "month" : ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
            },
            "nl" : {
                "month" : ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
            },
            "pt-BR" : {
                "month" : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            }
        }, defaults = {
            minYear: "1980",
            maxYear: "2010",
            class: "",
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }, i, yearbox, monthbox, obj = $(this);

        if (!$.isEmptyObject(options)) {
            defaults = $.extend(defaults, month[options.lang]);
        }

        options = $.extend(defaults, options);

        obj.hide();

        if (options.minYear > options.maxYear) {
            for (i = options.minYear; i >= options.maxYear; i--) {
                yearbox += '<option value="' + i + '">' + i + '</option>';
            }
        } else {
            for (i = options.minYear; i <= options.maxYear; i++) {
                yearbox += '<option value="' + i + '">' + i + '</option>';
            }
        }

        $.map(options.month, function (n, i) {
            monthbox += '<option value="' + i + '">' + n + '</option>';
        });
        var yearElement = $('<select class="yearpick ' + options.class + '">' + yearbox + '</select>'),
            monthElement = $('<select class="monthpick ' + options.class + '">' + monthbox + '</select>');
      
        monthElement.insertBefore(obj);
        yearElement.insertAfter(obj);

        var createTimestamp = function () {
            obj.attr('value', Math.round(Date.UTC(yearElement.val(), monthElement.val(), 1)) / 1000);
        }

        yearElement.change(createTimestamp);
        monthElement.change(createTimestamp);

        if (obj.val()!= ""){
            var timestamp = new Date(parseInt(obj.val()) * 1000);
            yearElement.val(timestamp.getFullYear());
            monthElement.val(timestamp.getMonth());
        }
    };
})(jQuery);
