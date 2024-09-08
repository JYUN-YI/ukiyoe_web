// 網頁的主程式寫在這裡
$(".ad-toogle-btn").click(function () {
    // the event would valid after clicking.
    // let the class .ad-box switch to active.
    $(".ad-box").toggleClass("active");
});

$(".navbar .nav-link").click(function () {
    // get the buttom clicked
    console.log(this);
    // get the target
    // the value of the attribute href for this target
    const target = $(this).attr("href")
    console.log("the goal", target);
    // get the coordinate of the target
    const position = $(target).offset().top
    console.log("coordinate: ", position);
    // execute the animation (before stopping)
    // $("html,body").animate({element}, 1000(1sec));
    $("html,body").stop().animate({
        scrollTop: position
    }, 1000);
});


$(function () {
    // This button will increment the value
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});


window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("goBackBtn").style.display = "block";
    } else {
        document.getElementById("goBackBtn").style.display = "none";
    }
}//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}