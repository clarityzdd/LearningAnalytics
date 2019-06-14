$(document).ready(function () {
    $.getJSON("../exit/data.json", function (data) {

        var jsonItems = [];      // Array para JSON
        $.each(data, function (index, value) {
            jsonItems.push(value);
            return index<499;
        });

        // Extrae header de la tabla
        var col = [];
        for (var i = 0; i < jsonItems.length; i++) {
            for (var j in jsonItems[i]) {
                if (col.indexOf(j) === -1) {
                    col.push(j);
                }
            }
        }

        var table = document.createElement("table");

        // Crea el header de la tabla con los datos extraidos anteriormente.

        var tr = table.insertRow(-1);

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // Rellena la tabla por filas
        for (var i = 0; i < jsonItems.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = jsonItems[i][col[j]];
            }
        }

        var divContainer = document.getElementById("jsonTable");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    });
});