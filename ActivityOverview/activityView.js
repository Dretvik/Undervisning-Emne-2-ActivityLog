function drawActivityPage(){
    app.innerHTML = drawUpFilters() + /*HTML*/`<div id="filteredActivities"></div>`;
    applyFilters();
}
function drawUpFilters(){
    return /*HTML*/`
    <div>
        <h5>Kategorier</h5>
        <input type="checkbox" onchange="applyFilters()" id="category21"><span>Friluftsliv</span>
        <input type="checkbox" onchange="applyFilters()" id="category19"><span>Dans</span>
        <h5>Vanskelighet</h5>
        <input type="checkbox" onchange="applyFilters()" id="difficulty1-2"><span>1-2</span>
        <input type="checkbox" onchange="applyFilters()" id="difficulty3-4"><span>3-4</span>
        <input type="checkbox" onchange="applyFilters()" id="difficulty5-6"><span>5-6</span>
        <input type="checkbox" onchange="applyFilters()" id="difficulty7-8"><span>7-8</span>
        <input type="checkbox" onchange="applyFilters()" id="difficulty9-10"><span>9-10</span>
    </div>
    `;
}

function renderFilteredActivities(activities) {
    let activitiesHTML = activities.map(activity => /*HTML*/`
        <div>
        <img src="${activity.activityImg}">
        <h4>${activity.activityName}</h4>
        <p><span>Vanskelighet: </span>${activity.difficulty}</p>
        <p><span>Tid: </span>${activity.time} minutter</p>
        <p><span>Omtaler: </span>Ikke på plass enda..</p>
        
        <button onclick="#">Se mer</button>
        </div>`
    ).join('');
    
    document.getElementById('filteredActivities').innerHTML = activitiesHTML;
}
