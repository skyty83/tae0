$(document).ready(function(){
  if($('.not-support-pop').hasClass('active')) {
    $('body').addClass('active-info-disclosure');
  } else {
    $('body').removeClass('active-info-disclosure');
  }

  // MOBILE 전문가검색 - 상세조건 검색 카운트
  $(function(){
    $('.detail-count').each(function() {
      var $this = $(this),
      countTo = $this.text();
      $({ countNum: 0 }).animate({
        countNum: countTo
      },

      {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
          function comma(str) {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
          }
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  });  

  //calendar 20191022 - datepicker v1.9.0
  /*
  $('.datepicker').datepicker({
    language: 'ko',
    format: 'yyyy-mm-dd',
    autoclose: true,
    todayHighlight : true,
    //startView: "months",
    //minViewMode: "months",
  });
  */

  
  $('.inbody-expert-search .detail-search').on('click', function(){
    $(this).toggleClass('on');
  });
 
  //drop menu
  $('.local-search-main input[type="search"] , .local-search-main .btn-search-section').on('click', function(){
    $(this).addClass('m-on');
    $('.main-search-drop').slideToggle(200);
  });

  $('.direct-local-search').on('click', function(){
    $('.local-search-main input[type="search"]').addClass('m-on');
    $('.local-search-main .main-search-drop').hide();
    $('.local-search-main .main-search-drop').slideDown(200);
  });
  $(document).mouseup(function(e) {
      var container = $(".active-local-search .main-search-drop");
    if (!container.is(e.target) && container.has(e.target).length === 0)  {
      container.hide();
    }
	});
  //search section
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 200) {
      $('.main-search-drop').hide();
    }
  });
  $('.local-search-main .main-search-drop a').on('click', function(){
    $(this).toggleClass('on');
    if($(this).hasClass('client')){
      $(this).parents('.form-area').find('input[type="search"]').removeClass('expert advisory').addClass('on client');
      $(this).parents('.form-area').find('.submit svg').removeClass('expert advisory').addClass('on client');
      $('.main-search-drop a.expert').removeClass('on');
      $('.main-search-drop a.advisory').removeClass('on');
      $('.main-search-drop a.client').addClass('on');
      $('.btn-search-section .text').text('전문가 검색');
    } else if ($(this).hasClass('advisory')) {
      $(this).parents('.form-area').find('input[type="search"]').removeClass('client expert').addClass('on advisory');
      $(this).parents('.form-area').find('.submit svg').removeClass('client expert').addClass('on advisory');
      $('.main-search-drop a.client').removeClass('on');
      $('.main-search-drop a.expert').removeClass('on');
      $('.main-search-drop a.advisory').addClass('on');
      $('.btn-search-section .text').text('온라인자문 검색');
    } else {
      $(this).parents('.form-area').find('input[type="search"]').removeClass('client advisory').addClass('on expert');
      $(this).parents('.form-area').find('.submit svg').removeClass('client advisory').addClass('on expert');
      $('.main-search-drop a.client').removeClass('on');
      $('.main-search-drop a.advisory').removeClass('on');
      $('.main-search-drop a.expert').addClass('on');
      $('.btn-search-section .text').text('Project 검색');
    }
    if(!$('.local-search-main .main-search-drop a').hasClass('on')){
      $(this).parents('.form-area').find('input[type="search"]').removeClass('on client expert advisory');
      $(this).parents('.form-area').find('.submit svg').removeClass('on client expert advisory');
    }
    //5.0 수정
    // var searchText = $(this).text();
    // $('.btn-search-section .text').text(searchText);
    
    $('.local-search-main .main-search-drop').slideUp(200);
  });
  
  if($(window).outerWidth() > 991) {
    $('html').click(function(e){
      if(!$(e.target).hasClass('elem')){
        $('.main-search-drop').slideUp(200);
      };
    });
  }



  /*// V4 Home */

  /* request indicator */
  $('.request-indicator .exposed').on('click', function(){
    if($(this).parent('.request-indicator').hasClass('on')){
      $('.request-indicator .indicator-wrap').slideUp();
      $('.request-indicator').removeClass('on');
    } else {
      $('.request-indicator .indicator-wrap').slideUp();
      $('.request-indicator').removeClass('on');
      $(this).parent('.request-indicator').find('.indicator-wrap').slideDown(200);
      $(this).parent('.request-indicator').addClass('on');      
    }
    /*
    var windowWidth = $(window).width();
    if(windowWidth < 993) {
      $('body').toggleClass('active-project-status-guide');
    }
    */

    $('html').click(function(e){
      if(!$(e.target).hasClass("exposed")){
        $('.indicator-wrap').slideUp(200);
        $('.request-indicator').removeClass('on');
        $('body').removeClass('active-project-status-guide');
      }
    });
  });
  /*// request indicator */

  // Project 지원하기 textarea 글자수 제한
  $('.whether-participation .form-group .form-control').on('keyup', function() {
    var content = $(this).val();
    $('.whether-participation .text-danger').html(content.length);
    if($(this).val().length > 2000) {
      alert("글자수는 2,000자 이내로 제한됩니다.");
      $(this).val($(this).val().substring(0, 2000));
    }
  });
  // .modal display:block 일 때 body에 fixed
  if($('.modal').is(":visible")){
    $('body').addClass('no-scroll');
  }else{
    $('body').removeClass('no-scroll');
  }

  //tbsol-tab
  $('.tbsol-tab li a').on('click', function(){
    $('.tbsol-tab li').removeClass('active');
    $(this).parent('li').addClass('active');
  });
  $('.tbsol-tab li:first-child a').on('click', function(){
    $('.tbsol-select-box').slideDown(300);
  });
  $('.tbsol-tab li:last-child a').on('click', function(){
    $('.tbsol-select-box').slideUp(300);
  });

  //App Push list-group-item click event
  $('.list-group-item label').on('click', function(){
    if ($(this).parent('.list-group-toggle').find('.input-checkbox').is(':checked')) {
      $(this).parent('.list-group-toggle').find('.input-checkbox').attr('checked', false);
    } else {
      $(this).parent('.list-group-toggle').find('.input-checkbox').attr('checked', true);
    }
  });

  // App Push 수신받기 txt
  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  if (varUA.match('android') != null) { 
    $('.dv-and').css('display','block');
    $('.dv-ios').css('display','none');
  } else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
    $('.dv-and').css('display','none');
    $('.dv-ios').css('display','block');
  } else {
    $('.dv-and').css('display','block');
    $('.dv-ios').css('display','none');
  }

  /* 솔루션 말줄임 효과 */
  $('.posts-solution a.body').each(function(){
    var length = 128; //표시할 글자수 정하기
    $(this).each(function(){
     if( $(this).text().length >= length ){
      $(this).text($(this).text().substr(0,length)+'...'); //지정한 글자수 이후 표시할 텍스트(...)
     }
    })
  });

  /* 검색 전문가상세정보 _정보공개안내팝업*/
  $('.direct-info-disclosure, .layer-info-disclosure').on('click', function(){
    $(this).parent().siblings('.section-title').find('.popup-info-open-guide').show();
    //$('.popup-info-open-guide').show();
  });
  $('.popup-info-open-guide .btn-close').on('click', function(){
    $('.popup-info-open-guide').hide();
  });

  /* 검색 전문가상세정보 info-keyword-popup*/
  $('.section-title p').on('click', function(){
    $('.popup-solution-keyword').show();
  });
  $('.popup-solution-keyword .btn-close').on('click', function(){
    $('.popup-solution-keyword').hide();
  });

  /* Expert's 제안 등록관리 _ 수정하기 info-keyword-popup*/
  $('.info-sol-keyword').on('click', function(){
    $('.popup-solution-keyword').show();
  });
  $('.popup-solution-keyword .btn-close').on('click', function(){
    $('.popup-solution-keyword').hide();
  });


  $('.sol-field').on('click', function(){
    $('.popup-solution-field').show();
  });
  $('.popup-solution-field .btn-close').on('click', function(){
    $('.popup-solution-field').hide();
  });


  /* 전문가 상세보기 - Expert's 제안 */
  $('.project-solution a.read-more').on('click', function(){
    $(this).parent('div').parent('ul').find('li').toggleClass('more');
    $(this).parent('div').parent('ul').find('li').find('span').toggleClass('more');
    $(this).toggleClass('on');
  });

  /* Expert's 제안 상담신청 팝업 */
  /* 안드로이드 - 상담요청 팝업시 앱새로고침 뜨는것. */
  $('.posts-solution .btn-client.project-suggest').on('click', function(){
    $('body,html').animate({scrollTop: 50}, 200);
  });
  
  /* 앱에서 팝업 새로고침 뜨는 이슈 */
  if($('.popup-evaluation').is(":visible")){
    $('body,html').animate({scrollTop: 50}, 200);
  }

  /* selectbox */
  $('.apply-solution .tbsol-select-box').on('click', function(){
    $(this).find('.select-box-innerwrap').removeClass('empty');
  });
  $('.apply-solution #tbsol-select-box2').on('change', function(){
    $('.apply-solution #tbsol-select-box1').parent('.select-form').removeClass('disabled');
    $('.apply-solution #tbsol-select-box1').prop('selectedIndex',0);
    $('.apply-solution #tbsol-select-box1').parent().find('.label-desc').html('솔루션 제목');
  });

  $(".tbsol-select").on("click" , function() {
    $(this).parent(".tbsol-select-box").toggleClass("open");
  });
  
  $(document).mouseup(function (e) {
      var container = $(".tbsol-select-box");
      if (container.has(e.target).length === 0) {
          container.removeClass("open");
      }
  });
  
  $(".tbsol-select").on("change" , function() {
    var selection = $(this).find("option:selected").text(),
    labelFor = $(this).attr("id"),
    label = $("[for='" + labelFor + "']");
    label.find(".label-desc").html(selection);
  });
  /* selectbox */
  $('.infoview-btn').on('click', function(){
    $('.personal-info-view').toggle();
    if($(this).hasClass('on')){
      $(this).removeClass('on').text('내용 보기');
    } else {
      $(this).addClass('on').text('내용 닫기');
    }
  });
  $(function() {
    $('#solution-txa').keyup(function (e){
        var content = $(this).val();
        $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
        $('#solution-txa-num').html(content.length + '/1000');
    });
    $('#solution-txa').keyup();
  });
  $('#solution-txa').on('keyup', function() {
    if($(this).val().length > 1000) {
      alert("글자수는 1,000자 이내로 제한됩니다.");
      $(this).val($(this).val().substring(0, 1000));
    }
  });
  /*연락처 number 제한*/
  $('.phone-before, .phone-center, .phone-after').on('keyup', function() {
    if($(this).val().length > 4) {
      $(this).val($(this).val().substring(0, 4));
    }
  });

  $('.solution-toggle').on('mouseenter', function(){
    $(this).addClass('on');
    $('.solution-toggle:after').show();
    $('.solution-depth').show();
  });
  $('.local-navi').on('mouseleave', function(){
    $('.solution-toggle').removeClass('on');
    $('.solution-toggle:after').hide();
    $('.solution-depth').hide();
  });
  $('.solution-depth li a').on('click', function(){
    $('.solution-depth li a').removeClass('active');
    $(this).addClass('active');
  });
    
  /* Expert's 제안 페이지 */
  $('.bailiwick li:not(.empty) a').on('click', function(){
    $('.bailiwick li').removeClass('active');
    $(this).parent('li').addClass('active');
  });
  $('.bailiwick-mo').on('click', function(){
    $('.dis-pc, .dis-mo').toggle();
    if($(this).hasClass('on')){
      $(this).removeClass('on').text('전문 분야 열기');
    } else {
      $(this).addClass('on').text('전문 분야 닫기');
    }
  });
  $('.bailiwick-pc').on('click', function(){
    $('.dis-pc').toggle();
    if($(this).hasClass('on')){
      $(this).removeClass('on').text('전문 분야 열기');
    } else {
      $(this).addClass('on').text('전문 분야 닫기');
    }
  });
  /* Expert's 제안 페이지 */

   
  /* 2019 TB Talent 페이지 */
  $('.tb-talent2019-tab-type li:not(.empty) a').on('click', function(){
    $('.tb-talent2019-tab-type li').removeClass('active');
    $(this).parent('li').addClass('active');
  });
  $('.tb-talent2019-mo').on('click', function(){
    $('.dis-pc, .dis-mo').toggle();
    if($(this).hasClass('on')){
      $(this).removeClass('on').text('전문 분야 열기');
    } else {
      $(this).addClass('on').text('전문 분야 닫기');
    }
  });
  $('.tb-talent2019-pc').on('click', function(){
    $('.dis-pc').toggle();
    if($(this).hasClass('on')){
      $(this).removeClass('on').text('전문 분야 열기');
    } else {
      $(this).addClass('on').text('전문 분야 닫기');
    }
  });
  /* 2019 TB Talent 페이지 */

  // main - interview layer 
  $('.layer-close-btn').click(function(){
    $(this).parent().parent('.layer').removeClass('show');
    $('body').removeClass('no-scroll');
    $('body').removeClass('no-scroll-ios');
  });

  
  // main - interview layer 세로 스와이프 문제
  $('.section.expert-introduce .posts-main .direct-skip').on('click', function(){
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    if (varUA.match('android') != null) { 
      $('body').addClass('no-scroll');
    } else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
      $('body').addClass('no-scroll-ios');
    } else {
      $('body').addClass('no-scroll');
    }
  });

})



