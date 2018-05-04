
var square_h = Math.min(window.innerHeight, window.innerWidth) - 10
var number_of_circle = datas.length;
var radius_offset = 2.8;
var big_circle_radias = square_h / radius_offset;
var small_circle_radias = (square_h - (square_h / radius_offset) * 2) / 2; //120 * number_of_circle /  6.0;

var angles = [];
for (var i = 0 ; i < number_of_circle ; i++) {
  angles.push(i * Math.PI * 2 / number_of_circle)
}

var categoryToIndex = {};
for (var i = 0 ; i < datas.length ; i++) {
    categoryToIndex[datas[i].category] = i
}


for (var i = 0 ; i < number_of_circle ; i++) {
  var a = {}
  datas[i]['x'] = big_circle_radias + small_circle_radias + (big_circle_radias * Math.cos(angles[i]));
  datas[i]['y'] = big_circle_radias + small_circle_radias + (big_circle_radias * Math.sin(angles[i]));
}

var paths = []

for (var i = 0 ; i < number_of_circle ; i++) {
  for (var j = 0 ; j < datas[i]['dependency'].length; j++) {
    var from_pos = datas[i];
    var dep_key = (datas[i]['dependency'][j]).nameOfCategory
    if (dep_key === datas[i].category)
      continue;
    var to_pos = datas[categoryToIndex[dep_key]]

    var length = Math.sqrt(Math.abs(Math.pow(from_pos.y - to_pos.y, 2) + Math.pow(from_pos.x - to_pos.x, 2)))
    var diff_x = (from_pos.x - to_pos.x) * small_circle_radias / length
    var diff_y = (from_pos.y - to_pos.y) * small_circle_radias / length

    var start_position = {'x': from_pos.x - diff_x, 'y': from_pos.y - diff_y}
    var end_position = {'x': to_pos.x + diff_x, 'y': to_pos.y + diff_y}
    
    paths.push({'s': start_position, 'e': end_position})
  }
}

var svgContainer = d3.select("body").append("svg")
                                     .attr("width", square_h)
                                     .attr("height", square_h)
                                     .attr("transform", "translate(" + window.innerWidth / 4 + "," + 0 + ")");
 
var circles = svgContainer.selectAll("circle")
                           .data(datas)
                           .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d['x']; })
                       .attr("cy", function (d) { return d['y']; })
                       .attr("r", small_circle_radias )
                       .style("fill", function(d) { return color[d['category']];})
                       .style("cursor", "pointer")
                       .on("click", function(d) { window.location.href = "/lv2/index.html?cluster_name="+d.category });

svgContainer.append("svg:defs").append("svg:marker")
      .attr("id", "triangle")
      .attr("refX", 6)
      .attr("refY", 6)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 12 6 0 12 3 6")
      .style("fill", "black");

for (var i = 0 ; i < paths.length ; i++) {
  var start_pos = paths[i].s
  var end_pos = paths[i].e
  svgContainer.append("line")
                       .attr("x1", start_pos.x)
                       .attr("y1", start_pos.y)
                       .attr("x2", end_pos.x)
                       .attr("y2", end_pos.y)          
                       .attr("stroke-width", 1)
                       .attr("stroke", "black")
                       .attr("marker-end", "url(#triangle)");
}
 
var text = svgContainer.selectAll("text")
                        .data(datas)
                        .enter()
                        .append("text");
var textLabels = text
                 .attr("x", function(d) { return d.x; })
                 .attr("y", function(d) { return d.y; })
                 .text( function (d) { return d.category })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .style("text-anchor", "middle")
                 .attr("fill", "black");
                 