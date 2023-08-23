$("#kt_app_page").on('click','.menu-link',function(){
    $('#kt_app_page').find('.menu-link').removeClass('active')
    $(this).addClass('active')
})
