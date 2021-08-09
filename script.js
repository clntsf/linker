function getRedirectLink(){
    args = atob(window.location.search.substring(1))
    if (args != ''){
        try {window.location.href = args}
        catch(e){}
    }
    return
}

function encodeStr(){
    link= document.getElementById("link-input").value;
    document.getElementById("output").innerHTML = `ctsf1.github.io/linker?${btoa(link)}`;
}
