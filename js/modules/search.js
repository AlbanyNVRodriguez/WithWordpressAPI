import { addPosts, loadMorePostAtEndOfScroll } from "./endpoints/posts.js";
import { addCategories } from "./endpoints/categories.js";
import { addTags } from "./endpoints/tags.js";
import { getFetch, addTitleInMain, addContentInMain, addLoaderInMain } from "./utilities.js";

async function search(url){
    document.removeEventListener("scroll",loadMorePostAtEndOfScroll);

    let page = 1;
    document.querySelector(".main").innerHTML = "";

    addTitleInMain(url);
    addContentInMain("posts");
    addLoaderInMain();

    let site = await getFetch(`${url}/wp-json`);
    let posts = await getFetch(`${url}/wp-json/wp/v2/posts?_embed&${page}&per_page=8`);
    let categories = await getFetch(`${url}/wp-json/wp/v2/categories`);
    let tags = await getFetch(`${url}/wp-json/wp/v2/tags`);

    document.querySelector(".loader").style.display = "none";
    console.log(tags)
    addCategories(categories);
    addTags(tags);
    addPosts(posts);
    loadMorePostAtEndOfScroll(url, page);
}
// VALIDATE SITE
function validateURL($site){
    if($site != "" && $site.length > 10){
        return  $site.trim();
    }
    return false;
}
export {
    search,
    validateURL
}