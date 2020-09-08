// Write your JavaScript code here!

function checkDefaults(e) {
   let pilot = document.getElementById("pilotName")
   let coPilot = document.getElementById("copilotName")
   let fuelLevel = document.getElementById("fuelLevel")
   let cargoMass = document.getElementById("cargoMass")
   if (pilot.innerHTML === '') {
      let pilotResult = window.confirm("Please enter a pilot name");
      // e.preventDefault()
   }  if (coPilot.innerHTML === '') {
      let coPilotResult = window.confirm("Please enter a co-pilot name");
      // e.preventDefault()
   }  if (fuelLevel.innerHTML !== Number) {
      let fuelLevelResult = window.confirm("Please enter a fuel level");
      // e.preventDefault()
   }  if (cargoMass.innerHTML !== Number) {
      let cargoMassRresult = window.confirm("Please enter a cargo mass");
      // e.preventDefault()
   }
}
window.addEventListener("load", function(){
   let form = document.getElementById('formSubmit');
   form.addEventListener("click", checkDefaults);
 });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
