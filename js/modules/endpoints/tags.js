// ADD TAGS IN CONTENT
function addTags(res){
    let $main = document.querySelector(".main-content-posts");
    let $divTags = document.createElement("DIV");
    $divTags.setAttribute("class", "content-tags");
    $divTags.appendChild(tags(res));
    $main.appendChild($divTags);
}
//  TAGS
function tags(tags){
    let fragment = document.createDocumentFragment();
    tags.forEach(tag => {
        let $tag = createTag(tag);
        fragment.appendChild($tag);
    });
    return fragment;
}
// CREATE TAG
function createTag(tag){
    let $a = document.createElement("a");
    $a.setAttribute("class", "link-tag");
    $a.setAttribute("target", "_blank");
    $a.textContent = tag.name;
    $a.href = tag.link;
    return $a;
}
export{
    addTags
}
