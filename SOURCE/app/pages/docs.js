(function () {
  loadStyle("/styles/docs_page.css");
  document.getElementById("app").innerHTML = loadSection("docs_full");
  finishLoading();
})();
