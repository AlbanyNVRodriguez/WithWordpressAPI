// GET FETCH
function getFetch(url){
    return fetch(url)
    .then(res => res.ok? res.json() : Promise.reject(res))
    .catch(error => {
        let message = error.statusText || "Ocurrion un Error";
        console.log(`Error: ${error.status} - ${message}`);
    })
}
// ADD TITLE IN MAIN
function addTitleInMain(text){
    let $title = document.createElement("p");
    $title.textContent = text;
    $title.setAttribute("class", "main-title color-opacity");
    document.querySelector(".main").appendChild($title);
}
// ADD LOADER IN MAIN
function addLoaderInMain(){
    let $loader = document.createElement("img");
    $loader.src = "./img/loader.svg";
    $loader.alt = "loading...";
    $loader.setAttribute("class", "loader");
    document.querySelector(".main").appendChild($loader);
}
// ADD CONTENT IN MAIN
function addContentInMain(ContentFrom){
    let $content = document.createElement("section");
    $content.setAttribute("class", `main-content main-content-${ContentFrom}`);
    document.querySelector(".main").appendChild($content);
}

export {
    getFetch,
    addTitleInMain,
    addLoaderInMain,
    addContentInMain
}