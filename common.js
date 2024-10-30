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