// JavaScript Document
	$(document).one('pageshow', '#order', function(){  

		assignValues();

function assignValues(){
	$kg = $('#kg'),
	$plant = $('#plant_name'),
	$price = $('#price')
	       userobject = JSON.parse(sessionStorage.getItem("usera_data"));
			fishkg_array = JSON.parse(sessionStorage.getItem("fishkg_data"));

			user_obja = JSON.parse(sessionStorage.getItem("currentobj"));
			var pri=user_obja.price;
			//alert(user_obja.image);
			$('#emplyee_name_twofh').append('<img src="http://115.118.113.83/fish_web/images/' + user_obja.image +'">');
			$('#emplyee_id_twofu').text(user_obja.descriptiona);
			$('#emplyee_id_twofn').text(user_obja.fish_name);
			$('#emplyee_id_twofp').append(pri);
		}
			$(document).off('click', '#car').on('click','#car',function(){
				//$.mobile.changePage("cart.html", { transition: "none", changeHash: true, reverse: false });
				$.mobile.changePage($('#cart'), { transition: "cart", changeHash: true, reverse: false });
				return false;

		});

fishkg_array.forEach(function(currentResult) {
	var currkg = currentResult.kg;
	var appendFlag = false;
	$('#kg option').each(function () {
		if (this.text == currkg) appendFlag = true;
	});
	if (appendFlag == false)  $kg.append($('<option>', {
		value: currentResult.kg, text: currentResult.kg }));

});
$('#kg').val(userobject.kg).attr('selected', true);
alert(userobject.kg);
$('#kg').selectmenu("refresh", true);
var currentkg = $("#kg option:selected" ).val();
var newpriceList = fishkg_array.filter(function(currentResult) {
	return currentResult.kg === currentkg;
});
newpriceList.forEach(function(currentprice) {
	var currprice = currentprice.price;
	var appendFlag = false;
	$('#price option').each(function () {
		if (this.text == currprice) appendFlag = true;
	});
	if (appendFlag == false) $price.append($('<option>', {
		value: currentprice.price, text: currentprice.price }));
});
$('#price').val(userobject.price).attr('selected', true);
$('#price').selectmenu("refresh", true);
var currentprice = $("#price option:selected" ).val();
var newPlantList = fishkg_array.filter(function(currentResult) {
	return currentResult.price === currentprice;
});
newPlantList.forEach(function(currentPlant) {
	var currplant = currentPlant.plant_name;
	var appendFlag = false;
	$('#plant option').each(function () {
		if (this.text == currplant) appendFlag = true;
	});
	if (appendFlag == false) $plant.append($('<option>', {
		value: currentPlant.plant_id, text: currentPlant.plant_name }));
});
$('#plant_name').val(userobject.plant_line).attr('selected', true);
$('#plant_name').selectmenu("refresh", true);
$('#kg').on('change', function() {
	var currentkg = $(this).val();
	$price.empty();
	$plant.empty();
	$price.trigger("chosen:updated");
	$plant.trigger("chosen:updated");
	var newOption = $('<option>-Select price-</option>');
	$price.append(newOption);
	$('#price-button span').empty();
	$('#price-button span').append('-Select price-');
	var newPlant = $('<option>-Select Plant-</option>');
	$plant.append(newPlant);
	$('#plant_name-button span').empty();
	$('#plant_name-button span').append('-Select Plant-');
	var newpriceList = fishkg_array.filter(function(currentResult) {
		return currentResult.kg === currentkg;
	});
	newpriceList.forEach(function(currentprice) {
		var currprice = currentprice.price;
		var appendFlag = false;
		$('#price option').each(function () {
			if (this.text == currprice) appendFlag = true;
		});
		if (appendFlag == false) $price.append($('<option>', {
			value: currentprice.price, text: currentprice.price }));
	});
});
$('#price').on('change', function() {
	var currentprice = $(this).val();
	$plant.empty();
	var newOption = $('<option>-Select Plant-</option>');
	$('#plant_name-button span').empty();
	$('#plant_name-button span').append('-Select Plant-');
	$plant.append(newOption);

	var newPlantList = fishkg_array.filter(function(currentResult) {
		return currentResult.price === currentprice;
	});

	newPlantList.forEach(function(currentPlant) {
		var currplant = currentPlant.plant_name;
		var appendFlag = false;
		$('#plant option').each(function () {
			if (this.text == currplant) appendFlag = true;
		});
		if (appendFlag == false) $plant.append($('<option>', {
			value: currentPlant.plant_id, text: currentPlant.plant_name }));

	});
});
		
	});

