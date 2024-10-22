function drawLoginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <input placeholder='username' onchange="model.input.login.username = this.value">
    <input type='password' onchange="model.input.login.password = this.value" placeholder='password'>
    <button onclick="logIn()">Log on</button>
    <button onclick="registerUserClicked()">Registrer deg her</button>
    `;
}