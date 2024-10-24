function drawActivityAddingTrash(){

    app.innerHTML = /*HTML*/`
    <div>
    <input placeholder="add activity name" onchange="model.input.uploadActivity.activityName = this.value">
    <input placeholder="add activity description" onchange="model.input.uploadActivity.description = this.value">
    <button onclick="showEquipment()">Legg til utstyr</button>
    <button onclick="AddActivity()">Add Activity</button> 
    </div>    
    `

}

function showEquipment(){
    let html = '';

    model.data.equipment.forEach(equipment => {
        html += `
         <div onclick="AddEquipment(${equipment.equipmentId})">${equipment.equipmentName}</div>
        `
    })

    app.innerHTML += html;
}