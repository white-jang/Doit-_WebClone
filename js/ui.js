$(document).ready(function(){
	$("nav li").click(function () {
        var id=$(this).attr("data-rol")
        $("nav li").removeClass("on");
        $(this).addClass("on")
    })
});

