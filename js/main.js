// CHANGE THEME OF THE PAGE
import changeTheme from "./modules/theme.js";
// HOME 
import home from "./modules/home.js";
// SEARCH
import { search, validateURL, validateEndpoint } from "./modules/search.js";
// ------------------------------------

// DOMCONTENT
document.addEventListener("DOMContentLoaded", async function(){
    home();
    // CLICKS
    document.addEventListener("click", e=>{
        // logo
        if(e.target.matches(".header .header-logo") || e.target.matches(".header .header-logo>*")) home();
        // CHANGE THEME
        if(e.target.matches(".header-theme")) changeTheme();
        // SEARCH ENDPOINT SITE
        if(e.target.matches(".aside-search-btn")){
            let url = document.getElementById("search-site").value,
            endpoint = document.getElementById("search-endpoint").value;
            url = validateURL(url);
            endpoint = validateEndpoint(endpoint);
            if(url && endpoint){
                search(url, endpoint);
            }
        }
        // DATA PETITION AUTOMATIC
        if(e.target.matches("a[data-petition]")){
            e.preventDefault();
            let url = e.target.href,
            endpoint = "posts";
            url = validateURL(url);
            endpoint = validateEndpoint(endpoint);
            if(url && endpoint){
                search(url, endpoint);
                document.getElementById("search-site").value = url;
                document.getElementById("search-endpoint").value = endpoint;
            }
        } 
    });
});