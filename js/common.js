$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
    $('.today_product').load('../inc/today_product.html')
    
    
    $("a[href$='#']").attr("href","#!")
    $('.crop').parent().css({position:'relative', display:'inline-block', overflow:'hidden'})
    $('.menu_d').parent().css({position:'relative'})
})