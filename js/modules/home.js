// HOME
export default function home(){
    let $main = document.querySelector(".main");
    document.getElementById("search-site").value = "",
    document.getElementById("search-endpoint").value = "";
    let section_1 = sectionExamplesPages(),
    section_2 = sectionEndponits(),
    fragment = document.createDocumentFragment();
    
    fragment.appendChild(section_1);
    fragment.appendChild(section_2);
    $main.innerHTML = "";
    $main.appendChild(fragment);
}
// SECTION EXAMPLES PAGES
function sectionExamplesPages(){
    let $section = document.createElement("section");
    $section.setAttribute("class", "main-section");
    let $h2 = `<h2 class="section-title">Examples of some <span class="color-primary">pages</span> made in <span class="color-primary">wordpress</span></h2>`;
    let $text = `
    <div class="section-text">
        <a class="color-opacity" href="https://malvestida.com" data-petition >https://malvestida.com</a>
        <a class="color-opacity" href="https://blog.ted.com" data-petition >https://blog.ted.com</a>
        <a class="color-opacity" href="https://variety.com" data-petition >https://variety.com</a>
        <a class="color-opacity" href="https://blog.mozilla.org" data-petition >https://blog.mozilla.org</a>
        <a class="color-opacity" href="https://techcrunch.com" data-petition >https://techcrunch.com</a>
    </div>
    `;
    $section.innerHTML = $h2 + $text;
    return $section;
}
// SECTION ENDPOINTS
function sectionEndponits(){
    let $section = document.createElement("section");
    $section.setAttribute("class", "main-section");
    let $h2 = `<h2 class="section-title"><span class="color-primary">EndPoints</span></h2>`;
    let $text = `
    <div class="section-text">
        <p class="color-opacity">Post</p>
        <p class="color-opacity">Categories</p>
        <p class="color-opacity">Tags</p>
    </div>
    `;
    $section.innerHTML = $h2 + $text;
    return $section;
}