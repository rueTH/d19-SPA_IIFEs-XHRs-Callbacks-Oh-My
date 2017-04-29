
var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText);
        callbackToInvoke(carnivores);

      });
      loader.open("GET", "carnivores.JSON");
      loader.send();
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function() {
        herbivores = JSON.parse(this.responseText);
        callbackToInvoke(herbivores);

      });
      loader.open("GET", "herbivores.JSON");
      loader.send();
    }
  }
})();