function drawLoginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <section class="full-size flex-column center align-self-center">
        <h1>Logg inn</h1>
        <input type="text" placeholder='username' onchange="model.input.login.username = this.value">
        <input type='password' onchange="model.input.login.password = this.value" placeholder='password'>
        <button onclick="logIn()">Log in</button>
            <div class="full-width flex-row center">
                <p>Har ikke en bruker?</p>
                <p class="link" onclick="registerUserClicked()">Registrer deg her!</p>
            </div>
    </section>
    `;
}