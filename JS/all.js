
$(document).ready(function () {

    
    $('.tree ul').addClass('clearfix');
    $('.tree li').addClass('float_left');
    $('.tree li').filter(':even').addClass('right_line');
    $('.tree li').filter(':odd').addClass('left_line');
    $('.tree li:last-child').addClass('last-child');
    if ($('.last-child').hasClass('left_line') == true) {
        $('.last-child').addClass('cool');
    }
    var count = 0, num = 1;
    debugger;
    if (typeof $('.tree li').attr('groups') == 'undefined') {
        $(this).find('ul>li').each(function (index, element) {
            if ($(this).attr('groups') == 'CEO') {
                count = count + 1;
                $(this).parent().addClass('ceo_ul')
                $(this).siblings().removeClass('float_left');
                $(this).siblings().removeClass('left_line');
                $(this).siblings().removeClass('right_line');
                $(this).addClass('float_left_ceo');
                $(this).siblings().addClass('float_right_ceo');
                $(this).removeClass('float_left');
                //$(this).addClass('ceo'+count);
            } else {
                $('.tree .float_left').filter(':even').addClass('right_line');
                $('.tree .float_left').filter(':odd').addClass('left_line');
                //$(this).removeClass('float_left');
                //$(this).addClass('float_right_ceo');
            }
        }); var cou = 0;
        $('.ceo_ul li').each(function (index, element) {
            num = num + 1;

            $(this).attr('data-num', num);
            if ($(this).attr('groups') == 'CEO') {
                cou = cou + 1;
                var x = 20 - (90 * (num - cou * 2))
                $(this).css('top', x + 'px')
            }
        });

    }
    $('.tree li').each(function (index, element) {

        if ($(this).attr('groups') == 'CEO') {
            //console.log('weg');
            $(this).removeClass('float_right_ceo');
        }
    })
    var height = 1000;
    $('.tree').css('height:' + height + 'px')
    //if($('.tree li .user_name p').html()=='CEO office'){
    //this.className += " MyClass";
    //alert('');
    //}
    //if($('.user_name p').html('CEO office')==true){
    //count=count+1
    //alert($('.tree li a .user_name p').html());	
    //}else{}
    //  width();
    sizes();

    function width() {
        $('.tree li').each(function (index, element) {
            if ($(this).children('ul').length == 0) {
                $(this).children('a').children('.open_close').removeClass('open_close');
            }
        });
    }
    $('.2').each(function (index, element) {
        $(this).parent('ul').addClass('display_none');
    });
    $('.tree a').on('load', function () {
        if ($(this).hasClass('opened') == true) {
            $(this).parent('li').parent('ul').removeClass('opened_uli_ul');
            $(this).parent('li').parent('ul').siblings('a').removeClass('display_none');
            $(this).parent('li').removeClass('opened_ul');
            $(this).removeClass('opened');
            $(this).children('.open_close').removeClass('close');
            $(this).closest('li').siblings('li').each(function (index, element) {
                $(this).removeClass('display_none')
            });
            var x = parseInt($(this).parent('li').attr('class'));
            x = x + 2;
            $(this).siblings('ul').addClass('display_none');
            $('.' + x).each(function (index, element) {
                $(this).parent('ul').removeClass('display_none');
            });
            sizes()
        }
        else {
            $(this).parent('li').parent('ul').addClass('opened_uli_ul');
            $(this).parent('li').parent('ul').siblings('a').addClass('display_none');
            $(this).parent('li').addClass('opened_ul');
            $(this).addClass('opened');
            $(this).children('.open_close').addClass('close');
            $(this).closest('li').siblings('li').each(function (index, element) {
                $(this).addClass('display_none')
            });
            var x = parseInt($(this).parent('li').attr('class'));
            x = x + 2;
            $(this).siblings('ul').removeClass('display_none');
            $('.' + x).each(function (index, element) {
                $(this).parent('ul').addClass('display_none');
            });
            sizes()
        }
    })
    function sizes() {
        $('.tree ul').each(function (index, element) {
            var z = 0, k = 0;
            $(this).children('li').each(function (index, element) {
                k += 1;
                if ($(this).hasClass('display_none')) {
                }
                else {
                    if ($(this).hasClass('float_left')) {
                        z += 1;
                        if ($(this).hasClass('float_left') == false) {
                            z = 1;
                        }
                    }
                    else {
                    }
                }
            });
            var y = 100 / z
            $(this).children('li').each(function (index, element) {
                $(this).css('width', y + '%');
            });
        });
    }
    $('.1').children('a').trigger('load');

    $('.tree img').each(function () {

        var curSrc = $(this).attr('src');
        if (curSrc === '') {
            $(this).attr('src', 'http://intranet/_layouts/images/CustomChartWebPart/Images/o14_person_placeholder_96.png');
        }
        else {

            var $this = $(this)
            $this.attr('src', $this.attr('src').replace('intra:', 'intranet:'))
        }
    });

    var activeTabIndex = -1;
    var tabNames = ["information", "chart"];

    $(".tab-menu > li").click(function (e) {
        for (var i = 0; i < tabNames.length; i++) {
            if (e.target.id == tabNames[i]) {
                activeTabIndex = i;
            } else {
                $("#" + tabNames[i]).removeClass("active");
                $("#" + tabNames[i] + "-tab").css("display", "none");
            }
        }
        $("#" + tabNames[activeTabIndex] + "-tab").fadeIn();
        $("#" + tabNames[activeTabIndex]).addClass("active");
        return false;
    });
  
    setActivTab();

    function setActivTab() {

        var activTabIndex = $('#Organization_chart input').first().val();

        if (activTabIndex == 0) {
            $("#" + tabNames[1]).removeClass("active");
            $("#" + tabNames[1] + "-tab").css("display", "none");

            $("#" + tabNames[0] + "-tab").fadeIn();
            $("#" + tabNames[0]).addClass("active");

        }
        else {

            $("#" + tabNames[0]).removeClass("active");
            $("#" + tabNames[0] + "-tab").css("display", "none");

            $("#" + tabNames[1] + "-tab").fadeIn();
            $("#" + tabNames[1]).addClass("active");

        }
    }

});