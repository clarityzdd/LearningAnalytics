$(document).ready(function () {
    $.getJSON("../exit/data.json", function (d) {

        var jsonfile = [];      // Array para JSON
        $.each(d, function (index, value) {
            jsonfile.push(value);
        });

        var d1 = [], d2 = [], d3 = [], d4 = [], d5 = [], d6 = [], d7 = [];

        var d8 = [], d9 = [], d10 = [], d11 = [], d12 = [], d13 = [], d14 = [];

        jsonfile.forEach(function(json) {
            if (json.code_module === "AAA" && json.gender ==="M") {
                d1.push(json.score);
            } else if (json.code_module === "BBB" && json.disability ==="N"){
                d2.push(json.score);
            } else if (json.code_module === "CCC" && json.disability ==="N"){
                d3.push(json.score);
            } else if (json.code_module === "DDD" && json.disability ==="N"){
                d4.push(json.score);
            } else if (json.code_module === "EEE" && json.disability ==="N"){
                d5.push(json.score);
            } else if (json.code_module === "FFF" && json.disability ==="N"){
                d6.push(json.score);
            } else if (json.code_module === "GGG" && json.disability ==="N"){
                d7.push(json.score);
            }
        });

        jsonfile.forEach(function(json) {
            if (json.code_module === "AAA" && json.gender ==="F") {
                d8.push(json.score);
            } else if (json.code_module === "BBB" && json.disability ==="Y"){
                d9.push(json.score);
            } else if (json.code_module === "CCC" && json.disability ==="Y"){
                d10.push(json.score);
            } else if (json.code_module === "DDD" && json.disability ==="Y"){
                d11.push(json.score);
            } else if (json.code_module === "EEE" && json.disability ==="Y"){
                d12.push(json.score);
            } else if (json.code_module === "FFF" && json.disability ==="Y"){
                d13.push(json.score);
            } else if (json.code_module === "GGG" && json.disability ==="Y"){
                d14.push(json.score);
            }
        });

        // String to Number

        var data1 = d1.map(Number);
        var data2 = d2.map(Number);
        var data3 = d3.map(Number);
        var data4 = d4.map(Number);
        var data5 = d5.map(Number);
        var data6 = d6.map(Number);
        var data7 = d7.map(Number);
        var data8 = d8.map(Number);
        var data9 = d9.map(Number);
        var data10 = d10.map(Number);
        var data11 = d11.map(Number);
        var data12 = d12.map(Number);
        var data13 = d13.map(Number);
        var data14 = d14.map(Number);

        const boxplotData = {
            labels: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
            datasets: [{
                label: 'Sin discapacidad',
                backgroundColor: 'rgba(51,102,255,0.6)',
                borderColor: 'blue',
                borderWidth: 2,
                outlierColor: '#000000',
                outlierRadius: 0,
                padding: 10,
                data: [data1, data2, data3, data4, data5, data6, data7]
            }, {
                label: 'Con discapacidad',
                backgroundColor: 'rgba(250,102,102,0.6)',
                borderColor: 'red',
                borderWidth: 2,
                outlierColor: '#000000',
                outlierRadius: 0,
                padding: 10,
                data: [data8, data9, data10, data11, data12, data13, data14]
            }


            ]
        };

        const ctx = document.getElementById("canvas4").getContext("2d");
        var config = {
            type: 'violin',
            data: boxplotData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Comparativa calificaciones entre alumnos con y sin discapacidad'
                }
            }};
        var chart = new Chart(ctx, config)
    });
});