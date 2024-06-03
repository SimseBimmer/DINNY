
function validateForm() {
    let x = document.forms["myForm"]["txtName", "txtNumber", "txtEmail", "txtAdgangskode"].value;
    //   HVIS "X" ER TOMT
    if (x == "") {
        alert("SOME INPUTS NEEDS TO BE FILLED OUT!");
        return false;
    }
    //   "ELLERS":
    else {
        alert("YEAH! ☺");
    }
}
