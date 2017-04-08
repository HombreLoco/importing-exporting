module.exports = {
  doSomethingPublic: function() {
    console.log("Doing something public");
    doSomethingPrivate();
  }
}

function doSomethingPrivate() {
  console.log("Doing something private");
}