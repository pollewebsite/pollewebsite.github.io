// ---------- Mobile menu functionality ----------
$(document).ready(function () {
    $('div.dropdown-menu.mobile a.nav-link').click(function (e) {

        $('section.tab-pane' + $(this).attr('href'))
            .toggleClass('active');

        $('section.tab-pane' + $(this).attr('href'))
            .siblings()
            .removeClass('active')

    });
});

// ---------- Add featured products ----------
var items_link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYh2U6qycLhXVCj9pQwaLRVJaU_Yeqh_DAVivQmRVok7IuQyBrZ6eZB7wpGrDJMlfIHgBvI4zrBJvD/pub?gid=0&single=true&output=csv';

d3.csv(items_link, function (error, products) {
    if (error) {throw error}

    // parse data
    products.forEach(function (d) {
        d.is_awailable = d.is_awailable === '1';
        d.is_featured = d.is_featured === "1";
        d.price = +d.price;
    });

    var productGalleryItems = d3.select('div#featured-items-gallery')
        .selectAll('div.featured-product')
        .data(products)
        .enter()
        .append('div')
        .attr('id', function (d) {  return d.p_id;  })
        .attr('class', 'featured-product row align-items-center justify-content-center');

    productGalleryItems.append('figure')
        .attr('class', 'col-12')
        // modal functionality to this img
        .append('img')
        .attr('src', function (d) {  return d.picture_url;  })
        .attr('class', 'my-img rounded mx-auto d-block')
        .attr('alt', function (d) {  return "Poll'e - уютная домашняя одежда, текстиль. " + d.name;  });

    var buyFromGallery = productGalleryItems.append('div')
        .attr('class', 'col-auto align-self-end text-center')
        .append('button')
        .attr('class', 'buy buy-from-gallery')
        .html('<i class="fa fa-shopping-cart"></i> Купить');

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            lazyLoad: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                576:{
                    items:2,
                    nav:false
                },
                768:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });
    });

});