// Project - skill modal - check input 
function inputHiddenControl(clickInput){ 
  clickChk = $(clickInput).siblings('.input-checkbox');
  var chk =! clickChk.is(":checked"); 
  chk ? clickChk.siblings('.input-hidden').show() : clickChk.siblings('.input-hidden').hide();
}

// 리스트 Highlight, new-badge - fade out
function removeHighlight() {
  $('.project-detail-qna-list.expert-style ul li.highlight').css("transition", "1s").css("background", "#fff");
  $('.project-detail-qna-list .icon-n').fadeOut('1000');
}

// filter - select click
function filterListClick() {
  $('.filter-title li').removeClass('active');
  $('.filter').hide();
}

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
	if(scrollTop > 300) {
		$('.back-top').fadeIn();
	} else {
		$('.back-top').hide();
	}
});

$(function(){
	$('.back-top').on('click', function(){
		$('window, body, html').animate({scrollTop:0}, 300);
		return false;
	});
});

// main guide popup
$(function(){
   // Join - Terms Check
  $(".terms-checkbox-all").click(function(){
    maxChkNum = 5; //20210106
    var chkNum = $(".terms-checkbox-all:checkbox:checked").length;
    (maxChkNum == chkNum) ? $('#termsCheckAll').prop("checked", true) : $('#termsCheckAll').prop('checked', false);
  })

  // Join - Terms Check All
  $( '#termsCheckAll' ).click( function() {
    $( '.terms-checkbox-all' ).prop( 'checked', this.checked );
  } );

  // Join - Check Btn Active 20180730 확인 후 삭제 요망
  $("input[name='join-type']").click(function(){
    $('.join-way .btn-block').removeClass('btn-gray-lighter , disabled');
    $('.btn-tb').addClass('btn-primary');
    $('.btn-sns').addClass('btn-facebook');
  })

  
  var membershipChoice = {
    activeClient: function() {
      $('#signUpType').removeClass('active-client').addClass('active-expert')
      $('#createAccount').removeClass('btn-primary').removeClass('btn-client').addClass('btn-expert');
      $('#createAccount .em').text('Expert');
      $('#checkedType').text('Expert 가입을 선택하셨어요!');
      $('#checkedType').removeClass('for-client').addClass('for-expert');
    },
    activeExpert: function() {
      $('#signUpType').removeClass('active-expert').addClass('active-client')
      $('#createAccount').removeClass('btn-primary').removeClass('btn-expert').addClass('btn-client');
      $('#createAccount .em').text('Client');
      $('#checkedType').text('Client 가입을 선택하셨어요!');
      $('#checkedType').removeClass('for-expert').addClass('for-client');
    },
    action: function() {

      if($('input[name=join-type]').filter(':checked').prop('id') === 'join-type-1') {
        membershipChoice.activeClient();
      } else if($('input[name=join-type]').filter(':checked').prop('id') === 'join-type-2') {
        membershipChoice.activeExpert();
      };

      $('input[name=join-type]').on('click', function() {
        if($(this).prop('id') === 'join-type-1') {
          membershipChoice.activeClient();
        } else if($(this).prop('id') === 'join-type-2') {
          membershipChoice.activeExpert();
        };
      });
    }
  };
  membershipChoice.action();



  // Tab control
  $(".tab-title li").click(function () {
    var isChecked = $(this).find('input').is(":checked");
    console.log(isChecked);

    $(".tab-title li").removeClass("active");
    $(this).addClass("active");
    $(".tab-contents").hide();
    var activeTab = $(this).attr("rel");
    $('.'+activeTab).show();
    return false;
  });

  // Expert - filter
  $('.search-filter .filter-title li').click(function(){
    var activeTab = $(this).attr("rel");
    
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.'+activeTab).hide();
    } else {
      $(this).siblings('li').removeClass('active');
      $(this).addClass('active');
      $('.filter').hide();
      $('.'+activeTab).show();
    }
	});
	
	$('.filter-js').click(function(){
		if (!$(this).parent('.filter-box').find('.filter-drop').hasClass('active')) {
			$(this).addClass('active');
			$(this).parent('.filter-box').find('.filter-drop').addClass('active');
			$(this).parent('.filter-box').find('.filter-drop').css('display', 'block');
		} else {
			$(this).removeClass('active');
			$(this).parent('.filter-box').find('.filter-drop').removeClass('active');
			$(this).parent('.filter-box').find('.filter-drop').css('display', 'none');
		}
	});


	$('.filter-drop .hide-js').click(function(){
		$('.filter-drop').removeClass('active');
		$('.filter-drop').css('display', 'none');
	});

  $('.filter-title .txt').on('click', function(){
    $(this).toggleClass('on');
  });

  // Star Rating Input
  $('.star-rating-icons:not(.article-box) a').on('click',function(){
    var idx = $(this).index();
    $('.star-rating-icons:not(.article-box) a').removeClass('active').each(function (index) {
      if (index <= idx) {
          $(this).addClass('active');
      }
    });;
    return false;
  });
  // Star Rating Input 2019
  $('.star-rating-icons.article-box.first a').on('click',function(){
    var idx = $(this).index();
    $('.star-rating-icons.article-box.first a').removeClass('active').each(function (index) {
      if (index <= idx) {
          $(this).addClass('active');
      }
    });
    return false;
  });
  $('.star-rating-icons.article-box.last a').on('click',function(){
    var idx = $(this).index();
    $('.star-rating-icons.article-box.last a').removeClass('active').each(function (index) {
      if (index <= idx) {
          $(this).addClass('active');
      }
    });
    return false;
  });

	// faq-list
	$('.faq-list h4 a').click(function(){
		if ($(this).hasClass('active')) {
			$('.faq-list h4 a').removeClass('active');
			$('.faq-list-content').stop().slideUp();
		} else {
			$('.faq-list h4 a').removeClass('active');
			$('.faq-list-content').stop().slideUp();
			$(this).addClass('active');
			$(this).parent().next('.faq-list-content').stop().slideDown();
		}
		return false;
	});
	// dropdown
	$('.dropdown-toggle').click(function(event){
		var dropdownToggle = $(this);
		var dropdownMenu = dropdownToggle.next('.dropdown-menu');
		if ($(this).hasClass('show')) {
			dropdownToggle.removeClass('show');
			dropdownMenu.hide();
		} else {
			dropdownToggle.addClass('show');
			dropdownMenu.show();
		}
		$(document).on('click', function (event) {
			if (event.target.className != 'dropdown-item') {
				dropdownToggle.removeClass('show');
				dropdownMenu.hide();
			}
		});
		return false;
	});

	// placeholder use
	// $('input, textarea').placeholder();

});

