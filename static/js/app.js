// console.log("app.js is loading");

//Code based on instructor's code shared during office hours
function drawBarGraph(sampleID) {
    // console.log(`drawBarGraph(${sampleID})`);
    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleID);
        // console.log(resultArray);
        var result = resultArray[0];
        // console.log(result);
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        yticks = otu_ids.slice(0, 10).map(otuID => `OTU${otuID}`).reverse(); //TBD
        var barData = {
            x: sample_values.slice(0, 10).reverse(), //TBD
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0, 10).reverse(),
            orientation: "h"
        }
        var barArray = [barData];
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        }
        Plotly.newPlot("bar", barArray, barLayout)
    })
}

function drawBubbleChart(sampleID) {
    // console.log(`drawBubbleChart(${sampleID})`);
    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleID);
        // console.log(resultArray);
        var result = resultArray[0];
        // console.log(result);
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        yticks = sample_values.map(sample_values => `Sample Value ${sample_values}`);
        // console.log(yticks)
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
                color: otu_ids,
                size: sample_values
            }
        }
        // console.log(trace1);
        var bubbleData = [trace1];
        var bubbleLayout = {
            title: 'Sample Values vs OTU ID',
            showlegend: false,
            height: 600,
            width: 1200
        };
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    })
}


function showMetaData(sampleID) {
    // console.log(`showMetaData(${sampleID})`);
    d3.json("data/samples.json").then(data => {
        // console.log(data)
        var metaData = data.metadata;
        // console.log(metaData)
        var demoData = metaData[0];
        console.log(demoData)
        

        //put demoData into "sample-metadata" div in html
        var sampleMetaData = d3.select("#sample-metadata").text(Object.entries(demoData));


})
}

function optionChanged(newSampleID) {
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
    })
}
InitDashboard();