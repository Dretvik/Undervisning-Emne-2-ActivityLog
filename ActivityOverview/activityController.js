function applyFilters(){
    let selectedCategories = getSelectedCategories();
    let selectedDifficulties = getSelectedDifficulties();

    model.input.filter.category = selectedCategories;
    model.input.filter.difficulty = selectedDifficulties;

    if(selectedCategories.length === 0 && selectedDifficulties.length === 0) {
        renderFilteredActivities(model.data.activities);
    } else if (selectedCategories.length > 0 && selectedDifficulties.length === 0){
        let filteredActivities = filteredActivitiesCategory(selectedCategories);
        renderFilteredActivities(filteredActivities);
    } else if  (selectedCategories.length === 0 && selectedDifficulties.length > 0){
        let filteredActivities = filteredActivitiesDifficulty(selectedDifficulties);
        renderFilteredActivities(filteredActivities);
    } else {
        let filteredActivities = filteredActivitiesCategoryAndDifficulty(selectedCategories, selectedDifficulties);
        renderFilteredActivities(filteredActivities);
    }

}

function getSelectedCategories() {
    let categories = [];
    if(document.getElementById('category21').checked) categories.push(21);
    if(document.getElementById('category19').checked) categories.push(19);
    return categories;
}

function getSelectedDifficulties(){
    let difficulties = [];
    if(document.getElementById('difficulty1-2').checked) difficulties.push({min: 1, max: 2});
    if(document.getElementById('difficulty3-4').checked) difficulties.push({min: 3, max: 4});
    if(document.getElementById('difficulty5-6').checked) difficulties.push({min: 5, max: 6});
    if(document.getElementById('difficulty7-8').checked) difficulties.push({min: 7, max: 8});
    if(document.getElementById('difficulty9-10').checked) difficulties.push({min: 9, max: 10});
    return difficulties;
}

function filteredActivitiesCategory(categoryId){
    return model.data.activities.filter(activity => categoryId.includes(activity.categoryId))
}

function filteredActivitiesDifficulty(difficulties) {
    return model.data.activities.filter(activity => 
        difficulties.some(range => activity.difficulty >= range.min && activity.difficulty <= range.max)
    );
}

function filteredActivitiesCategoryAndDifficulty(categoryId, difficulties){
    return model.data.activities.filter(activity =>{
        let categoryMatch = categoryId.includes(activity.categoryId);
        let difficultyMatch = difficulties.some(range => activity.difficulty >= range.min && activity.difficulty <= range.max);
        return categoryMatch && difficultyMatch;
    });
}