// modal
(function($){
	var NAME = 'modal';
	var VERSION = '1.0.0';
	var defaults = {
		show: true,
		backdrop: true,
		backdropClick: true,
		keyboard: true,
		autoPosition: true, // auto position axis Y
		dialogMarginTop: 20, // default dialog margin-top : px
		width: null, // .modal-content width
		top: null, // .modal-dialog margin-top
		left: null // .modal-dialog margin-left
	};
  var ClassName = {
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in'
  };
	var Selector = {
    MODAL: '.modal',
    DIALOG: '.modal-dialog',
    CONTENT: '.modal-content',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]'
  };

	$.fn.modal = function(options){
		if(this.length === 0){
			return this;
		} 
		if(this.length > 1){
			this.each(function(){
				$(this).modal(options);
			});
			return this;
		}
		var _modal = {};
		var el = this;
		var element = el[0];
    var _backdrop = null;
    var ww = $(window).width();
		var init = function(){
			_modal.settings = $.extend({}, defaults, options);
			el.attr('tabindex','-1');
			if (_modal.settings.backdrop)
			{
				_backdrop = document.createElement('div');
				_backdrop.className = ClassName.BACKDROP;
			} else {
				_backdrop = null;
			}
			el.on('click', function (event) {
				if (event.target !== event.currentTarget) {
					return;
				}
				if (_modal.settings.backdrop && _modal.settings.backdropClick) {
					hide();
				}
			});
			if (_modal.settings.keyboard) {
				$(document.body).on('keydown', function (event) {
					if (event.which === 27) {
						hide();
					}
				});
			}
		}
		init();

		function autoPosition(){
			var windowHeight = $(window).height();
			var dialogHeight = el.find(Selector.DIALOG).height();
			var dialogHeightFix = windowHeight / 2 - dialogHeight / 2;
			if (dialogHeightFix < _modal.settings.dialogMarginTop){dialogHeightFix = _modal.settings.dialogMarginTop;}
			if (_modal.settings.top){dialogHeightFix = _modal.settings.top}
			$(Selector.DIALOG).css({marginTop:dialogHeightFix});
		}

		function enforceFocus() {
			$(document).off('focusin').on('focusin', function (event) {
				if (element !== event.target && !$(element).has(event.target).length) {
					element.focus();
				}
			});
		}

		function showBackdrop(){
			if (!$(document).find('.'+ClassName.BACKDROP).length)
			{
				$(_backdrop).appendTo(document.body);
			}
		}
		function removeBackdrop() {
			$('.' + ClassName.BACKDROP).remove();
			_backdrop = null;
		}
		function show(){
			//$(document.body).addClass(ClassName.OPEN); 220510
			showBackdrop();
			el.show();
			if (_modal.settings.width)
			{
				$(Selector.DIALOG).css({width:_modal.settings.width, marginLeft:'auto', marginRight:'auto'});
			}

			$(Selector.DIALOG).css({marginLeft:_modal.settings.left});
			if (_modal.settings.autoPosition && ww > 768){autoPosition();}
			enforceFocus();
			el.focus();
		}
		function hide(){
			$(document.body).removeClass(ClassName.OPEN);
			removeBackdrop();
			el.hide();
			$(Selector.DIALOG).css('margin-top','');
			$(document).off('focusin');
		}

		if (_modal.settings.show)
		{
			show();
		} else {
			hide();
		}

		$(window).bind('resize', function(){
      var wwr = $(window).width();
      if (wwr > 768){
        autoPosition();
      } else {
        $(Selector.DIALOG).css({marginTop:0});
      }
    });

		return this;
	};

	$(document).on('click', Selector.DATA_TOGGLE, function (event) {
		var target = $(this).attr('data-target');
		if (this.tagName === 'A') {
			event.preventDefault();
		}
		$(target).modal();
	});

	$(document).on('click', Selector.DATA_DISMISS, function (event) {
		$(Selector.MODAL).modal({show:false}).unbind();
	});

})(jQuery);

