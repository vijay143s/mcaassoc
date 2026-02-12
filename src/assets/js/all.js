/*header start*/
/*$(document).ready(function(){
    $("#header1").hover(function(){
       $(".top-section").toggleClass("add_here");
	   $(".search-section").toggleClass("search_here");
    });
});


$(document).ready(function(){
    $("#header2").hover(function(){
       $(".top-section").toggleClass("add_here");
	   $(".search-section").toggleClass("search_here");
    });
});*/



$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
	}
})

/*header end*/

$(document).ready(function(){
	$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');

       
    if (url !== '#') {
    
      window.location.href = url;
    }

  }
});
	
	/*header start*/
	/*$(".wrapper.dashboard").hover(function(){$(".top-section").slideUp(750);});
 $("#header1").hover(function(){$(".top-section").slideDown(750);}); */
 /*header end*/
  /*choosen start*/
 $(function() {
	  $('.chosen-select').chosen();
	  $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
	});
$(function() {
	$(".dateVisible").hide();
	$(".timeVisible").hide();
  	$("#halfday_check").on("click",function() {
    $(".dateVisible").toggle(this.checked);
	$(".timeVisible").toggle(this.checked);
  });
});

/* chosen-select */
$(function() {
	  $('.chosen-select').chosen();
	  $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
	});
/*choosen end*/
 
  $('[data-toggle="tooltip"]').tooltip();
});

/*function dropdownMenu1OptionsFun(){
	if($('#dropdownMenu1Options').css('display') == 'none'){
		$('#dropdownMenu1Options').css('display','block');
	}else{
		$('#dropdownMenu1Options').css('display','none');
	}
}

function elementDisplayHide(elementId){
	if($('#'+elementId).length > 0){
		if($('#'+elementId).css('display') == 'none'){
			$('#'+elementId).css('display','block');
		}else{
			$('#'+elementId).css('display','none');
		}
	}
}
*/

<!-- jQuery CDN - Slim version (=without AJAX) --> 
		$(document).ready(function () {
			
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			if ($('#sidebar').hasClass('active')) {
			    $("#sidebarCollapse > img").attr('src','images/right-arrow.svg');
				setTimeout(function(){ $('#profileImageId').attr('style','left:220px !important'); }, 300);
				$('#profileImageId1').attr('style','display:'); 
				//display empty
				//console.log(1);
			} else {
			  $("#sidebarCollapse > img").attr('src','images/left-arrow.svg');
				setTimeout(function(){ $('#profileImageId').attr('style','left:188px !important'); }, 300);

							//display none
				//console.log(2);
			}
		});
		$('.grid-stack').gridstack();
		$('#sidebarCollapse').click(); /* sub side nav bar default close toggle*/
	//	$('#sidebar').toggleClass('active');
//		$("#sidebarCollapse > i").attr('class','fa fa-chevron-right');
	}); 
	
	function reArrangeGrid(gridDivId) {
  var options = {
        column: 12,
        float: false,
        acceptWidgets: function(i, el) { return true; } // function example, else can be simple: true | false | '.someClass' value
      };
	$('#'+gridDivId).gridstack(options);   
	var grid = $('#'+gridDivId).data('gridstack');
	grid.compact();
}
<!-- jQuery CDN - Slim version (=without AJAX) --> 

function showShiftPopup(buttonName, timesheetDate,shiftId){
	$.ajax({
		url:'newAction_validateAndGetShiftDetails.action?buttonName='+buttonName+'&timesheetDate='+timesheetDate+'&shiftId='+shiftId,
		cache: false,
		async:false,
		success : function (result){
			if(result != null){
				if(result.includes("error@@")){
					var resultArr = result.split("@@");
					bAlert(resultArr[1]);
					if(resultArr[1]!= 'You are attempting to Clock In/Clock Out from an unauthorized IP Address. Please contact your HR Admin'){
					try {
						$(".btn").click(
							function() {
								try{
									if (window.location.href.indexOf('myhrDashboard.action') > -1) {
										window.location.reload(true);	
									} else if (window.location.href.indexOf('myhrDashboardDetails_getDetails.action') > -1) {
										window.location.reload(true);	
									}
								}catch(e){}
									
							}
						);
						$(".bootbox-close-button").click(
							function() {
								if (window.location.href.indexOf('myhrDashboard.action') > -1) {
									window.location.reload(true);	
								} else if (window.location.href.indexOf('myhrDashboardDetails_getDetails.action') > -1) {
									window.location.reload(true);	
								}		
							}
						);
					} catch (e) {
						console.log(e);
					}
				  }
				}else{
				$("#showShiftDetailsForClockInAndOut").html(result);
				$("#showShiftDetailsForClockInAndOut").modal();
				}
			}
		}
	});
	
}
function lateSimpleClockIn(){
	var clockInOutType=$('#clockInoutTypeOption').val();
	var shiftTypeId=$('#shiftTypeId').val();
	
	var actionURL="newAction_checkReasonForLateClockIn.action?shiftTypeId="+shiftTypeId;
	$.ajax( {
        url : actionURL,
        type: "POST",
        cache : false,
        async : false,
        success : function(result) {
        	var resultArr=result.split("@@");
        	var lateClockInStatus = resultArr[0];
        	var isLateClockIn = resultArr[1];
        	if(lateClockInStatus == "true" && isLateClockIn == 'true'){
        		bConfirm("You seem to be clocking in after your scheduled shift time. You will need to provide a reason before clocking in, do you want to continue?",
	    				 "Confirmation",function(r){
	    			         if(r){
	    			        	 showReasonForLateClockIn();
	    			         }else{
	    			        	 $('#lateClockInReason').modal('hide');
	    			         }
        		});
        	}else{
        		simpleClockIn();
        	}	        		
        }
        });
}
function simpleClockIn(){
	var clockInOutType=$('#clockInoutTypeOption').val();
	var shiftTypeId=$('#shiftTypeId').val();
	var url="newAction_checkReasonForSecondClockIn.action?shiftTypeId="+shiftTypeId;
	$.ajax( {
        url : url,
        type: "POST",
        cache : false,
        async : false,
        success : function(result) {
        	var resultArr=result.split("@@");
        	var reasonForSecondClockIn=resultArr[0];
        	var repeatClockInStatus=resultArr[1];
        	if(reasonForSecondClockIn == "true" && repeatClockInStatus == 'true'){
        		bConfirm("You are already clocked out, you will need to provide a reason if you wish to clock in again.  Are you sure you want to continue?",
	    				 "Confirmation",function(r){
	    			         if(r){
      		                     showReasonForRepeatClockIn();
	    			         }else{
	    			        	 $('#repeatClockInReason').modal('hide');
	    			         }
       		});
        	}else{
        		checkPreviousDayClockOut('in');
        	}
        }
        });
}
$('[data-toggle="tooltip"]').tooltip({
	 placement:"top",
	 container:'body',
	 animated:'fade',
	 });

<!-- panel toggle script start -->



<!-- panel toggle script end -->

// DOM Ready
		$(function() {
		
			var $el, $ps, $up, totalHeight;
			
			$(".sidebar-box3 .button4").click(function() {
				$('.read-more4').hide();
				$('.read-more3').show();
				$(this).parent().parent().css({
						// Set height to prevent instant jumpdown when max height is removed
						"height": "",
						"max-height": 9999
					})
				
			}	
		)
		
				
			$(".sidebar-box3 .button3").click(function() {
			
				// IE 7 doesn't even get this far. I didn't feel like dicking with it.$.css("background-color", "");
						
				totalHeight = 0
			
				$el = $(this);
				$p  = $el.parent();
				$up = $p.parent();
				$ps = $up.find("p:not('.read-more3')");
				
				
				// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
				$ps.each(function() {
					totalHeight += $(this).outerHeight()+30;
					//alert(totalHeight);
					// FAIL totalHeight += $(this).css("margin-bottom");
				});
							
				$up
					.css({
						// Set height to prevent instant jumpdown when max height is removed
						"height": $up.height(),
						"max-height": 9999
						
					})
					.animate({
						"height": totalHeight
					});
				
				// fade out read-more
				$p.fadeOut();
				$('.read-more4').show();
				
				// prevent jump-down
				return false;
					
			});
		
		});
		
		







