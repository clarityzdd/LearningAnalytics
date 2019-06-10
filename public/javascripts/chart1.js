$(document).ready(function () {
    $.getJSON("../exit/test.json", function (d) {

        var jsonfile = [];      // Array para JSON
        $.each(d, function (index, value) {
            jsonfile.push(value);
        });

        var labels = jsonfile.map(function(e) {
            return e.name;
        });
        var data = jsonfile.map(function(e) {
            return e.age;
        });

        var ctx = canvas.getContext('2d');
        var config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Graph Line',
                    data: data,
                    backgroundColor: 'rgba(0, 119, 204, 0.3)'
                }]
            }
        };

        var chart = new Chart(ctx, config);
    });
});