// https://bl.ocks.org/mbostock/7607535
var SVG_HEIGHT = svgHeight;
var SVG_WIDTH = svgWidth;
var DEPENDENCIES_BOX_HEIGHT = 50;
var DEPENDENCIES_BOX_WIDTH = 500;
var DEPENDENCIES_BOX_MARGIN_LEFT_RIGHT = 50;
var CIRCLE_COLOR = '#ccc';
var diameter = svgHeight;
var margin = 20;
var g = undefined;
var g2 = undefined;
var svg = undefined;
var circle = undefined;
var lv2_data = {};
function drawSVG(root, data) {
    lv2_data = data;
    svg = d3.select("svg");

    g = svg.append("g").attr("transform", "translate(" + svg.attr("width") / 2 + "," + svg.attr("height") / 2 + ")");
    g2 = svg.append("g");

var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);


  root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

  var focus = root,
      nodes = pack(root).descendants(),
      view;

  circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { 
          g2.attr("display", "none"); 
          zoom(d); 
          d3.event.stopPropagation(); 
        });

    var text = g.selectAll(".label")
    .data(nodes)
    .enter().append("text")
    .attr("class", "label")
    .style("fill", function(d){
        return d.data.vulnerable ? "red": "black"
    })
    .style("fill-opacity", function(d) { 
        return d.parent === root ||  (d == focus) && !d.children || (!focus.children &&focus.parent == d.parent) ? 1 : 0; 
    })
    .style("display", function(d) { 
        return d.parent === root ||  (d == focus) && !d.children || (!focus.children &&focus.parent == d.parent) ? "inline" : "none"; 
    })
    .text(function(d) { return d.data.name; });


  var node = g.selectAll("circle,text");

  svg.style("background", color(-1))
      .on("click", function() { g2.attr("display", "none"); zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin], 1);
}
  function zoom(d) {
    var focus0 = focus; focus = d;
    d_offset = (d == focus) && !d.children? 0.3:1;
    var transition = d3.transition().duration(d3.event.altKey ? 7500 : 750)
    .tween("zoom", function(d) {
      var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin])
    //   i.on("end", alert("done"));
      return function(t) { zoomTo(i(t), d_offset); };
    })

    transition.selectAll(".label")
  .filter(function(d) { return d.parent === focus||  (d == focus) && !d.children || (!focus.children &&focus.parent == d.parent) || this.style.display === "inline"; })
    .style("fill-opacity", function(d) { return isShowText(focus,d)? 1 : 0; })
    .on("start", function(d) { if (isShowText(focus,d))  this.style.display = "inline"; })
    .on("end", function(d) { if (!isShowText(focus,d)) this.style.display = "none"; });
    if ((d == focus) && !d.children) draw_dependencies(focus);
  }

  function isShowText(focus, d) {
    return d.parent === focus ||  ((d == focus) && !d.children)|| (!focus.children &&focus.parent == d.parent)
  }

//   var zoom_offset = 0
  function zoomTo(v, d_offset) {
    var k = d_offset * diameter / v[2]; view = v;
    // zoom_offset = d_offset * diameter / v[2]
    
        g.selectAll("circle").attr("transform", function(d) { 
            return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; 
        });
        g.selectAll(".label").attr("transform", function(d) { 
            return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; 
        });
        g.selectAll(".in_depedences_text").attr("transform", function(d) { 
            return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; 
        });
        g.selectAll("rect").attr("transform", function(d) { 
            return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; 
        });
        circle.attr("r", function(d) { return d.r * k; });
    }
