function createUser(){
    let createUser = model.input.createUser;

    if (!createUser.username || !createUser.email || !createUser.city || !createUser.password || !createUser.repeatPw){
        alert('Husk å fylle inn alle felter');
        return;
    }

    if(createUser.password === createUser.repeatPw){
        let newUser = {
            username: createUser.username,
            userId: model.data.users.length + 1,
            email: createUser.email,
            city: createUser.city,
            password: createUser.password,
            profilePicture: null,
        }
        model.data.users.push(newUser);

        createUser.username = '';
        createUser.email = '';
        createUser.city = '';
        createUser.password = '';
        createUser.repeatPw = '';

        model.app.currentPage = 'loginPage';
        updateView();
    }else {
        alert('Passordene stemmer ikke over ens');
    }

}