function singleActivityView(){
    let activity = getActivityById(model.app.selectedActivityId);
    app.innerHTML = /*HTML*/`
    ${header()}
        <main>
           <div> Omtaler:${getActivityReview(model.app.selectedActivityId)} </div>   
           <button onclick="showAllReviewsOFActivity()"> se alle </button> 
            <div> Tid: ${activity.time}</div>  
            <div> Grad: ${activity.difficulty}</div>  
            <div> Kategori: ${getCategoryNameById(activity.categoryId)}</div> 
        <div> Fremgangsmåte: ${activity.description}</div>   
        </main>
        ${footer()}
    `;
}


