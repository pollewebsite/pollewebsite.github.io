d3.xml("svg/logo_Poll'e_new.svg").mimeType("image/svg+xml").get(function (error, xml) {
   if (error) {  throw error;  }

   var logo_svg = d3.select("#logo")
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

   logo_svg.node()
        .appendChild($(xml.documentElement).find('#layer1').get(0));

    logo_svg.attr('viewBox', function () {
       var box = this.getBBox();
       return [box.x, box.y, box.width, box.height].join(', ');
    });

   var apostrophe = logo_svg.select('g#apostrope path');
   var animate_colors = ['#8EFF40', '#E8B13C', '#FF524E', '#683CE8', '#42FFF8'];
   var coloring_iteration = 0;

   //color animation
   d3.interval(function() {
      apostrophe.transition()
          .duration(9000)
          .style('fill', animate_colors[coloring_iteration % animate_colors.length]);
      coloring_iteration += 1;
   }, 10000);

});
