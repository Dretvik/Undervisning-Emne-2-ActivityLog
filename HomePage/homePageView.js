function drawHomePageView(){
    app.innerHTML = /*HTML*/`
    <h1>Velkommen</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare venenatis gravida. Nunc non feugiat dui. Quisque et mauris vitae tellus mollis gravida vel nec nunc. Fusce vitae dolor eu nibh luctus consectetur. Etiam ornare ultrices est, ut placerat augue ultrices eget. Nam tempus sem ligula, in lacinia metus ultricies lobortis.</p>
    <div>${drawTopActivities()}</div>
    <button onclick="#">Se alle aktiviteter</button>
    `;
}

function drawTopActivities() {
    let html = '';
    for (let activity of model.data.activities){
        html += /*HTML*/`
            <div onclick="#">
                <img src="${activity.activityImg}">
                <h3>${activity.activityName}</h3>
            </div>
        `;
    }
    return html;

}