import { getFetch } from "../utilities.js";

// ----------------------------------------------
// ADD POSTS
function addPosts(res){
    let $main = document.querySelector(".main-content-posts");
    $main.appendChild(posts(res));
}
// POSTS 
function posts(posts){
    let fragment = document.createDocumentFragment();
    posts.forEach(post => {
        let $post = createPost(post);
        fragment.appendChild($post);
    });
    return fragment;
}
// CREATE POST
function createPost(post){
    let template = document.querySelector("#post-template").content,
    { title, img, author, date, excerpt, categories, tags, link, content } = infoPost(post);

    template.querySelector(".post-title").textContent = title;
    template.querySelector(".post-img").src = img;
    template.querySelector(".post-img").alt = title;

    template.querySelector(".post-author .author-img").src = author.img;
    template.querySelector(".post-author .author-name").textContent = author.name;
    template.querySelector(".post-author .author-name").href = author.link;
    template.querySelector(".post-author .author-date").textContent = date;

    template.querySelector(".post-excerpt").innerHTML = excerpt();

    template.querySelector(".post-categories").innerHTML = categories();
    template.querySelector(".post-tags").innerHTML = tags();

    template.querySelector(".post-link").href = link;
    template.querySelector(".post-details article").innerHTML = content;

    return document.importNode(template, true);
}
// INFO POST
function infoPost(post){
    return {
        title: post.title.rendered,
        img: post._embedded["wp:featuredmedia"][0].source_url,
        author: {
            name: post._embedded.author[0].name,
            img: post._embedded.author[0].avatar_urls["48"],
            link: post._embedded.author[0].link
        },
        date: new Date(post.date).toLocaleDateString(),
        excerpt: function(){
            let text = post.excerpt.rendered;
            text = text.replace("[&hellip;]", "...");
            return text;
        },
        categories : function(){
            let categories = post._embedded["wp:term"][0],
            text = `<p class="color-primary">Categories: </p>`;
            categories.forEach(category => {
                if(categories.indexOf(category) < categories.length-1){
                    text += `<a href="${category.link}" target="_blank" class="color-opacity">${category.name}, </a>`;
                }else{
                    text += `<a href="${category.link}" target="_blank" class="color-opacity">${category.name}.</a>`;
                }
            });
            return text;
        }, 
        tags: function(){
            let tags = post._embedded["wp:term"][1],
            text = `<p class="color-primary">Tags: </p>`;
            tags.forEach(tag => {
                if(tags.indexOf(tag) < tags.length-1){
                    text += `<a href="${tag.link}" target="_blank" class="color-opacity">${tag.name}, </a>`;
                }else{
                    text += `<a href="${tag.link}" target="_blank" class="color-opacity">${tag.name}.</a>`;
                }
            });
            return text;
        }, 
        link: post.link, 
        content: post.content.rendered
    }
}
// ----------------------------------------------
// LOAD MORE POST IN CONTENT AT END OF SCROLL
async function loadMorePostAtEndOfScroll(url, page){
    document.addEventListener("scroll", async function(){
        let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if(scrollTop+clientHeight >= scrollHeight){
            document.querySelector(".loader").style.display = "block";
            page++;
            let res = await getFetch(`${url}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=8`);
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".main-content-posts").appendChild(posts(res));
        }
    });
}

export {
    addPosts,
    loadMorePostAtEndOfScroll
}