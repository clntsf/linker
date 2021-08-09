function getRedirectLink(){
    args = window.location.search.substring(1)
    if (args != ''){
        try {
            dec = atob(args).split('%');
            document.title = dec[1]
            window.location.href = dec[0]
        }
        catch(e){}
    }
    return
}

function encodeStr(){
    link= document.getElementById("link-input").value; title = document.getElementById("title-input").value;
    document.getElementById("output").innerHTML = `ctsf1.github.io/linker/index.html?${btoa(link+'%'+title)}`;
}
