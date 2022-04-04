import { getFetch, addTitleInMain, addContentInMain, addLoaderInMain } from "../utilities.js";

// ALL TAGS
async function allTags(url){
    document.querySelector(".main").innerHTML = "";
    addTitleInMain("All Tags");
    addContentInMain("categories");
    addLoaderInMain();
    let tags = await getFetch(`${url}/wp-json/wp/v2/tags`);
    console.log(tags)
    document.querySelector(".loader").style.display = "none";
    renderTagsInContent(tags);
}
// RENDER TAGS IN CONTENT
function renderTagsInContent(tags){
    let fragment = document.createDocumentFragment();
    tags.forEach(tag => {
        let $tag = createTag(tag);
        fragment.appendChild($tag);
    });
    document.querySelector(".main-content").appendChild(fragment);
}
// CREATE TAG
function createTag(tag){
    let $a = document.createElement("a");
    $a.setAttribute("class", "link-tag");
    $a.setAttribute("target", "_blank");
    $a.textContent = tag.name;
    $a.href = document.getElementById("search-site").value;
    return $a;
}
export{
    allTags
}
