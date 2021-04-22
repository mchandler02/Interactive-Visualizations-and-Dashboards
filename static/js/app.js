// console.log("app.js is loading");

//Code based on instructor's code shared during office hours
function drawBarGraph(sampleID){
    // console.log(`drawBarGraph(${sampleID})`);
    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id ==sampleID);
        // console.log(resultArray);
        var result = resultArray[0];
        // console.log(result);
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        yticks = otu_ids.slice(0,10).map(otuID => `OTU${otuID}`).reverse(); //TBD
        var barData = {
            x: sample_values.slice(0, 10).reverse(), //TBD
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"
        }
        var barArray = [barData];
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin:{t:30, l: 150}
        }
        Plotly.newPlot("bar", barArray, barLayout)
    })
}

function drawBubbleChart(sampleID){
    // console.log(`drawBubbleChart(${sampleID})`);
}

function showMetaData(sampleID){
    // console.log(`showMetaData(${sampleID})`);
}

function optionChanged(newSampleID){
    // console.log(`user selected ${newSampleID}`);
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