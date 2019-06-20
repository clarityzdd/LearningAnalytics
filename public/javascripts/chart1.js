$(document).ready(function () {
    $.getJSON("../exit/data.json", function (d) {

        var jsonfile = [];      // Array para JSON
        $.each(d, function (index, value) {
            jsonfile.push(value);
        });

        var count1 = jsonfile.reduce((acc, cur) => cur.final_result === "Pass" ? ++acc : acc, 0);
        var count2 = jsonfile.reduce((acc, cur) => cur.final_result === "Fail" ? ++acc : acc, 0);
        var count3 = jsonfile.reduce((acc, cur) => cur.final_result === "Withdrawn" ? ++acc : acc, 0);
        var data1 = [count1, count2, count3];

        var count4 = jsonfile.reduce((acc, cur) => cur.assessment_type === "TMA" ? ++acc : acc, 0);
        var count5 = jsonfile.reduce((acc, cur) => cur.assessment_type === "CMA" ? ++acc : acc, 0);
        var count6 = jsonfile.reduce((acc, cur) => cur.assessment_type === "Exam" ? ++acc : acc, 0);
        var data2 = [count4, count5, count6];

        var count7 = jsonfile.reduce((acc, cur) => cur.highest_education === "HE Qualification" ? ++acc : acc, 0);
        var count8 = jsonfile.reduce((acc, cur) => cur.highest_education === "A Level or Equivalent" ? ++acc : acc, 0);
        var count9 = jsonfile.reduce((acc, cur) => cur.highest_education === "Lower Than A Level" ? ++acc : acc, 0);
        var count10 = jsonfile.reduce((acc, cur) => cur.highest_education === "Post Graduate Qualification" ? ++acc : acc, 0);
        var data3 = [count7, count8, count9, count10];

        // CHART 1 - NOTAS

        var ctx = document.getElementById("canvas1").getContext('2d');
        var config = {
            type: 'doughnut',
            data: {
                labels: ["Aprobados", "Suspensos", "Abandono/NP"],
                datasets: [{
                    label: 'Graph Line',
                    data: data1,
                    backgroundColor: ["#3cba9f", "#f45555","#706f6f"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Resultados en exámenes'
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    animateScale: true,
                }
            }
        };
        var chart1 = new Chart(ctx, config);

        //CHART 2 - TIPOS DE CALIFICACIONES

        var ctx = document.getElementById("canvas1_part2").getContext('2d');
        var config = {
            type: 'doughnut',
            data: {
                labels: ["Tutor Marked Assessment (TMA)", "Computer Marked Assessment (CMA)", "Exam"],
                datasets: [{
                    label: 'Graph Line',
                    data: data2,
                    backgroundColor: ["#3cba9f", "#f45555","#706f6f"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Tipos de calificaciones'
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    animateScale: true,
                }
            }
        };
        var chart2 = new Chart(ctx, config);

        //CHART 3 - NIVEL DE ESTUDIOS

        Chart.defaults.global.legend.display = false;

        var ctx = document.getElementById("canvas1_part3").getContext('2d');
        var config = {
            type: 'horizontalBar',
            data: {
                labels: ["HE Qualification", "A Level or Equivalent", "Lower Than A Level", "Post Graduate Qualification"],
                datasets: [{
                    data: data3,
                    backgroundColor: ["#3cba9f", "#f45555","#706f6f","#8e5ea2"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: '                                     Nivel de estudios del alumnado',
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    animateScale: true,
                }
            }
        };
        var chart3 = new Chart(ctx, config);

    });
});
