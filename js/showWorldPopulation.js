$(document).ready(function () {
	var data = [];
	var labels = [];
	$.ajax({
		type: "GET",
		url: "getStatistics.php",
		cache: false,
		dataType: "JSON",
		success: function (response) {
			response.forEach(i => {
				data.push(i.population);
				labels.push(i.country);
			})
			var barChart = new Chart($("#barChart"), {
				type: 'horizontalBar',
				data: {
					datasets: [{
							data: data,
							backgroundColor: "lightblue",
							label: 'Population'
						}],
					labels: labels
				},
				options: {
					responsive: true
				}
			});
		},
	});	
});
