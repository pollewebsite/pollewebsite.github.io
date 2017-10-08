d3.xml("svg/logo_final.svg").mimeType("image/svg+xml").get(function (error, xml) {
   if (error) {  throw error;  }
    $('#logo').append(xml.documentElement);

<<<<<<< HEAD
    var apostrophe = d3.select('#logo g#apostrope path');
    var animate_colors = ['#8EFF40', '#E8B13C', '#FF524E', '#683CE8', '#42FFF8'];
    var coloring_iteration = 0;
=======
   var logo_svg = d3.select("#logo")
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');
>>>>>>> 1922b5c38230d1cac5c6b7482160adef3d7bd26e

    //color animation
    d3.interval(function() {
       apostrophe.transition()
           .duration(9000)
           .style('fill', animate_colors[coloring_iteration % animate_colors.length]);
       coloring_iteration += 1;
    }, 10000);

});
