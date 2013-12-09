/**
 * monthPicker - a simple but useful month/year picker 
 * this plugin creates two selectboxes where the user can can select month and year. afterwars a unix-timestamp is written into the
 * original input field.
 * 
 * Copyright (c) Dirk Diebel <http://www.phpmedia.de/>.
 * Released under MIT License
 * 
 * 
 * <usage>
 * 
 * 	$('#id-selector').monthpicker([options]);
 *  
 * [options] accepts following JSON properties:
 *  minYear - the minimum year the selectbox should show
 *  maxYear  - the maximum year the selectbox should show
 *  month    - a map of month labels
 *		f.e. german months
 *		month : ['January','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']  
 * </usage>
 * 
 * 
 * @author Dirk Diebel
 * @version 1.0
 * @date August 12, 2010
 */
(function($){
 $.fn.monthpicker = function(options) {

	var defaults = {
		minYear: "1980",
		maxYear: "2010",
		month: 	['January','February','March','April','May','June','July','August','September','October','November','December']
	};
  	var options = $.extend(defaults, options);

	var yearbox;
	var monthbox;
	var obj = $(this);

	obj.hide();
	
	if(options.minYear > options.maxYear){
		for(var i=options.minYear;i>=options.maxYear;i--){
			yearbox += '<option value="'+i+'">'+i+'</option>';
		}
	}else{
		for(var i=options.minYear;i<=options.maxYear;i++){
			yearbox += '<option value="'+i+'">'+i+'</option>';
		}	
	}


	$.map(options.month, function(n, i){
		monthbox += '<option value="'+i+'">'+n+'</option>';
	});


	var yearElement = $('<select class="yearpick">'+yearbox+'</select>');
	var monthElement = $('<select class="monthpick">'+monthbox+'</select>');

	monthElement.insertBefore($(this));
	yearElement.insertAfter($(this));
	
	var createTimestamp = function() {
  		obj.attr('value',Math.round(Date.UTC(yearElement.val(),monthElement.val(),1))/1000);
	}

	yearElement.change(createTimestamp);
	monthElement.change(createTimestamp);


 };
})(jQuery);