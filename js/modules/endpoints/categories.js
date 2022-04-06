// ADD CATEGORIES IN CONTENT
function addCategories(res){
    let $main = document.querySelector(".main-content-posts");
    let $divCategories = document.createElement("DIV");
    $divCategories.setAttribute("class", "content-categories");
    $divCategories.appendChild(categories(res));
    $main.appendChild($divCategories);
}
// CATEGORIES 
function categories(categories){
    let fragment = document.createDocumentFragment();
    categories.forEach(category => {
        let $category = createCategory(category);
        fragment.appendChild($category);
    });
    return fragment;
}
// CREATE CATEGORY
function createCategory(category){
    let $a = document.createElement("a");
    $a.setAttribute("class", "link-category");
    $a.setAttribute("target", "_blank");
    $a.textContent = category.name;
    $a.href = category.link;
    return $a;
}
export{
    addCategories
}
