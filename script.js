function getRedirectLink(){
    args = window.location.search.substring(1)
    if (args != ''){
        try {window.location.href = atob(args)}
        catch(e){}
    }
    return
}

function encodeStr(){
    alert(1)
    link= document.getElementById("link-input").value;
    alert(2)
    document.getElementById("output").innerHTML = `ctsf1.github.io/linker/index.html?${btoa(link)}`;
    alert(3)
}
