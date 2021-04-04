//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

//const true_origin = PROTOCOL+"://"+ORIGIN+":" + PORT + "/"

const true_origin = "http://localhost:500";
// Some variables setup
var ao_loader = document.getElementById("loader");
var pageScripts = document.getElementById("app_scripts_container");
var pageStyles = document.getElementById("app_styles_container");

function loadError(oError) {
  throw new URIError(
    "The script " + oError.target.src + " didn't load correctly."
  );
}

function loadScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  pageScripts.appendChild(newScript);
  newScript.src = url;
}

function loadStyle(url) {
  var newStyle = document.createElement("link");
  newStyle.setAttribute("rel", "stylesheet");
  newStyle.setAttribute("type", "text/css");
  newStyle.setAttribute("href", url);
  pageStyles.appendChild(newStyle);
}

function loadSection(fileName) {
  var request = new XMLHttpRequest();
  request.open("GET", "/sections/" + fileName + ".html", false); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    return request.responseText;
  }
}

function finishLoading() {
  document.body.classList.add("loaded");
}

function startLoading() {
  document.body.classList.remove("loaded");
}
window.onload = function () {
  if (true_origin !== window.location.origin) {
    console.log("Origin not cool. Mkey? ");
    window.location.replace(true_origin);
  }

  loadScript("/scripts/helpers/modal.js", function () {
    /* testModalFunc(); */
  });
  loadScript("/scripts/helpers/router.js", function () {
    findCurrentRoute();
  });

  loadStyle("/styles/main.css");
  loadStyle("/styles/modal.css");
};

// ORIGINALLY USED TO TEST ERROR CAPTURE AND HANDLE
// LEFT IN HERE CUZ IT WILL BE REMOVED AS A COMMENT
/*

["thisIdDoesNotExist", "apple", "orange", "cherry"].forEach(tryFakeElemIds);

function tryFakeElemIds(item) {
  try {
    document.getElementById(item).innerHTML += ":" + item + "<br>";
  } catch (err) {
    console.error(err);
  }
}

try {
  adddlert("Welcome");
} catch (err) {
  //document.body.innerHTML += err.name + "<br>" + err.message;
  console.error(err);
}

window.onload = function () {
  console.log("YEAA HAVING FUN! :D");

  var someObject = { str: "Some text", id: 5 };
  console.log(someObject);

  var car = "Dodge Charger";
  var someObject = { str: "Some text", id: 5 };
  console.info("My first car was a", car, ". The object is:", someObject);

console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");



console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");



};
*/

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
