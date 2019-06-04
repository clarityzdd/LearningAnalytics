function changeSelect(value) {
    if (value === "assessment") {
        document.getElementById('assessment_filter').style.display = 'block';
    } else if (value !== "assessment") {
        document.getElementById('assessment_filter').style.display = 'none';
    }

    if (value === "assessment" || value === "student" || value === "course") {
        document.getElementById('btn_div').style.display = 'block';
    } else if (value !== "assessment" || value !== "student" || value !== "course") {
        document.getElementById('btn_div').style.display = 'none';
    }
}

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
        element.classList.add("marked");
    }else{
        element.classList.remove("marked");
    }

    if(document.getElementsByClassName("marked").length>1){
        element.checked=false;
        element.classList.remove("marked");
    }
}

function checkboxCheck3(element){

    if(element.checked){
        element.classList.add("marked");
    }else{
        element.classList.remove("marked");
    }

    if(document.getElementsByClassName("marked").length>1){
        element.checked=false;
        element.classList.remove("marked");
    }
}

function sendIt() {
    alert("Consulta enviada");
}
