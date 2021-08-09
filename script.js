function getRedirectLink(){
    args = window.location.search.substring(1);
    if (args != ''){
        try {window.location.href = atob(args)}
        catch(e){}
    }
    return
}

function encodeStr(){
    str_input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = `ctsf1.github.io/linker/index.html?${btoa(str_input)}`;
}

