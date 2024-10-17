updateView()
function updateView(){
    let page = model.app.currentPage;

    if( page == 'loginPage'){
        drawLoginView()
    }
    else if(page == 'homePage'){
        drawHomePageView()
    }
    else if(page == 'signUpPage'){
        drawSignUpPage()
    }
}