/**
 * Created by Administrator on 2017-05-26.
 */
$(function() {
    /*indexpage选择ajax提交js*/
    $(".cities ul li a").click(function(){
        if($(this).hasClass("active")){
            $(this).closest("ul").find("li a").removeClass("active");
        }else{
            $(this).closest("ul").find("li a").removeClass("active");
            $(this).addClass("active");
            var data_id = $(this).attr("data-id");
        }
    })
    /*indexpage分页js*/
    $(".lit-nav li a").click(function(){
        if (!$(this).hasClass("active")) {
            $(".lit-nav li a").removeClass("active");
            $(this).addClass("active");
        }
        $(".detail").addClass("disPlay" );
        var id = $(this).attr("data-id");
        $(".detail[data-id='" + id + "']").removeClass("disPlay" );
    })
    $(".pages ul li a").click(function(){
        $(".pages ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $('.awesome li').mouseenter(function(){
        $(this).find('.code').removeClass("disPlay");
    });
    $('.awesome li').mouseleave(function(){
        $(this).find('.code').addClass("disPlay");
    });
    $('.bac-img').mouseenter(function(){
        $('.rock').addClass("disPlay");
        $('.rock-l').removeClass("disPlay");
    });
    $('.bac-img').mouseleave(function(){
        $('.rock').removeClass("disPlay");
        $('.rock-l').addClass("disPlay");
    });
    $('.bac-img2').mouseenter(function(){
        $('.rock3').addClass("disPlay");
        $('.rock-3').removeClass("disPlay");
    });
    $('.bac-img2').mouseleave(function(){
        $('.rock3').removeClass("disPlay");
        $('.rock-3').addClass("disPlay");
    });
    $('.bac-img3').mouseenter(function(){
        $('.rock2').addClass("disPlay");
        $('.rock-2').removeClass("disPlay");
    });
    $('.bac-img3').mouseleave(function(){
        $('.rock2').removeClass("disPlay");
        $('.rock-2').addClass("disPlay");
    });
	$('.nav .nav-list > li').hover(function(){
		$(this).find('.child-nav').animate({ opacity:'show', height:'show' },400);
		//$(this).find('.xialaguang').addClass('navhover');
	}, function() {
		$('.child-nav').stop(true,true).hide();
		//$('.xialaguang').removeClass('navhover');
	});
	$('.nav .nav-list > li').hover(function(){
		$(this).find('.navA').addClass("active");
		$(this).find('.child-nav1').animate({ opacity:'show', height:'show' },400);
		//$(this).find('.xialaguang').addClass('navhover');
	}, function() {
		$(this).find('.navA').removeClass("active");
		$('.child-nav1').stop(true,true).hide();
		//$('.xialaguang').removeClass('navhover');
	});
	$('.nav .nav-list > li').hover(function(){
		$(this).find('.child-nav2').animate({ opacity:'show', height:'show' },400);
		//$(this).find('.xialaguang').addClass('navhover');
	}, function() {
		$('.child-nav2').stop(true,true).hide();
		//$('.xialaguang').removeClass('navhover');
	});
    $('.child-nav li').mouseenter(function(){
        $(this).find('a').css("color","red");
        //$(this).find('.light').addClass("displayNone");
        //$(this).find('.loPic').addClass("displayNone");
        //$(this).find('.light p').addClass("displayNone");
        //$(this).find('.lighter').css({left:'0'})
        //$(this).children('.lighter').find('.p5').css({left:'0'})
        //$(this).children('.lighter').find('.p6').css({left:'0'})
        //$(this).children('.lighter').find('a').css({bottom:'5px'})
    })
    $('.child-nav li').mouseleave(function(){
        $(this).find('a').css("color","#1760AA");
        //$(this).find('.light').removeClass("displayNone");
        //$(this).find('.loPic').removeClass("displayNone");
        //$(this).find('.light p').removeClass("displayNone");
        //$(this).find('.lighter').css({left:-$(this).width()})
        //
        //$(this).children('.lighter').find('.p5').css({left:-$(this).width()})
        //$(this).children('.lighter').find('.p6').css({left:-$(this).width()})
        //$(this).children('.lighter').find('a').css({bottom:'-60px'})
    })
    $('.nav-list li').mouseenter(function(){
       $(this).find('ul').removeClass("disPlay");
    })
    $('.nav-list li').mouseleave(function(){
       $(this).find('ul').addClass("disPlay");
    })
    /*indexpage banner动画js*/
    $('.index li').mouseenter(function(){
        $(this).find('.light').addClass("displayNone");
        $(this).find('.loPic').addClass("displayNone");
        $(this).find('.light p').addClass("displayNone");
        $(this).find('.lighter').css({left:'0'})
        $(this).children('.lighter').find('.p5').css({left:'0'})
        $(this).children('.lighter').find('.p6').css({left:'0'})
        $(this).children('.lighter').find('a').css({bottom:'5px'})
    })
    $('.index li').mouseleave(function(){
        $(this).find('.light').removeClass("displayNone");
        $(this).find('.loPic').removeClass("displayNone");
        $(this).find('.light p').removeClass("displayNone");
        $(this).find('.lighter').css({left:-$(this).width()})

        $(this).children('.lighter').find('.p5').css({left:-$(this).width()})
        $(this).children('.lighter').find('.p6').css({left:-$(this).width()})
        $(this).children('.lighter').find('a').css({bottom:'-60px'})
    })
});