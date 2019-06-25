function changeSelect(value) {
    if (value === "assessment") {
        document.getElementById('assessment_filter').style.display = 'block';
        document.getElementById('student_filter').style.display = 'block';
        document.getElementById('course_filter').style.display = 'none';
    } else if (value === "course") {
        document.getElementById('course_filter').style.display = 'block';
        document.getElementById('student_filter').style.display = 'block';
        document.getElementById('assessment_filter').style.display = 'none';
    }

    if (value === "assessment" || value === "course") {
        document.getElementById('btn_div').style.display = 'block';
    } else if (value !== "assessment" || value !== "course") {
        document.getElementById('btn_div').style.display = 'none';
    }
}

// Control de checkbox formularios

function checkboxCheck1(element){

    if(element.checked){
        element.classList.add("marked1");
    }else{
        element.classList.remove("marked1");
    }

    if(document.getElementsByClassName("marked1").length>1){
        element.checked=false;
        element.classList.remove("marked1");
    }
}

function checkboxCheck2(element){

    if(element.checked){
        element.classList.add("marked2");
    }else{
        element.classList.remove("marked2");
    }

    if(document.getElementsByClassName("marked2").length>1){
        element.checked=false;
        element.classList.remove("marked2");
    }
}

function checkboxCheck3(element){

    if(element.checked){
        element.classList.add("marked3");
    }else{
        element.classList.remove("marked3");
    }

    if(document.getElementsByClassName("marked3").length>1){
        element.checked=false;
        element.classList.remove("marked3");
    }
}

function checkboxCheck4(element){

    if(element.checked){
        element.classList.add("marked4");
    }else{
        element.classList.remove("marked4");
    }

    if(document.getElementsByClassName("marked4").length>1){
        element.checked=false;
        element.classList.remove("marked4");
    }
}

function checkboxCheck5(element){

    if(element.checked){
        element.classList.add("marked5");
    }else{
        element.classList.remove("marked5");
    }

    if(document.getElementsByClassName("marked5").length>1){
        element.checked=false;
        element.classList.remove("marked5");
    }
}

function checkboxCheck6(element){

    if(element.checked){
        element.classList.add("marked6");
    }else{
        element.classList.remove("marked6");
    }

    if(document.getElementsByClassName("marked6").length>1){
        element.checked=false;
        element.classList.remove("marked6");
    }
}

function sendIt() {
    alert("Consulta enviada, por favor espere");
}

// Reloj de carga

window.onbeforeunload = function() {
    document.getElementById("form").style.display = 'none';
    document.getElementById("form2").style.display = 'none';
    document.getElementById("form3").style.display = 'none';
    document.getElementById("form4").style.display = 'none';
    document.getElementById("form5").style.display = 'none';
    document.getElementById("glass").style.display = 'block';
};