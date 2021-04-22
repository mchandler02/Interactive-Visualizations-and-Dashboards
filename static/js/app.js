console.log("app.js is loading");

function InitDashboard() {
    console.log("InitDashboard()");

    //populate dropdown
    var dropdown = d3.select("#selDataset");
    d3.json("samples.json").then(function(data) {
        console.log(data)
    })
    //create bargraph
    //create bubble chart
    //update demographic info
}
InitDashboard();