$(document).ready(function () {
	$('#idCountry').change(function () {
		var id = $(this).val();
		$.ajax({
			type: "GET",
			url: "getCountryDetails.php",
			data: "id=" + id,
			cache: false,
			dataType: "JSON",
			success: function (response) {
				var message = '<tbody><tr><td>'+response.population+'</td><td>'+response.obese+'</td></tr></tbody>';
				$("#obeseTable").html($("#obeseTable").html() + message);
			},
		});	
	});
});
