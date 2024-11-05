

function header(){
    return /*HTML*/`
    <header class="header-container flex-row">
        <div class="logo">
            <img src="assets/logo/activity_logg_logo.png" alt="activity_logg_logo">
        </div>
        <span class="menu">
        <input id="burgerMenu" type="checkbox" />
            <label for="burgerMenu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        ${menu()}
        </span>
        
    </header>
    `;
}

