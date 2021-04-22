// console.log("app.js is loading");

//Code based on instructor's code shared during office hours
function drawBarGraph(sampleID){
    console.log(`drawBarGraph(${sampleID})`);
}

function drawBubbleChart(sampleID){
    console.log(`drawBubbleChart(${sampleID})`);
}

function showMetaData(sampleID){
    console.log(`showMetaData(${sampleID})`);
}

function optionChanged(newSampleID){
    console.log(`user selected ${newSampleID}`);
    drawBarGraph(newSampleID);
    drawBubbleChart(newSampleID);
    showMetaData(newSampleID);
}

function InitDashboard() {
    // console.log("InitDashboard()");

    //populate dropdown
    var dropDown = d3.select("#selDataset");

    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var sampleNames = data.names;
        // console.log(data.names)
        sampleNames.forEach(sampleID => {
            dropDown.append("option")
                .text(sampleID)
                .property("value", sampleID);
        });
    //create bargraph
        var id = sampleNames[0];
        drawBarGraph(id);
        drawBubbleChart(id);
        showMetaData(id);
    //create bubble chart
    //update demographic info
})}
InitDashboard();