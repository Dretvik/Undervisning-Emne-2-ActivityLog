function setUser(userId){
    model.app.selectedProfileId = userId;
    model.app.currentPage = 'userPage';
    updateView();
}