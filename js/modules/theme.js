// CHANGE THEME
export default function changeTheme(){
    let body = document.body,
    $headerTheme = document.querySelector(".header-theme");

    if(body.className.includes("light")){
        body.classList.remove("light");
        $headerTheme.classList.remove("light");
    }else{
        body.classList.add("light");
        $headerTheme.classList.add("light");
    }
}