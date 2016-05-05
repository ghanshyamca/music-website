

$('#accordion-1').show();
$('.open').addClass('active');
function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300);
    }
   

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(this).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300);
        }
        e.preventDefault();
    });

