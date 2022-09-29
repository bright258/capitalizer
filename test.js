function capitalizeArray() {
  var myArray = document
    .getElementById("userInput")
    .value.replace("[", "")
    .replace("]", "")
    .split(", ");

  let final = [];

  for (let i = 0; i < myArray.length; i++) {
    let innerWard = myArray[i];

    let d = String(innerWard).replace(
      innerWard.at(1),
      innerWard.at(1).toUpperCase()
    );
    d && final.push(d);
  }
  document.getElementById("result").innerHTML = "[" + final.join(", ") + "]";
}
