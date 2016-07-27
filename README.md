jQuery monthPicker - a simple but useful month/year picker.
==================================

This plugin creates two selectboxes where the user can select month and year. Afterwards an unix-timestamp is written into the original input field.



### Usage:

         $('#id-selector').monthpicker([options]);

        [options] accepts following JSON properties:
        minYear     - the minimum year the selectbox should show
        maxYear     - the maximum year the selectbox should show
        lang        - language in which all labels should be generated
        month       - a map of month labels (overrides the lang parameter if set)
        class       - a custom class of selectbox tags
        f.e. german months
        month : ['January','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
        
### How to use:
````html
<html>
<head>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="jquery.monthpicker.min.js"></script>

<script>
$(document).ready(function() {
	$('#yearpicker').monthpicker();
});
</script>
</head>
<body>
<form name="test">
<input type="text" id="yearpicker">
</form>
</body>
</html>
````

### How to use a different language:
Available languages:
- english : (default)
- german : de
- austrian : at
- spanish : es
- frensh : fr
- hungarian : hu
- italian : it
- dutch : nl
- portuguese (Brazil) : pt-BR

````html
<script>
$(document).ready(function() {
	$('#yearpicker2').monthpicker({'lang' : 'es'});
});
</script>
````

### Define your own labels:

````html
<script>
$(document).ready(function() {
	$('#yearpicker2').monthpicker({'month' : ['Jan.','Feb.','Mär.','Apr.','Mai','Jun.','Jul.','Aug.','Sep.','Ok.','Nov.','Dez.']});
});
</script>
````

### Set the minimum year:

Default : 1980

````html
<script>
$(document).ready(function() {
	$('#yearpicker2').monthpicker({'minYear' : 1980});
});
</script>
````

### Set the maximum year:

Default : 2010

````html
<script>
$(document).ready(function() {
	$('#yearpicker2').monthpicker({'maxYear' : 2010});
});
</script>
````

### Set de default value:

Default : July, 2016

````html
<input type='text' value='1467342000' id='monthPicker'>

<script>
$(document).ready(function() {
	$('#monthPicker').monthpicker();
});
</script>
````

### Licence:
Copyright (c) Dirk Diebel. Released under MIT License
