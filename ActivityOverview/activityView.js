
function drawActivityPage(){
    app.innerHTML =  /*HTML*/`
    ${header()}
    ${drawUpFilters()}
    ${renderFilteredActivities()}
    ${footer()}`
}
function drawUpFilters(){
    return /*HTML*/`
    <div>
        <fieldset>
            <legend>Kategorier</legend>
            <div class="grid-2-fr">
            ${drawCategoryFilters()}
            </div>
        </fieldset>
        <fieldset>
            <legend>Vanskelighet</legend>
            <div class="grid-2-fr">
            ${drawDifficultyFilters()}
            </div>
        </fieldset>
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
        <div class="activity-showcase-horizontal grid-col-gap align-items-center margin-20-desktop">
            <img src="${activity.activityImg}">
                <div>
                    <h2>${activity.activityName}</h2>
                    <ul class="remove-bullet">
                        <li class="grid-2-fr">
                            <i>Grad:</i>
                            <b>${activity.difficulty}</b>
                        </li>
                        <li class="grid-2-fr">
                            <i>Tid:</i>
                            <b>${activity.time} min.</b>
                        </li>
                        <li class="grid-2-fr">
                            <i>Omtaler:</i>
                            <b>${getActivityReview(activity.activityId)}</b>
                        </li>
                    </ul>
                </div>
            
            <button onclick="selectActivity(${activity.activityId})">Se mer</button>
        </div>`
    ).join('');
    
    return activitiesHTML;
}


