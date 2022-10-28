// Setting the cookie
function setCookie (cname,cvalue,exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Getting the cookie
function getCookie (cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Getting the parameter from the URL and adding it to the cookie
function addCookie() {

    let affid = getCookie("amzpecty-affiliate");
    if (affid != "") {
        alert("The amzpecty-affiliate is " + affid);
    }  else {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const affid = urlParams.get('affid');
        setCookie("amzpecty-affiliate", affid, 365);
        alert("The amzpecty-affiliate is " + affid);
    }
     
}