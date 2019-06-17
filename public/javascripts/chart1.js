$(document).ready(function () {
    $.getJSON("../exit/data.json", function (d) {

        var jsonfile = [];      // Array para JSON
        $.each(d, function (index, value) {
            jsonfile.push(value);
        });

        var count1 = jsonfile.reduce((acc, cur) => cur.final_result === "Pass" ? ++acc : acc, 0);
        var count2 = jsonfile.reduce((acc, cur) => cur.final_result === "Fail" ? ++acc : acc, 0);
        var count3 = jsonfile.reduce((acc, cur) => cur.final_result === "Withdrawn" ? ++acc : acc, 0);
        var data = [count1, count2, count3];

        // CHART 1 - NOTAS

        var ctx = document.getElementById("canvas1").getContext('2d');
        var config = {
            type: 'doughnut',
            data: {
                labels: ["Pass", "Fail", "Withdrawn"],
                datasets: [{
                    label: 'Graph Line',
                    data: data,
                    backgroundColor: ["#3cba9f", "#f45555","#706f6f"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Calificaciones de exámenes en alumnos entre 35-55 años sin discapacidad y con estudios posgrado '
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    animateScale: true,
                }
            }
        };
        var chart = new Chart(ctx, config);

    });
});