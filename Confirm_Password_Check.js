function password_check() {
    if (document.form_name.input_name.value != document.form_name.confirm_input_name.value) {
        alert("Confirm Password does not matched");
        document.form_name.confirm_input_name.focus();
        return false;
    }
}
