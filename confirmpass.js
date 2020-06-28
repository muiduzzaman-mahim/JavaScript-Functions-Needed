function passcheck() {
    if (document.signup.EmpPswd.value != document.signup.EmpPswdCon.value) {
        alert("Confirm Password does not matched");
        document.signup.EmpPswdCon.focus();
        return false;
    }
}