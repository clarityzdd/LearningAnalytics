$(document).ready(function () {
    $.getJSON("../exit/data.json", function (d) {

        var jsonfile = [];      // Array para JSON
        $.each(d, function (index, value) {
            jsonfile.push(value);
        });

        var d1 = [], d2 = [], d3 = [], d4 = [], d5 = [], d6 = [], d7 = [];

         jsonfile.forEach(function(json) {
            if (json.code_module === "AAA") {
                d1.push(json.score);
            } else if (json.code_module === "BBB"){
                d2.push(json.score);
            } else if (json.code_module === "CCC"){
                d3.push(json.score);
            } else if (json.code_module === "DDD"){
                d4.push(json.score);
            } else if (json.code_module === "EEE"){
                d5.push(json.score);
            } else if (json.code_module === "FFF"){
                d6.push(json.score);
            } else if (json.code_module === "GGG"){
                d7.push(json.score);
            }
        });

        var data1 = d1.map(Number);
        var data2 = d2.map(Number);
        var data3 = d3.map(Number);
        var data4 = d4.map(Number);
        var data5 = d5.map(Number);
        var data6 = d6.map(Number);
        var data7 = d7.map(Number);

        const boxplotData = {
            labels: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
            datasets: [{
                label: 'Calificaciones (MIN-MAX-MEDIAN-QUARTILES)',
                backgroundColor: 'rgba(66,244,113,0.6)',
                borderColor: 'green',
                borderWidth: 2,
                outlierColor: '#000000',
                outlierRadius: 0,
                padding: 10,
                itemRadius: 0,
                data: [data1, data2, data3, data4, data5, data6, data7]
            }]
        };

        const ctx = document.getElementById("canvas2").getContext("2d");
        var config = {
            type: 'boxplot',
            data: boxplotData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Histórico calificaciones en los diferentes módulos'
                }
            }};
        var chart = new Chart(ctx, config)
    });
});
