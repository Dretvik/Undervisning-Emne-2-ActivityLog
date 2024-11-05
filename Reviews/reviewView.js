function drawAllReviews(){
    let html = '';
    let allReviewsOfActivty = filterReviewOfActivityById(model.app.selectedActivityId)
    // console.log(allReviewsOfActivty, 'Hva er dette ?')
    for(let i = 0; i < allReviewsOfActivty.length; i++){
        let user = getUser(allReviewsOfActivty[i].userId)
        console.log(user, ' hva er user ? ')
        html += `
        <div>
        <img>
            <h3>${user.username}  &#9733; ${allReviewsOfActivty[i].rating} </h3>
            <p> ${allReviewsOfActivty[i].review} </p>
            <button onclick="setUser(${user.userId})"> Se Profil</button>
        </div>
        `
    }
    app.innerHTML = html;
}






