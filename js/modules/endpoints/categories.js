import { getFetch, addTitleInMain, addContentInMain, addLoaderInMain } from "../utilities.js";

// ALL CATEGORIES
async function allCategories(url){
    document.querySelector(".main").innerHTML = "";
    addTitleInMain("All Categories");
    addContentInMain("categories");
    addLoaderInMain();
    let categories = await getFetch(`${url}/wp-json/wp/v2/categories`);
    document.querySelector(".loader").style.display = "none";
    renderCategoriesInContent(categories);
}
// RENDER CATEGORIES IN CONTENT
function renderCategoriesInContent(categories){
    let fragment = document.createDocumentFragment();
    categories.forEach(category => {
        let $category = createCategory(category);
        fragment.appendChild($category);
    });
    document.querySelector(".main-content").appendChild(fragment);
}
// CREATE CATEGORY
function createCategory(category){
    let $a = document.createElement("a");
    $a.setAttribute("class", "link-category");
    $a.setAttribute("target", "_blank");
    $a.textContent = category.name;
    $a.href = document.getElementById("search-site").value;
    return $a;
}
export{
    allCategories
}
