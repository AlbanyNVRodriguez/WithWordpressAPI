import { allPosts } from "./endpoints/posts.js";
import { allCategories } from "./endpoints/categories.js";
import { allTags } from "./endpoints/tags.js";

function search(url, endpoint){
    switch(endpoint){
        case "posts":
            allPosts(url);
            break;
        case "categories":
            allCategories(url);
            break;
        case "tags":
            allTags(url);
            break;
    }
}
// VALIDATE SITE
function validateURL($site){
    if($site != "" && $site.length > 10){
        return  $site.trim();
    }
    return false;
}
// VALIDATE ENDPOINT
function validateEndpoint($endpoint){
    let endpoints = ["posts", "categories", "tags"];
    return endpoints.includes($endpoint)? $endpoint : false;
}
export {
    search,
    validateURL,
    validateEndpoint
}