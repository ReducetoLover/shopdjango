$(document).ready(function() {
$('._1').each(function(){
    var m=$(this).html();
    if (m==0) {
        var table = document.querySelector(".rattings");
        table.innerHTML = ` <span><i class=" _1 ion-android-star"></i></span>
                                            <span><i class=" _2 ion-android-star-outline"></i></span>
                                            <span><i class=" _3 ion-android-star-outline"></i></span>
                                            <span><i class=" _4 ion-android-star-outline"></i></span>
                                            <span><i class=" _5 ion-android-star-outline"></i></span>`;
    }
    if (m==0) {
        var table = document.querySelector(".rattings");
        table.innerHTML = ` <span><i class=" _1 ion-android-star"></i></span>
                                            <span><i class=" _2 ion-android-star-outline"></i></span>
                                            <span><i class=" _3 ion-android-star-outline"></i></span>
                                            <span><i class=" _4 ion-android-star-outline"></i></span>
                                            <span><i class=" _5 ion-android-star-outline"></i></span>`;
    }
});
});