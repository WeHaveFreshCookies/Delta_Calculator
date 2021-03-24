var json = {
    "Vehicles": [
        {
            "id": "1",
            "name":"Vehicle 1",
            "speed":"50",
            "weight":"20"
        },
        {
            "id": "2",
            "name":"Vehicle 2",
            "speed":"70",
            "weight":"10"
        },
        {
            "id": "3",
            "name":"Vehicle 3",
            "speed":"20",
            "weight":"90"
        }
    ], 
    "Destinations":[
        {
            "id": "1",
            "name": "pluto",
            "distance": "2000"
        },
        {
            "id": "2",
            "name": "venus",
            "distance": "100"
        },
        {
            "id": "3",
            "name": "mercury",
            "distance": "150"
        }
    ]
}

var state = {
    "vehicle_id": "",
    "destination_id": "",
    "weight": ""
}


var form = document.getElementById("delta_v");
var v_ele = document.getElementById("vehicle");
var d_ele = document.getElementById("destination");
var w_ele = document.getElementById("weight")
var output = document.getElementById("output")

form.addEventListener("submit", function(e) {
    getFormVals();
    e.preventDefault();
})

v_ele.addEventListener("change", function(e){
    setVehicleID(e)
})

v_ele.addEventListener("change", function(e){
    setDestinationID(e)
})

w_ele.addEventListener("change", function(e) {
    console.log(e)
    setWeightVal(e)
})

function setVehicleID(e){
    state.vehicle_id = e.target.options[e.target.options.selectedIndex].value;
}

function setDestinationID(e){
    state.destination_id = e.target.options[e.target.options.selectedIndex].value;
}

function setWeightVal(e){
    state.weight = e.target.value;
}

function getFormVals() {
    // Get the object
    let vehicle = findVehicle();
    let destination = findDestination()
    // If either is null then set output to error

    if(vehicle === null){
        Out("Not a valid vehicle")
        return;
    }
    
    if(destination === null){
        Out("Not a valid destination")
        return;
    }
    
    if(Number.isNaN(state.weight)){
        Out("Not a valid number")
        return;
    }
    //Bogus function for funsies
    Out((destination.distance*state.weight)/vehicle.speed)


}

function findVehicle(){
    for (i in json.Vehicles){
        if(json.Vehicles[i].id === state.vehicle_id){
            console.log("Got Vehicle")
            return json.Vehicles[i]
        }
    }
    return null
}

function findDestination(){
    for (i in json.Destinations){
        if(json.Destinations[i].id === state.destination_id){
            console.log("Got Destination")
            return json.Destinations[i]
        }
    }
    return null
}

function Out(message){
    output.value = message;
}
