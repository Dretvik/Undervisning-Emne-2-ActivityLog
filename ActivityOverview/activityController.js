function toggleCategory(categoryId){

    if(isCategoryFilterOn(categoryId)){
        removeCategoryFromFilter(categoryId)
    }
    else{
        addCategoryToFilter(categoryId)
    }

    updateFilteredActivities()
}
function initCheck(){
    if(model.app.init == true){
        resetFilters()
        model.app.init = false;
    }
}

function resetFilters(){
    model.app.filteredActivities = model.data.activities;
}
function isCategoryFilterOn(categoryId){
    if(model.input.filter.category.find(cat => cat.categoryId == categoryId).checked == true)
        return true;
    else 
        return false;
}

function addCategoryToFilter(categoryId){
    model.input.filter.category.find(category => category.categoryId == categoryId).checked = true;
}

function removeCategoryFromFilter(categoryId){
    model.input.filter.category.find(category => category.categoryId == categoryId).checked = false;
}

function toggleDifficulty(difficultyId){
  if(isDifficultyFilterOn(difficultyId)){
    removeDifficultyFilter(difficultyId)
  }
  else{
    addDifficultyFilter(difficultyId)
  }
  updateFilteredActivities()
}

function isDifficultyFilterOn(difficultyId){
    if(model.input.filter.difficulty.find(difficulty => difficulty.difficultyId == difficultyId).checked == true)
        return true;
    else 
        return false;
}

function addDifficultyFilter(difficultyId){
    model.input.filter.difficulty.find(difficulty => difficulty.difficultyId == difficultyId).checked = true;
}

function removeDifficultyFilter(difficultyId){
    model.input.filter.difficulty.find(difficulty => difficulty.difficultyId == difficultyId).checked = false;
}

function updateFilteredActivities(){
    resetFilters();
    applyCategoryFilters();
    applyDifficultyFilters();    
    updateView();
}


function applyCategoryFilters(){
    let filterIds = model.input.filter.category.filter(cat => cat.checked == true); 
    if(filterIds.length == 0){
        return;
    }
    let tempArray = [];

    filterIds.forEach(category => {
        let matchingActivitiesToCategory = model.app.filteredActivities.filter(activity => activity.categoryId == category.categoryId)
        tempArray = tempArray.concat(matchingActivitiesToCategory)
    })

    model.app.filteredActivities = tempArray
}

function applyDifficultyFilters(){
    let difficultyFiltered = model.input.filter.difficulty.filter(diff => diff.checked == true); 
    if(difficultyFiltered.length == 0){
        return;
    }

    let tempArray = [];
    difficultyFiltered.forEach( difficulty => {

        let difficultyObj = getDifficultyById(difficulty.difficultyId)
        let match = model.app.filteredActivities.filter(activity => activity.difficulty >= difficultyObj.value.min && activity.difficulty <= difficultyObj.value.max)
        tempArray = tempArray.concat(match)
    })
  
    model.app.filteredActivities = tempArray
}

/*
function applyFilters(){
   /* let selectedCategories = getSelectedCategories();
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
/*
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
}*/
/*
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
}*/