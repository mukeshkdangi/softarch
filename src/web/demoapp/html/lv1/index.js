
function drawSVG(lv1_data) {
  var square_h = Math.min(window.innerHeight - 40, window.innerWidth) - 10
var number_of_circle = lv1_data.length;
var radius_offset = 2.8;
var big_circle_radias = square_h / radius_offset;
var small_circle_radias = (square_h - (square_h / radius_offset) * 2) / 2; //120 * number_of_circle /  6.0;

var angles = [];
  for (var i = 0 ; i < number_of_circle ; i++) {
    angles.push(i * Math.PI * 2 / number_of_circle)
  }

  var categoryToIndex = {};
  for (var i = 0 ; i < lv1_data.length ; i++) {
      categoryToIndex[lv1_data[i].category] = i
  }


  for (var i = 0 ; i < number_of_circle ; i++) {
    var a = {}
    lv1_data[i]['x'] = big_circle_radias + small_circle_radias + (big_circle_radias * Math.cos(angles[i]));
    lv1_data[i]['y'] = big_circle_radias + small_circle_radias + (big_circle_radias * Math.sin(angles[i]));
  }

  var paths = []

  // find max dependency
  var max_deps = 0
  for (var i = 0 ; i < number_of_circle ; i++) {
    for (var j = 0 ; j < lv1_data[i]['dependency'].length; j++) {
      max_deps = Math.max(max_deps, lv1_data[i]['dependency'][j].count);
    }
  }

  for (var i = 0 ; i < number_of_circle ; i++) {
    for (var j = 0 ; j < lv1_data[i]['dependency'].length; j++) {
      var from_pos = lv1_data[i];
      var dep_key = (lv1_data[i]['dependency'][j]).nameOfCategory
      if (dep_key === lv1_data[i].category)
        continue;
      var to_pos = lv1_data[categoryToIndex[dep_key]]

      var length = Math.sqrt(Math.abs(Math.pow(from_pos.y - to_pos.y, 2) + Math.pow(from_pos.x - to_pos.x, 2)))
      var diff_x = (from_pos.x - to_pos.x) * small_circle_radias / length
      var diff_y = (from_pos.y - to_pos.y) * small_circle_radias / length

      var start_position = {'x': from_pos.x - diff_x, 'y': from_pos.y - diff_y}
      var end_position = {'x': to_pos.x + diff_x, 'y': to_pos.y + diff_y}
      var num_deps = lv1_data[i]['dependency'][j].count
      paths.push({'s': start_position, 'e': end_position, 'thickness': 0.5 + 5 * num_deps/max_deps})
    }
  }

  var svgContainer = d3.select("body").append("svg")
                                      .attr("width", square_h)
                                      .attr("height", square_h)
                                      .attr("transform", "translate(" + window.innerWidth / 4 + "," + 0 + ")");
  
  var circles = svgContainer.selectAll("circle")
                            .data(lv1_data)
                            .enter()
                            .append("circle");

  var circleAttributes = circles
                        .attr("cx", function (d) { return d['x']; })
                        .attr("cy", function (d) { return d['y']; })
                        .attr("r", small_circle_radias )
                        .style("fill", function(d) { return category_to_color[d['category']];})
                        .style("cursor", "pointer")
                        .on("click", function(d) { window.location.href = "/lv2/index.html?cluster_name="+d.category })
                        .on("mouseover", function(d) { 
                          var deps = d.dependency
                          var text = ""
                          for (var i = 0 ; i < deps.length ; i++) {
                            var dep = deps[i]
                            text += ("<span style='color:" + category_to_color[dep.nameOfCategory] + "'>" + dep.nameOfCategory + "</span> : " + dep.count + "</br>")
                          }
                          document.getElementById("deps-detail").innerHTML = text;
                          document.getElementById("deps-detail").style.display = "block";
                        })
                        .on("mouseout", function(d) { 
                          document.getElementById("deps-detail").style.display = "none";
                        })

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
                        .attr("stroke-width", paths[i].thickness)
                        .attr("stroke", "black")
                        .attr("marker-end", "url(#triangle)");
  }

  var text_label = []
  for (var i = 0 ; i < lv1_data.length ; i++) {
    var d = lv1_data[i]
    text_label.push({x: d.x, y: d.y - 10, text: d.category, category: d.category, deps: d.dependency})
    text_label.push({x: d.x, y: d.y + 30, text: d.numberOfFiles, category: d.category, deps: d.dependency})
  }
  
  var text = svgContainer.selectAll("text")
                          .data(text_label)
                          .enter()
                          .append("text");
  var textLabels = text
                  .attr("x", function(d) { return d.x; })
                  .attr("y", function(d) { return d.y; })
                  .text( function (d) { return d.text})
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "20px")
                  .style("text-anchor", "middle")
                  .attr("fill", "black")
                  .style("cursor", "pointer")
                  .on("click", function(d) { window.location.href = "/lv2/index.html?cluster_name="+d.category })
                  .on("mouseover", function(d) { 
                    var deps = d.deps
                    var text = ""
                    for (var i = 0 ; i < deps.length ; i++) {
                      var dep = deps[i]
                      text += ("<span style='color:" + category_to_color[dep.nameOfCategory] + "'>" + dep.nameOfCategory + "</span> : " + dep.count + "</br>")
                    }
                    document.getElementById("deps-detail").innerHTML = text;
                    document.getElementById("deps-detail").style.display = "block";
                  })
                  .on("mouseout", function(d) { 
                    document.getElementById("deps-detail").style.display = "none";

                  })
}
                 