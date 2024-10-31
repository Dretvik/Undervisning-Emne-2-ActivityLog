function getUser(userId){
   return model.data.users.find(user => user.userId == userId);
}

function getUserByUserName(userName){
    return model.data.users.find(user => user.username == userName);
 }

 function getCategoryNameById(categoryId){
   return model.data.categories.find(cat => cat.categoryId == categoryId).categoryName;
 }

 function getDifficultyById(difficultyId){
   return model.data.difficulties.find(difficulty => difficulty.difficultyId == difficultyId);
 }

 function getActivityById(activityId){
  return model.data.activities.find(activity => activity.activityId == activityId)
 }

 function getActivityReview(activityId){

  let average = 0;
  let allReviewOfActivity = filterReviewOfActivityById(activityId);
  average = addRatingOfSingleActivity(allReviewOfActivity)
  return average;

}

function filterReviewOfActivityById(activityId){
  return model.data.reviews.filter(review => review.activityId == activityId)
}

function addRatingOfSingleActivity(allareviews){
  let average = 0;
  for(let i = 0; i < allareviews.length; i++){
      average += allareviews[i].rating;
  }
  return average /= allareviews.length
}