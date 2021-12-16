$(document).ready(function() {
    var fil=0;
    for (i=0;i<$('.price').length;i++) {
        console.log($('.price').length);
        var name =+$('.price').eq(i).html();
        var fil =fil+name;
        console.log(fil);
    }
var cart_bag=$('#total').text("$"+fil);
});
$(this).click(function(){


});
console.log(1);