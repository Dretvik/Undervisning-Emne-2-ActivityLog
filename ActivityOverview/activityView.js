
function drawActivityPage(){
    app.innerHTML =  /*HTML*/`
    ${drawUpFilters()}
    ${renderFilteredActivities()}`
}
function drawUpFilters(){
    return /*HTML*/`
    <div>
        <h5>Kategorier</h5>
        ${drawCategoryFilters()}
        <h5>Vanskelighet</h5>
        ${drawDifficultyFilters()}
    </div>
    `;
}
function drawCategoryFilters(){
    let html = ''
    model.input.filter.category.forEach(category => {
       categoryName = getCategoryNameById(category.categoryId)
       if(category.checked == true){
        html += `
        <input type="checkbox" checked="true" onchange="toggleCategory(${category.categoryId})"><span>${categoryName}</span> `
       }else{
        html += `
        <input type="checkbox" onchange="toggleCategory(${category.categoryId})"><span>${categoryName}</span>`
       }
      
    });
    return html;
}

function drawDifficultyFilters(){
    let html = ''
    model.input.filter.difficulty.forEach(difficulty => {
        let difficultyObject = getDifficultyById(difficulty.difficultyId);
        if(difficulty.checked == true){
        html += `<input type="checkbox" checked="${difficulty.checked}" onchange="toggleDifficulty(${difficulty.difficultyId})">${difficultyObject.name}</span>`
        }else{
              html += `<input type="checkbox" onchange="toggleDifficulty(${difficulty.difficultyId})">${difficultyObject.name}</span>`
        }
    })
    return html;
}

function renderFilteredActivities() {
    initCheck();
    let activitiesHTML = model.app.filteredActivities.map(activity => /*HTML*/`
        <div>
            <img src="${activity.activityImg}">
            <h4>${activity.activityName}</h4>
            <p><span>Vanskelighet: </span>${activity.difficulty}</p>
            <p><span>Tid: </span>${activity.time} minutter</p>
            <p><span>Omtaler: </span>${getActivityReview(activity.activityId)}</p>
            
            <button onclick="selectActivity(${activity.activityId})">Se mer</button>
        </div>`
    ).join('');
    
    return activitiesHTML;
}


