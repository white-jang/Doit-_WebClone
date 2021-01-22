$(document).ready(function(){
    $("#container").addClass("start");
	$("nav li").click(function () {
        // nav 링크 클릭시 이벤트
        $("#container").css("max-width", "100%"); 
        // 메뉴 클릭할 때 #contianer의 width : 100% 만들기
        var id=$(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(this).removeClass("prev this next"); 
        // this 섹션 클릭시 기존의 prev, this, next 지우기
        $("#"+id).addClass("this").prevAll().addClass("prev");
        // nav에서 클릭한 메뉴와 매칭되는 id (menu1, menu2...)에 this 클래스 지정
        // 그 앞의 모든 <section>에는 .prev 클래스 부여
        $("#"+id).nextAll().addClass("next");
        // nav에서 클릭한 메뉴와 매칭되는 id (menu1, menu2...) 뒤의
        // 모든 <section>에는 .next 클래스 부여
    });
    $(".logo_box").click(function() {
        // 로고 클릭시 이벤트, 메인 페이지로 돌아옴
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next"); 
        $("#container").css("max-width", "1200px");
    });
    $(".roll_left").click(function() {
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    });
    $(".roll_right").click(function() {
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    });
    $(".book_roll li").click(function() {
        var _this = $(this);
        var liurl = _this.data("url");
        $(".notebook").html();
        $.ajax({
            type : 'post', // HTTP 요청 방식
            url : liurl, // 해당 url
            dataType : 'html', // data 타입
            success : function(data) {
                // HTTP 요청 성공 후 데이터 전송
                $(".notebook").html(data);
            }
        });
    });
    $(".accordio_box ol li").click(function() {
        $(".accordio_box ol li").removeClass("on");
        $(this).addClass("on");
    });
});

