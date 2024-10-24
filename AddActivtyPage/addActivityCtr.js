function AddActivity(){

    let activityInput = model.input.uploadActivity

    let newActivity = {
        
            activityName: activityInput.activityName,
            activityId: model.data.activities.length,
            activityImg: null,
            difficulty: 4,
            time: 60,
            equipment: activityInput.equipment,
            description: activityInput.description,
            categoryId: 21,
        
    }

    model.data.activities.push(newActivity);
}

function AddEquipment(equipmentId){
    model.input.uploadActivity.equipment.push(equipmentId);
}

function AddCategory(){

}