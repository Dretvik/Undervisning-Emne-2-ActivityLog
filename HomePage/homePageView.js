function drawHomePageView(){
    app.innerHTML = /*HTML*/`
    ${header()}
    <section class="full-size flex-column center align-self-center">
        <div class="grid-2-fr margin-20-desktop">
            <h1 class="freehand-font title">Velkommen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare venenatis gravida. Nunc non feugiat dui. Quisque et mauris vitae tellus mollis gravida vel nec nunc. Fusce vitae dolor eu nibh luctus consectetur. Etiam ornare ultrices est, ut placerat augue ultrices eget. Nam tempus sem ligula, in lacinia metus ultricies lobortis.</p>
        </div>
        <div class="activity-showcase-horizontal">${drawTopActivities()}</div>
        <button onclick="showAllActivities()">Se alle aktiviteter</button>
    </section>
    `;
}

function drawTopActivities() {
    let html = '';
    for (let activity of model.data.activities){
        html += /*HTML*/`
            <div onclick="#">
                <img src="${activity.activityImg}">
                <h2>${activity.activityName}</h2>
            </div>
        `;
    }
    return html;

}