function changeSelect(value) {
    if (value == "assessment") {
        document.getElementById('assessment_type_div').style.display = 'block';
    } else if (value != "assessment") {
        document.getElementById('assessment_type_div').style.display = 'none';
    }

    if (value == "assessment") {
        document.getElementById('weight_div').style.display = 'block';
    } else if (value != "assessment") {
        document.getElementById('weight_div').style.display = 'none';
    }

    if (value == "assessment" || value == "student" || value == "course") {
        document.getElementById('btn_div').style.display = 'block';
    } else if (value != "assessment" || value != "student" || value != "course") {
        document.getElementById('btn_div').style.display = 'none';
    }
}