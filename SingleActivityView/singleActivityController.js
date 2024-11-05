function selectActivity(activityId){
    model.app.selectedActivityId = activityId;
    model.app.currentPage = 'singleActivityView';
    updateView();
}

function showAllReviewsOFActivity(){
    model.app.currentPage = 'reviewPage';
    updateView();
}