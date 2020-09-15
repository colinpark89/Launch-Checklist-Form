// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json) {
       const destination = document.getElementById("missionTarget");
       let planet = '';
         planet += `
          <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
          </ol>
         <img src="${json[3].image}">
           `;
         destination.innerHTML = planet;
     });
     });
   });


function checkDefaults(e) {
   let pilot = document.querySelector("input[name=pilotName]");
   let coPilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required.");
      e.preventDefault();
   } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Valid datae required for all fields.");
      e.preventDefault();
   };
   let faultyItems = document.getElementById("faultyItems");
   let statusCheck = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById('pilotStatus');
   let coPilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   if (fuelLevel.value < 10000) {
      statusCheck.style.color = "red"
      statusCheck.innerHTML = "Shuttle not ready to launch!";
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
      coPilotStatus.innerHTML = `CoPilot ${coPilot.value} is ready`;
      fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is too low to launch`
   } else if (cargoMass.value > 10000) {
      statusCheck.style.color = "red"
      statusCheck.innerHTML = "Shuttle not ready to launch!";
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
      coPilotStatus.innerHTML = `CoPilot ${coPilot.value} is ready`;
      cargoStatus.innerHTML = `Cargo mass ${cargoMass.value} is too heavy to launch`
   } else {
      statusCheck.style.color = "green";
      statusCheck.innerHTML = "Shuttle is ready for launch!"
   }
};


window.addEventListener("load", function() {
   let form = document.getElementById('launchForm');
   form.addEventListener("submit", checkDefaults)
 });

//  window.addEventListener("hashchange", function() {
//    let faultyItems = document.getElementById("faultyItems");
//    let statusCheck = document.getElementById("launchStatus");
//    let pilotStatus = document.getElementById('pilotStatus');
//    let coPilotStatus = document.getElementById("copilotStatus");
//    let fuelStatus = document.getElementById("fuelStatus")
//    let cargoStatus = document.getElementById("cargoStatus")
//    if (fuelLevel.value < 10000) {
//       statusCheck.style.color = "red"
//       statusCheck.innerHTML = "Shuttle not ready to launch!";
//       faultyItems.style.visibility = "visible";
//       pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
//       coPilotStatus.innerHTML = `CoPilot ${coPilot.value} is ready`;
//       fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is too low to launch`
//    } else if (cargoMass.value > 10000) {
//       statusCheck.style.color = "red"
//       statusCheck.innerHTML = "Shuttle not ready to launch!";
//       faultyItems.style.visibility = "visible";
//       pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
//       coPilotStatus.innerHTML = `CoPilot ${coPilot.value} is ready`;
//       cargoStatus.innerHTML = `Cargo mass ${cargoMass.value} is too heavy to launch`
//    } else {
//       statusCheck.style.color = "green";
//       statusCheck.innerHTML = "Shuttle is ready for launch!"
//    }
//  });

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
