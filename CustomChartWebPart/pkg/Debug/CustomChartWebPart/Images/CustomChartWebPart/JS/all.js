
$(document).ready(function () {
    //$('.tree li').each(function(index, element) {
    //		var x=$(this).parent('ul').width()/3;
    //		if($(this).width()>x){
    //			$(this).children('ul').children('li').each(function(index, element) {
    //                $(this).css('display','none')
    //            });
    //		}
    //    });
    //	$('.tree ul').each(function(index, element) {
    //		var x = 0;
    //		$(this).children('li:nth-child(4)').css('float','none');
    //		if(x>'3'){
    //			console.log(x);
    //			}
    //    });
    $('.tree ul').addClass('clearfix');
    $('.tree li').addClass('float_left');
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
  if ( curSrc === '' ) {
      $(this).attr('src', 'http://intranet/_layouts/images/CustomChartWebPart/Images/o14_person_placeholder_96.png');
  }
  else{
        
      var $this = $(this)
      $this.attr('src',$this.attr('src').replace('intra:','intranet:'))
       }
});

  var activeTabIndex = -1;
    var tabNames = ["information","chart"];

    $(".tab-menu > li").click(function(e){
        for(var i=0;i<tabNames.length;i++) {
            if(e.target.id == tabNames[i]) {
                activeTabIndex = i;
            } else {
                $("#"+tabNames[i]).removeClass("active");
                $("#"+tabNames[i]+"-tab").css("display", "none");
            }
        }
        $("#"+tabNames[activeTabIndex]+"-tab").fadeIn();
        $("#"+tabNames[activeTabIndex]).addClass("active");
        return false;
    });
  setActivTab();

  function setActivTab()
   {
      debugger;

     for(var i=0;i<tabNames.length;i++) {
            if($.cookie('activTab') == tabNames[i]) {
                activeTabIndex = i;
            } else {
                $("#"+tabNames[i]).removeClass("active");
                $("#"+tabNames[i]+"-tab").css("display", "none");
            }
        }
        $("#"+tabNames[activeTabIndex]+"-tab").fadeIn();
        $("#"+tabNames[activeTabIndex]).addClass("active");    
   }

});
















