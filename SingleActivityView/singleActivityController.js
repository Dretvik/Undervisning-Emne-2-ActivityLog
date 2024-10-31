function selectActivity(activityId){
    model.app.selectedActivityId = activityId;
    model.app.currentPage = 'singleActivityView';
    updateView();
}