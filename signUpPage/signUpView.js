function drawSignUpPage(){
    app.innerHTML = /*HTML*/`
    ${header()}
    <section class="full-size flex-column center align-self-center">
        <input type="text" placeholder='username' onchange="model.input.createUser.username = this.value">
        <input type="text" placeholder="epost" onchange="model.input.createUser.email = this.value">
        <input type="text" placeholder="By" onchange="model.input.createUser.city = this.value">
        <input type="password" placeholder="Passord" onchange="model.input.createUser.password = this.value">
        <input type="password" placeholder="Gjenta Passord" onchange="model.input.createUser.repeatPw = this.value">
        <button onclick="registerUser()">Registrer</button>
        <div>${model.app.errorMsg}</div>
    </section>
    `;
}