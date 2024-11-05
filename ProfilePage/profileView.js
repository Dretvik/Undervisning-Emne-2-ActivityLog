function drawUserProfile(){
    let user = getUser(model.app.selectedProfileId);
    // console.log(user, 'Hva er user')
    let html = '';
        html += `
        ${header()}
        <main>
            <div> Brukernavn: ${user.username}</div>
            <div> By: ${user.city}</div>
            <div> Omtaler: ${findTotalReviewsForUser(user.userId).length}</div>

            <div>
            alle Omtaler: 
            ${viewAllReviewsOfUser(user.userId)}
            </div>
        </main>
         ${footer()}
        `

    app.innerHTML = html;
}

function viewAllReviewsOfUser(userId){
   let html = '';
    let reviews = findTotalReviewsForUser(userId);
    reviews.forEach( r =>{
        html += `
        <div><h3>${getActivityById(r.activityId).activityName}</h3>
        &#9733; ${r.rating}
        <p>${r.review}</p>
        
        </div>
        `
    })
    return html;
}


