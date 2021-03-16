function viewChange(winCode){if(appUI){appUI.innerHTML=winCode;}}

function viewReturn(view_name){

    var view_registration_and_login = `<h1>HOLA MUNDO</h1>`;

    if(view_name == 'view_registration_and_login_1'){
        function_registration_and_login();
        return view_registration_and_login;
    }
}

module.exports = {
    viewChange,
    viewReturn,
}