function drawSignUpPage(){
    app.innerHTML = /*HTML*/`
    <input placeholder='username' onchange="model.input.createUser.username = this.value">
    <input placeholder="epost" onchange="model.input.createUser.email = this.value">
    <input placeholder="By" onchange="model.input.createUser.city = this.value">
    <input placeholder="Passord" onchange="model.input.createUser.password = this.value">
    <input placeholder="Gjenta Passord" onchange="model.input.createUser.repeatPw = this.value">
    <button onclick="registerUser()">Registrer</button>
    <div>${model.app.errorMsg}</div>
    `;
}