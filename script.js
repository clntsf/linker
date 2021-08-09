function getRedirectLink(){
    args = atob(window.location.search.substring(1)).split('%')
    $('head').append(`<title>${args[1]}</title>`)
    if (args != ''){
        try {window.location.href = args[0]}
        catch(e){}
    }
    return
}

function encodeStr(){
    link= document.getElementById("link-input").value;
    document.getElementById("output").innerHTML = `ctsf1.github.io/linker?${btoa(link)}`;
}
