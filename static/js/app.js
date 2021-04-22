// console.log("app.js is loading");

//Code based on instructor's code shared during office hours
function InitDashboard() {
    // console.log("InitDashboard()");

    //populate dropdown
    var dropDown = d3.select("#selDataset");

    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var sampleNames = data.names;
        console.log(data.names)
        sampleNames.forEach(sampleID => {
            dropDown.append("option")
                .text(sampleID)
                .property("value", sampleID);
        });
    // });
    //create bargraph
    //create bubble chart
    //update demographic info
})}
InitDashboard();