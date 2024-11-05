
function createMenuComponents(){
    const menuItems= [
        {
            name: "Hjem",
            path: "homePage"
        },
        {
            name: "Profil",
            path: null
        },
        {
            name: "Mine aktiviteter",
            path: "activityPage"
        },
        {
            name: "Mine omtaler",
            path: null
        },
        {
            name: "Legg til aktivitet",
            path: "addActivityPage"
        },
        {
            name: "Logg ut",
            path: "loginPage"
        },
    ];

    let html = "";
    menuItems.forEach((element) => {
        if(model.app.currentPage === element.path){
            html += /*HTML*/
        `
        <li class="cursor bold color-main-blue font-size-larger" onclick="menuElementChangePage('${element.path}')">${element.name}</li>
        `
        }
        else if(element.path === null){
            html += /*HTML*/
        `
        <li class="cursor color-gray" onclick="menuElementChangePage('${element.path}')">${element.name}</li>
        `
        }
        else{
            html += /*HTML*/
            `
            <li class="cursor color-main-blue" onclick="menuElementChangePage('${element.path}')">${element.name}</li>
            `
        }
    });
    return html;
}

function menuElementChangePage(newPage){
    model.app.currentPage = newPage;
    updateView();
}

function menu() {
    return /*HTML*/`
        <menu class="remove-bullet flex-column gap-20 menuContainer">
            ${createMenuComponents()}
        </menu>
    `;
}