function logIn(){
   
    let user = getUserByUserName(model.input.login.username);
    if(user.password == model.input.login.password){
        model.app.currentPage = 'homePage';
        model.input.login.username = '';
        model.input.login.password = '';

        updateView();
    }
    else{
        alert('INNCORRECT PASSWORD')
    }
    
}

function registerUserClicked(){
    model.app.currentPage= 'signUpPage';
    updateView();
}
