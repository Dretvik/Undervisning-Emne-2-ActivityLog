function registerUser(){

    //Pause til 13.13
    if(validateInputsCorrect()){
        createAndAddUser()
        resetInputs()    
        changeToLoginPage()
    }
    else{

    }
   
    updateView();
}

function changeToLoginPage(){
    model.app.currentPage = 'loginPage';
}

function createAndAddUser(){
    let newUser = {
        username: model.input.createUser.username,
        userId: model.data.users.length + 1,
        email: model.input.createUser.email,
        city: model.input.createUser.city,
        password: model.input.createUser.password,
        profilePicture: null,
    }
   
    addUserToData(newUser)
}

function passwordMatch(){
    if(model.input.createUser.password === model.input.createUser.repeatPw){
        return true;
    }
    else{
        return false;
    }
}

function fieldsEmptyOnSignUp(){
    let createUser = model.input.createUser;
    if (!createUser.username || !createUser.email || !createUser.city || !createUser.password || !createUser.repeatPw){
        return true;
    }else{
        return false;
    }
}

function validateInputsCorrect(){
    if (fieldsEmptyOnSignUp()){
        model.app.errorMsg = 'Husk å fylle inn alle felter';
        return false;
    }
    else if(passwordMatch()){
       return true;
    }else {
        model.app.errorMsg ='Passordene stemmer ikke over ens';
        return false;
    }
}

function addUserToData(user){
    model.data.users.push(user);
}

function resetInputs(){
    model.input.createUser.username = '';
    model.input.createUser.email = '';
    model.input.createUser.city = '';
    model.input.createUser.password = '';
    model.input.createUser.repeatPw = '';
}