// popup
(function($){
	var NAME = 'popup';
	var VERSION = '1.0.0';
	var defaults = {
		show: true,
		backdrop: false,
		backdropClick: false,
		keyboard: false,
		drag:false,
		dragTarget: null,
		positionAuto: true, // auto position axis X,Y
		positionFixed: false,
		width: null, // .popup width
		height: null, // .popup height
		top: null, // position top
		left: null, // position left
		zIndex: null // z-index
	};
    var ClassName = {
      BACKDROP: 'popup-backdrop',
      FADE: 'fade',
      IN: 'in'
    };
	var Selector = {
      POPUP: '.popup',
	  CONTENT: '.popup-content',
	  DATA_TOGGLE: '[data-toggle="popup"]',
      DATA_DISMISS: '[data-dismiss="popup"]'
    };

	$.fn.popup = function(options){
		if(this.length === 0){
			return this;
		} 
		if(this.length > 1){
      $('body').css('overflow','hidden');
			this.each(function(){
				$(this).popup(options);
			});
			return this;
		}
		var _popup = {};
		var el = this;
		var element = el[0];
		var _backdrop = null;
		var _startX = 0;
		var _startY = 0;
		var _offsetX = 0;
		var _offsetY = 0;
		var _dragElement;
		var _oldZIndex = 0;
		var backdropId = null;
		if (el.attr('id'))
		{
			backdropId = el.attr('id') + 'Backdrop';
		} else {
			backdropId = ClassName.BACKDROP;
		}

		var init = function(){
			_popup.settings = $.extend({}, defaults, options);
			el.attr('tabindex','-1');
			if (_popup.settings.backdrop)
			{
				_backdrop = document.createElement('div');
				_backdrop.id = backdropId;
				_backdrop.className = ClassName.BACKDROP;



			} else {
				_backdrop = null;
			}
			$(document).on('click', function (event) {
				if (event.target.id == backdropId && _popup.settings.backdropClick) {
					hide();
				}
			});
			if (_popup.settings.keyboard) {
				$(document.body).on('keydown', function (event) {
					if (event.which === 27) {
						hide();
					}
				});
			}
			if (_popup.settings.drag) {
				el.find(_popup.settings.dragTarget).css('cursor','move');
				element.onmousedown = OnMouseDown;
				element.onmouseup = OnMouseUp;
			}
			if (_popup.settings.positionFixed) {
				el.css({position:'fixed'});
			}
		}
		init();

		function OnMouseDown(e)
		{
			if (e == null) 
				e = window.event; 

			var target = e.target != null ? e.target : e.srcElement;

			if ((e.button == 1 && window.event != null || 
				e.button == 0) && 
				target.className == $(_popup.settings.dragTarget)[0].className)
			{
				var _targetElement = $(target).closest(Selector.POPUP)[0];

				_startX = e.clientX;
				_startY = e.clientY;

				_offsetX = ExtractNumber(_targetElement.style.left);
				_offsetY = ExtractNumber(_targetElement.style.top);

				_oldZIndex = _targetElement.style.zIndex;
				_targetElement.style.zIndex = 10000;

				_dragElement = _targetElement;

				document.onmousemove = OnMouseMove;

				document.body.focus();

				document.onselectstart = function () { return false; };

				_targetElement.ondragstart = function() { return false; };

				return false;
			}
		}
		function OnMouseMove(e)
		{
			if (e == null) 
				var e = window.event; 
			_dragElement.style.left = (_offsetX + e.clientX - _startX) + 'px';
			_dragElement.style.top = (_offsetY + e.clientY - _startY) + 'px';
		}
		function OnMouseUp(e)
		{
			if (_dragElement != null)
			{
				_dragElement.style.zIndex = _oldZIndex;
				document.onmousemove = null;
				document.onselectstart = null;
				_dragElement.ondragstart = null;
				_dragElement = null;
			}
		}
		function ExtractNumber(value)
		{
			var n = parseInt(value);
			return n == null || isNaN(n) ? 0 : n;
		}

		function positionAuto(){
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var popupHeight = el.height();
			var popupWidth = el.width();
			var popupTopFix = windowHeight / 2 - popupHeight / 2;
			var popupLeftFix = windowWidth / 2 - popupWidth / 2;
			if (popupTopFix < 0){popupTopFix = 0;}
			if (popupLeftFix < 0){popupLeftFix = 0;}
			if (_popup.settings.top){popupTopFix = _popup.settings.top}
			if (_popup.settings.left){popupLeftFix = _popup.settings.left}
			el.css({top:popupTopFix,left:popupLeftFix,opacity:1});//20200324
		}

		function enforceFocus() {
			$(document).off('focusin').on('focusin', function (event) {
				if (element !== event.target && !$(element).has(event.target).length) {
					element.focus();
				}
			});
		}
		function showBackdrop(){
			if (!$(document).find('#'+backdropId).length)
			{
				$(_backdrop).appendTo(document.body);
				if (_popup.settings.zIndex){$('#'+backdropId).css({zIndex:_popup.settings.zIndex-1});}
			}
		}
		function removeBackdrop() {
			$('#'+backdropId).remove();
			//_backdrop = null;
		}
		function show(){
			showBackdrop();
			el.show();
			el.css({width:_popup.settings.width, height:_popup.settings.height, top:_popup.settings.top, left:_popup.settings.left, zIndex:_popup.settings.zIndex});
			positionAuto();
			enforceFocus();
			el.focus();
		}
		function hide(){
			removeBackdrop();
			el.hide();
			$(document).off('focusin');
		}

		if (_popup.settings.show)
		{
			show();
		} else {
			hide();
		}
		if (!_popup.settings.drag)
		{
			$(window).bind('resize', function(){positionAuto()});
		}

		return this;
	};

	$(document).on('click', Selector.DATA_TOGGLE, function (event) {
		var target = $(this).attr('data-target');
		if (this.tagName === 'A') {
			event.preventDefault();
		}
		$(target).popup();
	});

	$(document).on('click', Selector.DATA_DISMISS, function (event) {
		var target = $(this).closest(Selector.POPUP);
		$(target).popup({show:false});
	});

})(jQuery);



/*! Image Map Resizer (imageMapResizer.min.js ) - v0.5.3 - 2015-04-21
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2015 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(){function a(){function a(a){function c(a){return a*b[1===(d=1-d)?"width":"height"]}var d=0;return a.split(",").map(Number).map(c).map(Math.floor).join(",")}for(var b={width:i.width/j.width,height:i.height/j.height},c=0;g>c;c++)f[c].coords=a(h[c])}function b(){var b=null,c=null;j.onload=function(){b=i.width,c=i.height,(b!==j.width||c!==j.height)&&a()},i.onload=function(){null!==b&&i.width!==b&&a()},j.src=i.src}function c(){function b(){clearTimeout(k),k=setTimeout(a,250)}window.addEventListener?window.addEventListener("resize",b,!1):window.attachEvent&&window.attachEvent("onresize",b)}function d(a){return a.coords.replace(/ *, */g,",").replace(/ +/g,",")}var e=this,f=e.getElementsByTagName("area"),g=f.length,h=Array.prototype.map.call(f,d),i=document.querySelector('img[usemap="#'+e.name+'"]'),j=new Image,k=null;b(),c()}function b(){function b(b){if(!b.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==b.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+b.tagName+">.");a.call(b)}return function(a){switch(typeof a){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(a||"map"),b);break;case"object":b(a);break;default:throw new TypeError("Unexpected data type ("+typeof a+").")}}}"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():window.imageMapResize=b(),"jQuery"in window&&(jQuery.fn.imageMapResize=function(){return this.filter("map").each(a).end()})}();
//# sourceMappingURL=imageMapResizer.map
$(function(){
	if ($('[data-type="responsive-map"]').length > 0)
	{
		$('[data-type="responsive-map"]').imageMapResize();
	}
});


/*
 * posts-list item ellipsis
 */
(function($){
	$.fn.ellipsisCount = function(options){
		var defaults  = {
			item: '.tag',
			activeClass: 'ellipsis-active',
			ellipsis: '<span class="ellipsis"></span>',
			limit: 99,
		};
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};

			var settings = $.extend({}, defaults, options);
			var $elem = $(this);
			var $ellipsisText = $(settings.ellipsis);
				$elem.append($ellipsisText);

			if ($elem.css('position') !== 'relative' && $elem.css('position') !== 'fixed' && $elem.css('position') !== 'absolute') {
				$elem.css('position', 'relative');
			};

			var counting = function() {
				var itemCount = 0;
				$elem.find(settings.item).each(function() {
					if ($(this).position().top > 0) {
						$elem.addClass(settings.activeClass);
						itemCount = itemCount + 1;
					} else {
						$elem.removeClass(settings.activeClass);
					};
				});
				if(itemCount > settings.limit) {
					$ellipsisText.text('외 ' + settings.limit + '개 이상');
				} else {
					$ellipsisText.text('외 ' + itemCount + '개');
				};
			};
			counting();

			$(window).resize(function() {
				counting();
			});
		});
		return this;
	};
})(jQuery);


$(function(){
	/**
	 * 게시물 인디케이터
	 */
	// var indicator = $('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
	// $('ul.posts-list.theme-a.type-a').before(indicator);
	// $(window).on('load', function() {
	// 	setTimeout(function() {
	// 		indicator.remove();
	// 		$('body').removeClass('ready').addClass('onload');
	// 	}, 1000);
	// });

	/**
	 * 게시물 Tag 숨김 표시
	 */
  //20190830
  //$('.posts-list.theme-a.type-a .posts-tag').ellipsisCount();
  $('.ellipsiscount').ellipsisCount();

	/**
	 * 게시물 펼쳐 보기
	 */
	$('.posts-list.theme-a .posts-more').each(function(i) {
		var $this = $(this);
		var $options = {
			fold: $('<button type="button" class="fold"></button>'),
			activeClass: 'active',
			activeText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>열기</title><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>',
			inActiveText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>',
		};
		$this.prepend($options.fold);

		var activate = function() {
			if($this.hasClass($options.activeClass) === true) {
				$options.fold.html($options.inActiveText);
			} else {
				$options.fold.html($options.activeText);
				
			}
		};
		activate();

		$options.fold.on('click', function() {
			$this.toggleClass($options.activeClass);
			activate();
		});
	});
});



/*
 * v3
 */

;(function($){
 /**
   * buiToggle
   */
  $.fn.buiToggle = function(options){
    var defaults = {
        /* general */
        mode: 'normal',
        event: 'click',
        activeClass: 'active',

        disabled: false,
        disabledClass: null,
        
        focusin: false,
        focusout: false,

        clickout: false,
        clickoutTarget: null,
        
        /* target */
        target: null,
        targetClass: 'bui-toggle-target',
        targetActiveClass: 'active',
        
        /* close */
        close: false,
        closeButton: '<button type="button"></button>',
        closeButtonPosition: null,
        closeButtonClass: 'close',
        closeButtonText: 'close',
        
        /* react target */
        reactTarget: null,
        reactClass: null,
        reactActiveClass: 'active',
        
        targetMargin: 0,
        targetPositionY: 'top',
        targetPositionX: 'right',
        
        /* callback */
        onloadCallBack: function() {return false;},
        eventCallBack: function() {return false;},
        activeCallBack: function() {return false;},
        inactiveCallBack: function() {return false;}
    };
    var $this = this;

    /**
     * inside the plugin
     */
    return this.each(function() {
      if (this.length === 0) {
        return this;
      };
      
      var settings = $.extend({}, defaults, options);
      
      /**
       * set button and target
       */
      var buiToggleButton = $(this);
      var buiToggleTarget = settings.target != null ? buiToggleTarget = $(settings.target) : buiToggleTarget = $(this.getAttribute("href"));
        buiToggleTarget.addClass(settings.targetClass);
      
      /**
       * check activation
       */
      var buiToggleActive = buiToggleButton.hasClass(settings.activeClass) ? true : false;
      var buiToggleActivation = function() {
        buiToggleActive = !buiToggleActive;
        return buiToggleActive;
      };
      
      
      /**
       * onloadCallBack
       */
      settings.onloadCallBack(buiToggleButton, buiToggleTarget);
      
      
      /**
       * tooltip
       */
      if(settings.mode === 'tooltip') {
        var yPos = $(window).height() - $(buiToggleButton).offset().top;
        var xPos = $(buiToggleButton).offset().left + $(buiToggleButton).outerWidth();
        $('body').append(buiToggleTarget);
        
        $(buiToggleTarget).css({
          'position': 'absolute',
          'z-index': '999',
          'bottom': yPos,
          'left': xPos,
          'margin': settings.targetMargin + 'px'
        });
        
        $(window).resize(function() {
          yPos = $(window).height() - $(buiToggleButton).offset().top;
          $(buiToggleTarget).css({
            'bottom': yPos,
            'left': xPos,
          });
        });
      };
      
      /**
       * close
       */
      if (settings.close === true) {
        var buiToggleClose = $(settings.closeButton).addClass(settings.closeButtonClass).append(settings.closeButtonText);
        if(settings.closeButtonPosition === null) {
          buiToggleTarget.append(buiToggleClose);
        } else {
          buiToggleTarget.find(settings.closeButtonPosition).append(buiToggleClose);
        };
        
        buiToggleClose.on('click', function() {
            if (settings.disabled === false) {
              $this.toggleEvent('inactive');
            };
        });
      };
      
      /**
       * focusout
       */
      if (settings.focusout === true) {
        var focusItem = buiToggleTarget.find('a, input, button');
        focusItem.each(function() {
          $(this).on('focusout', function() {
            setTimeout(function(){
              if(buiToggleTarget.find(':focus').length === 0) {
                // console.log(buiToggleTarget.is(':focus'));
                $this.toggleEvent('inactive');
              };
            }, 1);
          });
        });
      };
      
      /**
       * event
       */
      if(settings.event === 'click') {
        buiToggleButton.on('click', function(e) {
          this.nodeName === 'A' ? e.preventDefault() : null;
          if (!$(this).hasClass(settings.disabledClass)) {
            if (settings.disabled === false) {
              $this.toggleEvent();
            };
          }
        });

      } else if(settings.event === 'hover') {
        buiToggleButton.on('mouseover focus', function(e) {
          this.nodeName === 'A' ? e.preventDefault() : null;
          if (!$(this).hasClass(settings.disabledClass)) {
            if (settings.disabled === false) {
              $this.toggleEvent();
            };
          }
        });

        buiToggleButton.on('mouseleave', function(e) {
          this.nodeName === 'A' ? e.preventDefault() : null;
          if (!$(this).hasClass(settings.disabledClass)) {
            if (settings.disabled === false) {
              $this.toggleEvent();
            };
          }
        });
      };

      $this.toggleEvent = function(param) {
        if(param === 'active') {
          buiToggleDefault.activated();
        } else if(param === 'inactive') {
          buiToggleDefault.inactivated();
        } else {
          buiToggleActive === true ? buiToggleDefault.inactivated() : buiToggleDefault.activated();
          settings.clickout === true ? buiToggleClickout() : null;
        };
        settings.eventCallBack.call($this, buiToggleActive);
      };

      /**
       * Default
       */
      var buiToggleDefault = {
          activated: function() {
            buiToggleActivation();
            buiToggleButton.addClass(settings.activeClass);
            buiToggleTarget.addClass(settings.activeClass);
            
            settings.focusin === true ? buiToggleFocusin.activated() : null;
            settings.reactTarget != null ? buiToggleReact.activated() : null;
            
            settings.activeCallBack.call($this);
          },
          inactivated: function() {
            buiToggleActivation();
            buiToggleButton.removeClass(settings.activeClass);
            buiToggleTarget.removeClass(settings.activeClass);
            
            settings.focusin === true ? buiToggleFocusin.inactivated() : null;
            settings.reactTarget != null ? buiToggleReact.inactivated() : null;
            
            settings.inactiveCallBack.call($this);
          }
      };
      
      /**
       * focusin
       */
      var buiToggleFocusin = {
          activated: function() {
            setTimeout(function() {
                buiToggleTarget.attr('tabindex', '0').focus();
            }, 100);
            
          },
          inactivated: function() {
            buiToggleButton.focus();
            buiToggleTarget.removeAttr('tabindex');
          }
      };
      
      /**
       * clickout
       */
      var buiToggleClickout = function() {
        var clickoutTarget = settings.clickoutTarget != null ? buiToggleTarget.find(settings.clickoutTarget) : buiToggleTarget;
        $(document).mouseup(function(e) {
          if(buiToggleActive === true) {
            $(e.target).closest(clickoutTarget).length === 0 ? buiToggleDefault.inactivated() : null;
          };
        });
      }
      
      /**
       * react
       */
      var buiToggleReact = {
          activated : function() {
            $(settings.reactTarget).addClass(settings.reactActiveClass);
          },
          inactivated : function() {
            $(settings.reactTarget).removeClass(settings.reactActiveClass);
          }
      };
    });
    return this;
  };


  /**
   * buiToggle
   */
  $.fn.buiForm = function(options){
    var defaults = {
          elem: '.elem',
          outlineClass: 'outline',
          noteClass: 'note',
          noteText: '선택된 파일이 없습니다.',
          clearClass: 'delete',
          clearText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>삭제</title><path d="M21.914,3.32l-8.593,8.668L22,20.584l-1.32,1.332l-8.675-8.598L3.398,22l-1.32-1.318L10.676,12L2,3.402l1.318-1.32l8.674,8.59L20.58,2L21.914,3.32z"></path></svg>',
    };
    
    /**
     * inside the plugin
     */
    return this.each(function() {
      if (this.length === 0) {
        return this;
      };
      
      var settings = $.extend({}, defaults, options);
      var $this = this;
      var formFileItem = $(this);
      var formFileElem = formFileItem.find(settings.elem);
      var formFileOutline = $('<span class="' + settings.outlineClass +'"></span>');
      var formFileNote = $('<span class="' + settings.noteClass +'"></span>');
      var formFileClear = $('<button type="button" class="' + settings.clearClass +'">' + settings.clearText + '</button>');

      formFileElem.after(formFileClear);
      formFileElem.after(formFileOutline);
      formFileElem.after(formFileNote);


      var fileSelectedTrue = function() {
        formFileItem.addClass('selected');
        formFileNote.text(formFileElem.val().replace(/c:\\fakepath\\/i,''));
      };

      var fileSelectedFalse = function() {
        formFileItem.removeClass('selected');
        formFileElem.val('');
        formFileNote.text(settings.noteText);
      };

      formFileElem.val().length > 0 ? fileSelectedTrue() : fileSelectedFalse();
      formFileElem.on('change', function() {
        formFileElem.val().length > 0 ? fileSelectedTrue() : fileSelectedFalse();
      });

      formFileClear.on('click', function() {
        setTimeout(function() {
          fileSelectedFalse();
        }, 10);
      });
    });
    return this;
  };

  /**
   * buiNavi
   */
  $.fn.buiNavi = function(options){
    var defaults  = {
        list: 'ul',
        item: 'li',
        name: 'a',
        
        rememberCurrent: true,
        responsive: 0,
        active: false,
        currentClass: 'current',
        activeClass: 'active',
        
        accordion: false,
        
        /* react target */
        reactTarget: 'body',
        reactClass: null,
        reactActiveClass: 'active',
        
        button: false,
        buttonClass: 'fold',
        buttonTextActive: '닫기',
        buttonTextInactive: '열기',
        
        activeCallBack: function() {return true;},
        inactiveCallBack: function() {return true;}
    };
    
    return this.each(function() {
      var settings = $.extend({}, defaults, options);
      var navigation = this;
      var $tree = $(this);
      var $item = $(this).find(settings.item);
      var $name = $(this).find(settings.name);
      var $curr = $(this).find(settings.item + '.' + settings.currentClass);

      $item.each(function(index) {
        if (settings.button === true) {
          var $fold = $('<button type="button" class="' + settings.buttonClass +'"></button>');
          if($item.eq(index).find(settings.list).length > 0) {
            $name.eq(index).before($fold);
          };
          if($item.eq(index).hasClass(settings.activeClass) === true) {
            alert('active')
            $item.eq(index).find('button').html(settings.buttonTextActive).removeClass(settings.activeClass);
          } else {
            $item.eq(index).find('button').html(settings.buttonTextInactive).addClass(settings.activeClass);
          };

          /**
           * fold event
           */
          $fold.on({
            click: function() {
              if ($item.eq(index).hasClass(settings.activeClass) === true) {
                $item.eq(index).removeClass(settings.activeClass);
                $item.eq(index).children('button').html(settings.buttonTextInactive).removeClass(settings.activeClass);
                $(settings.reactTarget).removeClass(settings.reactActiveClass);
              } else {
                $item.eq(index).addClass(settings.activeClass).siblings(settings.item).removeClass(settings.activeClass).children('button').html(settings.buttonTextInactive).removeClass(settings.activeClass);;
                $item.eq(index).children('button').html(settings.buttonTextActive).addClass(settings.activeClass);
                $(settings.reactTarget).addClass(settings.reactActiveClass);
              }
            }
          });
        };

        /**
         * name event
         */
        $name.eq(index).on({
          focusin: function() {
            if (window.outerWidth > settings.responsive) {
              $item.eq(index).addClass(settings.activeClass).siblings(settings.item).removeClass(settings.activeClass).removeClass(settings.currentClass);
              $item.eq(index).children('button').html(settings.buttonTextActive).addClass(settings.activeClass);
              $(settings.reactTarget).addClass(settings.reactActiveClass);
              settings.activeCallBack.call(navigation, $item, index);
            };
          },
          
          mouseover: function() {
            if (window.outerWidth > settings.responsive) {
              $item.eq(index).addClass(settings.activeClass).siblings(settings.item).removeClass(settings.activeClass).removeClass(settings.currentClass);
              $item.eq(index).children('button').html(settings.buttonTextActive).addClass(settings.activeClass);
              $(settings.reactTarget).addClass(settings.reactActiveClass);
              settings.activeCallBack.call(navigation, $item, index);
            };
          },
        });

        if (settings.rememberCurrent === true) {
          $tree.find('a, button, input').each(function () {
            $(this).focusout(function() {
              setTimeout(function(){
                if($tree.find(':focus').length === 0) {
                  $item.removeClass(settings.activeClass);
                  $item.children('button').html(settings.buttonTextInactive).removeClass(settings.activeClass);
                  $curr.addClass(settings.currentClass);
                  $(settings.reactTarget).removeClass(settings.reactActiveClass);
                  settings.inactiveCallBack.call(navigation, $item, index);
                };
              }, 100);
            });
          });
          $tree.on({
            mouseleave: function() {
              if (window.outerWidth > settings.responsive) {
                $item.removeClass(settings.activeClass);
                $item.children('button').html(settings.buttonTextInactive).removeClass(settings.activeClass);
                $curr.addClass(settings.currentClass);
                $(settings.reactTarget).removeClass(settings.reactActiveClass);
              };
            }
          });
        };
      });
    });
    return this;
  };

  /**
   * buiTab
   */
  $.fn.buiTab = function(options){
    var defaults = {
        /* general */
        mode: 'normal',
        event: 'click',
        currentClass: 'current',
        activeClass: 'active',
        
        item: '.tab-item',
        name: '.tab-name',
        data: '.tab-data',
        
        initial: null,
        
        /* target */
        target: null,
        targetClass: 'bui-tab-target',
        targetActiveClass: 'active',
        
        /* callback */
        onloadCallBack: function() {return true;},
        eventCallBack: function() {return true;},
        activeCallBack: function() {return true;},
        inactiveCallBack: function() {return true;}
    };
    
    /* inside the plugin */
    return this.each(function() {
      if (this.length === 0) {
        return this;
      };
      
      var settings = $.extend({}, defaults, options);
      var tabs = [];
      var tabsData = function(item, name, body) {
        this.item = item;
        this.name = name;
        this.body = body;
      };
      

      $(this).find(settings.item).each(function() {
        var item = $(this);
        var name = $(this).find(settings.name);
        var body = $(this).find(settings.name).attr('href');
        tabs.push(new tabsData(item, name, body));
      });
      
      $(tabs).each(function(i) {

        $(tabs[i].body).addClass(settings.targetClass);
        $(tabs[i].name).on({
          click: function(e) {
            this.nodeName === 'A' ? e.preventDefault() : null;
            $(tabs).each(function(index) {
              if(i === index) {
                $(tabs[index].item).addClass(settings.currentClass);
                $(tabs[index].body).addClass(settings.targetActiveClass);
              } else {
                $(tabs[index].item).removeClass(settings.currentClass);
                $(tabs[index].body).removeClass(settings.targetActiveClass);
              }
            });
            settings.eventCallBack.call();
          }
        });
        
        if(settings.initial != null) {
          $(tabs[settings.initial].item).addClass(settings.currentClass);
          $(tabs[settings.initial].body).addClass(settings.targetActiveClass);
        };
      });
    });
    return this;
  };
})(jQuery);

/**
 * 모바일 여부 체크
 */
// function is_mobile() {
// 	var returnStr = "";
// 	var ua = window.navigator.userAgent;
// 	if(/lgtelecom/i.test(ua) || /Android/i.test(ua) || /blackberry/i.test(ua) || /iPhone/i.test(ua) || /ipad/i.test(ua) || /samsung/i.test(ua) || /symbian/i.test(ua) || /sony/i.test(ua) || /SCH-/i.test(ua) || /SPH-/i.test(ua)){
// 		returnStr = "mobile";
// 	} else {
// 		returnStr = "pc";
// 	}
// 	return returnStr;
// }
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

jQuery(function() {
  //20201223
  if ($('.gnb').children().hasClass('gnb-wrap')){
    $('.direct-gnb').buiToggle({
      reactTarget: 'body',
      reactActiveClass: 'active-local-gnb',
      clickout: true,
      close: true,
      closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>닫기</title><path d="M349.571 24L351 25.429 342.428 34 351 42.571 349.571 44 341 35.428 332.429 44 331 42.571 339.572 34 331 25.429 332.429 24 341 32.571 349.571 24z" transform="translate(-331 -24)"/></svg>',
    });
  } else {
    $('.direct-gnb').buiToggle({
      reactTarget: 'body',
      reactActiveClass: 'active-gnb',
      clickout: true,
      focusin: true,
      focusout: true,
    });
  };

  $('.account-area .user-name').buiToggle({
    reactTarget: 'body',
    reactActiveClass: 'active-account-area',
    clickout: true,
    clickoutTarget: '.account-item',
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M23.896,1.586l-10.309,10.4L24,22.301l-1.586,1.6L12.006,13.582L1.679,24l-1.584-1.583l10.317-10.416L0,1.683L1.582,0.1L11.99,10.407L22.296,0.001L23.896,1.586z"/></svg>',
  });
  $('.account-area .user-menu').buiToggle({
    reactTarget: 'body',
    reactActiveClass: 'active-account-area',
    clickout: true,
    clickoutTarget: '.account-item',
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M23.896,1.586l-10.309,10.4L24,22.301l-1.586,1.6L12.006,13.582L1.679,24l-1.584-1.583l10.317-10.416L0,1.683L1.582,0.1L11.99,10.407L22.296,0.001L23.896,1.586z"/></svg>',
  });
  
  $('.direct-account-area').buiToggle({
    reactTarget: 'body',
    reactActiveClass: 'active-account-area',
    clickout: true,
    clickoutTarget: '.account-item',
    // focusin: true,
    // focusout: true,
    close: true,
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M21.914,3.32l-8.593,8.668L22,20.584l-1.32,1.332l-8.675-8.598L3.398,22l-1.32-1.318L10.676,12L2,3.402l1.318-1.32l8.674,8.59L20.58,2L21.914,3.32z"/></svg>',
  });

  $('.direct-local-search').buiToggle({
    reactTarget: 'body',
    reactActiveClass: 'active-local-search',
    clickout: true,
    // focusin: true,
    // focusout: true,
    close: true,
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M21.914,3.32l-8.593,8.668L22,20.584l-1.32,1.332l-8.675-8.598L3.398,22l-1.32-1.318L10.676,12L2,3.402l1.318-1.32l8.674,8.59L20.58,2L21.914,3.32z"/></svg>',
  });

  //$('.page-head-v5 .gnb-list .gnb-item').eq(0).hide();
  var subCategory = ['for-nonmembers', 'for-client', 'for-expert', ]
  $('.gnb-list .gnb-item').each(function(i) {
    if ($(this).hasClass('current') === true) {
      $('#page').attr('class', subCategory[i]);
    };
  });

   //5.0 211101
   $('.page-head.page-head-v5 .gnb-list .gnb-item').each(function(){
    var _idx = $('.page-head.page-head-v5 .gnb-list .gnb-item.current').index();
    if (_idx == 0){
      $('#page').removeClass('for-expert');
      $('#page').removeClass('for-nonmembers');
      $('#page').addClass('for-client');
    }else if (_idx == 1){
      $('#page').removeClass('for-client');
      $('#page').removeClass('for-nonmembers');
      $('#page').addClass('for-expert');
    }else {
      $('#page').removeClass('for-client');
      $('#page').removeClass('for-expert');
      $('#page').addClass('for-nonmembers');
    }
  });

  
  /* 추천 비추천 버튼*/
  // $('.btn-recommend').on('click',function(){
  //   $(this).toggleClass('active');
  // });
  // $('.btn-no-recommend').on('click',function(){
  //   $(this).toggleClass('active');
  // });

  $('.account-area[class*=login-] .account-item').each(function(i) {
    var buttonArea = $(this).find('.button-area');
    var accountHead = $(this).find('.account-head');
    var accountContent = $(this).find('.account-content h4');

    ($(window).outerWidth() > 991) ? buttonArea.insertAfter(accountContent) : buttonArea.appendTo(accountHead);
    $(window).on('resize', function() {
      ($(window).outerWidth() > 991) ? buttonArea.insertAfter(accountContent) : buttonArea.appendTo(accountHead);
    });
  });

  function accountWCheck(){
    accountWidth = $('#accountArea').width() + 4;
    $('#accountArea').css('width', accountWidth);
  }
  accountWCheck();
  $(window).on('resize', function() {
    $('#accountArea').css('width', '');
    accountWCheck();
  });

  $('.direct-contents').buiToggle();

  $('.direct-shared').buiToggle({
    close: true,
    disabledClass: 'disabled',
    closeButton: '<button type="button"></button>',
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',
    closeButtonPosition: '.popup-cols',
    //focusin: true,
    reactTarget: 'body',
    reactActiveClass: 'active-shared',
  });


  $('.direct-shared-email').buiToggle({
    close: true,
    closeButton: '<button type="button"></button>',
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>닫기</title><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',
    closeButtonPosition: '.popup-cols',
    focusin: true,
    reactTarget: 'body',
    reactActiveClass: 'active-shared-email',
  });

  $('.btn-notice-popup').buiToggle({
    reactTarget: 'body',
    reactActiveClass: 'active-notice-popup',
    close: true,
    closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><title>닫기</title><path d="M353.306 21l.694.694L343.694 32 354 42.306l-.694.694L343 32.694 332.694 43l-.694-.694L342.305 32 332 21.694l.694-.694L343 31.305 353.306 21z" transform="translate(-332 -21)"/></svg>',
  });
  if ($('#Notice-popup .close').length == 2) {
    $('#Notice-popup .close').eq(1).remove();
  }

  var layoutHeader = {
    trigger: "#page",
    target: document.getElementsByTagName("body")[0],
    activeClass: "scroll-start",
  }

  var layoutHeaderController = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0
    }
  });
  
  /*
   * .addIndicators({name: "hidden-local-head"});
   */
  var layoutHeaderScene1 = new ScrollMagic.Scene({triggerElement: "#content"}).setClassToggle(layoutHeader.target, 'hidden-local-head').addTo(layoutHeaderController);
  var layoutHeaderScene2 = new ScrollMagic.Scene({triggerElement: "#content"}).setClassToggle(layoutHeader.target, 'active-local-navi').addTo(layoutHeaderController);

  $('.form.file').buiForm();

  // app 딥링크 20200506
  $('.app-install-banner .btn-banner-close').on('click',function(){
    $('.page-body').removeClass('app-install-wrap');
  });

  // 상단띠배너 220516
  $('.top-banner-section .btn-close').on('click',function(){
    $('body').removeClass('top-banner-wrap');
  });
  
  $('.on-off-radio input:radio[name="onoffCheck"], .on-off-radio input:radio[name="onoffCheck2"]').change(
    function () {
        if ($(this).val() == 'on') {
          $('.online-text').removeClass('off');
          $('.user-face .avatar').removeClass('off');
          $('.online-text').addClass('on');
          $('.user-face .avatar').addClass('on');
          $('#radioOn').prop('checked', true);
          $('#radioOn2').prop('checked', true);
          $('#radioOff').prop('checked', false);
          $('#radioOff2').prop('checked', false);
        } else if ($(this).val() == 'off') {
          $('.online-text').removeClass('on');
          $('.user-face .avatar').removeClass('on');
          $('.online-text').addClass('off');
          $('.user-face .avatar').addClass('off');
          $('#radioOn').prop('checked', false);
          $('#radioOn2').prop('checked', false);
          $('#radioOff').prop('checked', true);
          $('#radioOff2').prop('checked', true);
        }
    }
);

  //210311
  if(isMobile()){
    if($('.button-panel').hasClass('floating')){
      $(".page-foot").css('margin-bottom' , '60px');
    }
    if($('.btn-fixed-bottom').hasClass('visible-xs')){
      $(".page-foot").css('margin-bottom' , '60px');
    }
  }
  
  var lnbActive = $('.page-body.page-body-v5 .local-navi .lnb-list .lnb-item');
  if (lnbActive.hasClass('active')) {
    $('.page-body.page-body-v5').addClass('open-local-navi');
  }else{
    $('.page-body.page-body-v5').removeClass('open-local-navi');
  }
  if (!lnbActive.hasClass('active')) {
    $('.page-body-v5 .local-navi').hide();
  }
  
  if (isMobile()) {
    $('.page-body.page-body-v5 .local-head .local-head-item .local-control .local-control-item .btn-notice-popup').on('click', function(){
      $('body,html').animate({scrollTop: 50}, 200);
    });
  }
  

  function mobileChk(){
    var windowWidth = $(window).width();
    if(windowWidth < 992) {
      if (lnbActive.hasClass('active')) {
        $('.page-body.page-body-v5').addClass('open-local-navi');
      }else{
        $('.page-body.page-body-v5').removeClass('open-local-navi');
      }
      if($('.button-panel').hasClass('floating')){
        $(".page-foot").css('margin-bottom' , '60px');
      }
      if($('.button-panel.floating').hasClass('hidden-xs')){
        $(".page-foot").css('margin-bottom' , '0');
      }
      if($('.btn-fixed-bottom').hasClass('visible-xs')){
        $(".page-foot").css('margin-bottom' , '60px');
      }
    }else {
      if($('.button-panel').hasClass('floating')){
        $(".page-foot").css('margin-bottom' , '');
      }
      if($('.btn-fixed-bottom').hasClass('visible-xs')){
        $(".page-foot").css('margin-bottom' , '');
      }
    }
  }
  mobileChk();

  $(window).on('resize', function() {
		mobileChk();
  });
});

