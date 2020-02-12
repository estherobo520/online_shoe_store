    //widget one - Carousel with link to product in page
    $(document).ready(function() {
        $('img.thumbnail').click(function() {
            window.location.href = this.id + '.html'
        });
    });
    
    //widget two - choose color of product
    $(document).ready(function() {
 
        $('.color-choose input').on('click', function() {
            var shoeColor = $(this).attr('data-image');
       
            $('.active').removeClass('active');
            $('.left-column img[data-image = ' + shoeColor + ']').addClass('active');
            $(this).addClass('active');
        });
       
      });