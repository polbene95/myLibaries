//When scroll down hide, but when scroll up show
//Change parameter element for that node you want to hide and show smoothly

var lastScrollTop = 0;
$(window).scroll(function (event, element) {
    console.log($(window).scrollTop() >= $(window).height() * 0.2);
    if ($(window).scrollTop() >= $(window).height() * 0.2) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(element).slideUp();
        } else {
            $(element).slideDown();
        }
        lastScrollTop = st;
    }
});

//When reach certain position in the screen switch to position fixed
// $("#filters-div") is the one that gona switch
// $(".header").height() the one that I use as a reference, can use 0 is you want fixed at top

var resetHeight = $("#filters-div").offset().top - $(window).scrollTop();
$(window).scroll(function (event) {
    var filterPosition = $("#filters-div").offset().top - $(window).scrollTop();
    var filterHeight = $("#filters-div").height();
    var positionLessHeight = filterPosition - filterHeight;
    var headerHeight = $(".header").height();
    if (headerHeight > positionLessHeight) {
        $("#filters-div").css({
            position: "fixed",
            top: headerHeight + 10,
            background: "white",
            width: "80%"
        });
    }
    if ($(window).scrollTop() < resetHeight) {
        $("#filters-div").css({
            position: "",
            top: "",
        });
    }
});

//Inteligent Searchbar.
//BookInHTML is the HTML element we want to filter
var searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function (e) {
    var term = e.target.value.toLowerCase();
    books.forEach(function (book) {
        var bookInHTML = document.querySelector('[data-title="' + book.title + '"]');
        if (book.title.toLowerCase().indexOf(term) != -1) {
            bookInHTML.style.display = "block";
        } else {
            bookInHTML.style.display = "none";
        }
    })
})

//Automatic scroll down
function scrollDown(element) {
    var height = $(element)[0].scrollHeight;
    $(element).scrollTop(height)
}



