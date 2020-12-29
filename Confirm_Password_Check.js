//confirm password checker.connect with your html form to check password values are same or not. 
//change form_name, input_name, confirm_input_name following your form name. 
// made by muiduzzaman mahim

function password_check() {
    if (document.form_name.input_name.value != document.form_name.confirm_input_name.value) {
        alert("Confirm Password does not matched");
        document.form_name.confirm_input_name.focus();
        return false;
    }
}
