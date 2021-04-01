var json = {
    "Vehicles": [
        // Mass is in kg. Velocities are in kms^-1
        {
            "id": "1",
            "name": "Saturn V",
            "stage 1 wet mass": 2290000,
            "stage 1 dry mass": 130000,
            "stage 1 exhaust velocity": 2.58,
            "stage 2 wet mass": 496200,
            "stage 2 dry mass": 40100,
            "stage 2 exhaust velocity": 4.13,
            "stage 3 wet mass": 123000,
            "stage 3 dry mass": 13500,
            "stage 3 exhaust velocity": 4.13
        },
        {
            "id": "2",
            "name": "Falcon Heavy",
            "speed": "70",
            "weight": "10"
        },
        {
            "id": "3",
            "name": "Falcon 9",
            "speed": "20",
            "weight": "90"
        }
    ],
    "Destinations": [
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

form.addEventListener("submit", function (e) {
    getFormVals();
    e.preventDefault();
})

v_ele.addEventListener("change", function (e) {
    setVehicleID(e)
})

v_ele.addEventListener("change", function (e) {
    setDestinationID(e)
})

w_ele.addEventListener("change", function (e) {
    console.log(e)
    setWeightVal(e)
})

function setVehicleID(e) {
    state.vehicle_id = e.target.options[e.target.options.selectedIndex].value;
}

function setDestinationID(e) {
    state.destination_id = e.target.options[e.target.options.selectedIndex].value;
}

function setWeightVal(e) {
    state.weight = e.target.value;
}

function getFormVals() {
    // Get the object
    let vehicle = findVehicle();
    let destination = findDestination()
    // If either is null then set output to error

    if (vehicle === null) {
        Out("Not a valid vehicle")
        return;
    }
    if (destination === null) {
        Out("Not a valid destination")
        return;
    }
    if (Number.isNaN(state.weight)) {
        Out("Not a valid number")
        return;
    }
    //Delta V = Vehicle Exaust Velocity * Log(wet mass/dry mass)
    Out((vehicle["stage 1 exhaust velocity"] * math.log(vehicle["stage 1 wet mass"] / vehicle["stage 1 dry mass"]) + (vehicle["stage 2 exhaust velocity"] * math.log(vehicle["stage 2 wet mass"] / vehicle["stage 2 dry mass"]) + (vehicle["stage 3 exhaust velocity"] * math.log(vehicle["stage 3 wet mass"] / vehicle["stage 3 dry mass"]))
    // Above formula SHOULD be printing out exactly 12.97 at the moment if you select "Saturn V". This script will be working when I see that number. 
    
    }

function findVehicle() {
    for (i in json.Vehicles) {
        if (json.Vehicles[i].id === state.vehicle_id) {
            console.log("Got Vehicle")
            return json.Vehicles[i]
        }
    }
    return null
}

function findDestination() {
    for (i in json.Destinations) {
        if (json.Destinations[i].id === state.destination_id) {
            console.log("Got Destination")
            return json.Destinations[i]
        }
    }
    return null
}

function Out(message) {
    output.value = message;
}