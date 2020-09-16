// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById('launchForm');
   form.addEventListener("submit", checkDefaults)

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
   e.preventDefault();
   let pilot = document.querySelector("input[name=pilotName]");
   let coPilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required.");
      return;
   } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Valid data required for number based fields.");
      return;
   };

   let faultyItems = document.getElementById("faultyItems");
   let statusCheck = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById('pilotStatus');
   let coPilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   const fuelValid = fuelLevel.value >= 10000;
   const cargoValid = cargoMass.value <= 10000;
   const readyForLaunch = fuelValid && cargoValid;

   const cargoMsg = `Cargo mass ${cargoMass.value} ${cargoValid ? "good to go!" : "is too heavy to launch."}`;
   const fuelMsg = `Fuel level ${fuelLevel.value} ${fuelValid ? "good to go!" : "is too low for launch."}`;
   const statusMsg = `Shuttle is ${readyForLaunch ? "" : "not"} ready for launch`

   pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
   coPilotStatus.innerHTML = `CoPilot ${coPilot.value} is ready`;
   cargoStatus.innerHTML = cargoMsg;
   fuelStatus.innerHTML = fuelMsg;
   statusCheck.innerHTML = statusMsg;

   statusCheck.style.color = readyForLaunch ? "green" : "red";
   faultyItems.style.visibility = "visible";
};


