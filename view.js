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
    else if(page == 'addActivityPage'){
        drawActivityAddingTrash();
    }
    else if(page == 'activityPage'){
        drawActivityPage();
    }
    else if(page == 'singleActivityView'){
        singleActivityView();
    }
    else if(page == 'reviewPage'){
        drawAllReviews();
    }
    else if(page == 'userPage'){
        drawUserProfile();
    }
}