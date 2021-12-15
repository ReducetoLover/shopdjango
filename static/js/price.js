$(document).ready(function() {
    var fil=0;
    for (i=0;i<$('.total').length;i++) {
        var name =+$('.total').eq(i).html();
        var fil =fil+name;
    }
var cart_bag=$('#total').text("$"+fil);
});
$(this).click(function(){


});