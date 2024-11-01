function singleActivityView(){
    let activity = getActivityById(model.app.selectedActivityId);
    app.innerHTML = /*HTML*/`
    ${header()}
        <div>
           <div> Omtaler:${getActivityReview(model.app.selectedActivityId)} </div>   
           <button> se alle </button> 
            <div> Tid: ${activity.time}</div>  
            <div> Grad: ${activity.difficulty}</div>  
            <div> Kategori: ${getCategoryNameById(activity.categoryId)}</div> 
        <div> Fremgangsmåte: ${activity.description}</div>   
        </div>
    `;
}