// });
    function prepareSubLv2Data(focus) {
        var number_of_left_box = 0;
        var number_of_right_box = 0;
        var deps = []
        var inputDeps = focus.data.inputDeps;
        for (var i = 0; i < inputDeps.length ; i++) {
            inputDeps[i]['x'] = DEPENDENCIES_BOX_MARGIN_LEFT_RIGHT
            inputDeps[i]['y'] = (DEPENDENCIES_BOX_HEIGHT / 2) + i * ((SVG_HEIGHT - 2 * DEPENDENCIES_BOX_HEIGHT) /  inputDeps.length);
            inputDeps[i]['type'] = 0
            inputDeps[i]['c'] = category_to_color[inputDeps[i].category]
            deps.push(inputDeps[i])
        }
        var outputDeps = focus.data.outputDeps;
        for (var i = 0; i < outputDeps.length ; i++) {
            outputDeps[i]['x'] = SVG_WIDTH - DEPENDENCIES_BOX_MARGIN_LEFT_RIGHT - DEPENDENCIES_BOX_WIDTH;
            outputDeps[i]['y'] = (DEPENDENCIES_BOX_HEIGHT / 2) + i * ((SVG_HEIGHT - 2 * DEPENDENCIES_BOX_HEIGHT) /  outputDeps.length);
            outputDeps[i]['type'] = 1
            outputDeps[i]['c'] = category_to_color[outputDeps[i].category]
            deps.push(outputDeps[i])
        }
        return deps;
    }

    function clearSubLv2View() {
        g2.selectAll("rect").remove()
        g2.selectAll("text").remove()
        g2.selectAll("circle").remove()
        g2.selectAll("line").remove()

    }

    function drawBoxAndTextSubLv2View(dp) {
        var height = dp.length < 15 ? DEPENDENCIES_BOX_HEIGHT: DEPENDENCIES_BOX_HEIGHT/2
        var rect = g2.selectAll("rect")
        .data(dp)
        .enter().append("rect")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("width", DEPENDENCIES_BOX_WIDTH)
        .attr("height", height)
        .attr("class", "in_depedences_box")
        .style("fill", function(d) { return d.c; })
        .style("cursor", "pointer")
        .on("click", function(d) {
            var temp = d.name.split(".")
            var classname = temp[temp.length - 1]
            var category_position = lv2_data_full.map(function(x) {return x.name; }).indexOf(d.category)
            var classList = lv2_data_full[category_position].clusterNames.listOfFiles
            var elementPos = classList.map(function(x) {return x.name; }).indexOf(classname);
            overlay(classList[elementPos])
            d3.event.stopPropagation(); 
        })

        var text =  g2.selectAll("text")
        .data(dp)
        .enter().append("text")
        .attr("x", function(d) { return d.x + DEPENDENCIES_BOX_WIDTH / 2; })
        .attr("y", function(d) { return d.y + height / 2; })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .text(function(d) { return d.name; })
        .style("cursor", "pointer")
        .on("click", function(d) {
            var temp = d.name.split(".")
            var classname = temp[temp.length - 1]
            var category_position = lv2_data_full.map(function(x) {return x.name; }).indexOf(d.category)
            var classList = lv2_data_full[category_position].clusterNames.listOfFiles
            var elementPos = classList.map(function(x) {return x.name; }).indexOf(classname);
            overlay(classList[elementPos])
            d3.event.stopPropagation(); 
        })
    }

    function drawCircleAndTextSubLv2View(circleAttr) {
        var circles = g2.selectAll("circle").data([circleAttr]).enter().append("circle");

        var circleAttributes = circles
                       .attr("cx",function(d) { return d.x; })
                       .attr("cy", function(d) { return d.y; })
                       .attr("r", function(d) { return d.r; })
                       .style("fill", CIRCLE_COLOR)
                       .style("cursor", "pointer")
                        .style("z-index", "20")
                        .on("click", function(d) {
                            var elementPos = lv2_data.map(function(x) {return x.name; }).indexOf(d.name);
                            overlay(lv2_data[elementPos])
                            d3.event.stopPropagation(); 
                        })

        var text =  g2.append("text")
                       .attr("x", circleAttr.x)
                       .attr("y", circleAttr.y)
                       .attr("dy", ".35em")
                       .attr("text-anchor", "middle")
                       .attr("font-size", "15px")
                       .attr("id", "selected-circle")
                       .attr("fill", function(d) { 
                            return circleAttr.vulnerable? "red": "black"
                        })
                       .text(circleAttr.name)
                       .style("cursor", "pointer")
                       .on("click", function() {
                            var classname = d3.select("#selected-circle").text();
                            var elementPos = lv2_data.map(function(x) {return x.name; }).indexOf(classname);
                            overlay(lv2_data[elementPos])
                            d3.event.stopPropagation(); 
                        })
    }

    function findDiffBtwPosition(pos, r) {
        var length = Math.sqrt(Math.abs(Math.pow(pos.y1 -pos.y2, 2) + Math.pow(pos.x1 - pos.x2, 2)))
        var diff_x = (pos.x1 - pos.x2) * pos.r / length
        var diff_y = (pos.y1 - pos.y2) * pos.r / length
        return {
            x: diff_x,
            y: diff_y
        }
    }

    function prepareLineData(dp, circleAttr) {
        var lines = []
       
        for (var i = 0 ; i < dp.length; i++) {
           
            var box = {x: dp[i].x, y: dp[i].y + DEPENDENCIES_BOX_HEIGHT / 2, c: dp[i].c }
            if (dp[i]['type'] == 0){
                box.x += DEPENDENCIES_BOX_WIDTH
                var diff = findDiffBtwPosition({x1: box.x, y1: box.y, x2: circleAttr.x, y2: circleAttr.y, r: circleAttr.r})
                lines.push({x1: box.x, y1: box.y, x2: circleAttr.x + diff.x, y2: circleAttr.y + diff.y, c: box.c});
            } else {
                var diff = findDiffBtwPosition({x1: circleAttr.x, y1: circleAttr.y, x2: box.x, y2: box.y, r: circleAttr.r})
                lines.push({x1: circleAttr.x - diff.x, y1: circleAttr.y - diff.y, x2: box.x, y2: box.y, c: box.c});
            }
        }
        return lines;
    }

    marker = {}
    function getMarker(color) {
        if (marker[color] === undefined) {
            g2.append("svg:defs").append("svg:marker")
                .attr("id", color.replace("#", ""))
                .attr("refX", 10)
                .attr("refY", 6)
                .attr("markerWidth", 30)
                .attr("markerHeight", 30)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 0 12 6 0 12 3 6")
                .style("fill", color);
            marker[color] = "url(" + color + ")";
        }
        return marker[color];
    };
    function drawLineSubLv2View(lines) {
        for (var i = 0 ; i < lines.length; i++) {
            
            g2.append("line")
            .attr("x1", lines[i].x1)
            .attr("y1", lines[i].y1)
            .attr("x2", lines[i].x2)
            .attr("y2", lines[i].y2)          
            .attr("stroke-width", 1)
            .attr("stroke", lines[i].c)
            .attr("marker-end", getMarker(lines[i].c));
        }
    }
    
    function draw_dependencies(focus) {
        clearSubLv2View()
        var dp = prepareSubLv2Data(focus)
        drawBoxAndTextSubLv2View(dp)
        var circleAttr= {name: focus.data.name, x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2, r:100, vulnerable: focus.data.vulnerable}; 
        drawCircleAndTextSubLv2View(circleAttr)
        var lines = prepareLineData(dp, circleAttr)
        drawLineSubLv2View(lines)
        g2.attr("display", "inline");
    }


    function overlay(data) {
        if (document.getElementById("overlay")) {
          document.getElementById("overlay").remove();
        }
        try {
          var overlay = document.createElement("div");
          overlay.setAttribute("id","overlay");
          var tempDiv = document.createElement("div");
          // var buttonDiv = document.createElement("div");
          // buttonDiv.innerHTML = "<button class='closeBtn' onclick='closeOverlay()'>X</button>";
          // tempDiv.append(buttonDiv);
          var containerDiv = document.createElement("div");
          containerDiv.classList.add("containerDiv");
          var informationDiv = document.createElement("div");
          informationDiv.classList.add("informationDiv");
          
          informationDiv.innerHTML = "<div><h3 style='color:"+ category_to_color[data.category] +"'>" + data.name + "</h3><hr><div class='fileInfo'><p><b>Lines of Code</b>: " + data.linesOfCode + "</p><p><b>File Size</b>: " + data.fileSize + "Kb</p><p><b>Path to File</b>: " + data.pathToFile + "</p><p><b>Category</b>: <span style='color:"+ category_to_color[data.category] +"'>" + data.category + "</span></p>";
          informationDiv.innerHTML += "<p><b>Incoming Dependencies</b></p><ul>"
          var TEXT_LIMIT = 64
          for (x of data.inputDeps) {
              if (x.name.length > TEXT_LIMIT) {
                  informationDiv.innerHTML += "<li>" + x.name.substring(0, TEXT_LIMIT) + "</br>" + x.name.substring(TEXT_LIMIT)  +"</li>"
              } else {
                  informationDiv.innerHTML += "<li>" + x.name +"</li>"
              }
          }
          informationDiv.innerHTML += "</ul>"
          informationDiv.innerHTML += "<p><b>Outgoing Dependencies</b></p><ul>"
          for (x of data.outputDeps) {
              if (x.name.length > TEXT_LIMIT) {
                  informationDiv.innerHTML += "<li>" + x.name.substring(0, TEXT_LIMIT) + "</br>" + x.name.substring(TEXT_LIMIT)  +"</li>"
              } else {
                  informationDiv.innerHTML += "<li>" + x.name +"</li>"
              }
          }
          informationDiv.innerHTML += "</ul>"

          containerDiv.append(informationDiv);
          
          //var imageDiv = document.createElement("div");
          //imageDiv.innerHTML = "<div class='classImageDiv'><img src='http:\/\/via.placeholder.com/450x600'></div>";
          
          //containerDiv.append(imageDiv);
          tempDiv.append(containerDiv);
          overlay.append(tempDiv);

          //imageDiv.onclick = function(event) {event.stopImmediatePropagation();}
          informationDiv.onclick = function(event) {event.stopImmediatePropagation();}
          overlay.onclick =  function(event) { closeOverlay()}
          
          document.body.append(overlay);
          document.getElementById('overlay').style.display = 'block';
        } catch(err) {}
    }
    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }
