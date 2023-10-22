window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Revenue"
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 1200 ,label: "Monday" },
                { y: 940 ,label: "Tuesday"},
                { y: 1340 ,label: "Wednesday"},
                { y: 1440 ,label: "Thursday", indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { y: 400 ,label: "Friday", indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 1100 ,label: "Saturday"},
                { y: 670 ,label: "Sunday"}
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chart2Container", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Users"
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 1252 ,label: "Monday" },
                { y: 872 ,label: "Tuesday"},
                { y: 543 ,label: "Wednesday", indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 1902 ,label: "Thursday", indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { y: 1334 ,label: "Friday"},
                { y: 998 ,label: "Saturday"},
                { y: 1640 ,label: "Sunday"}
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chart3Container", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "CTR"
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 0.18 ,label: "Monday" },
                { y: 0.24 ,label: "Tuesday"},
                { y: 0.33 ,label: "Wednesday", indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
                { y: 0.12 ,label: "Thursday", indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
                { y: 0.23 ,label: "Friday"},
                { y: 0.2 ,label: "Saturday"},
                { y: 0.23 ,label: "Sunday"}
            ]
        }]
    });
    chart.render();



}




