var actidx = 0;
var enable = true;
var arr = [ "netcontent" , "_ptod_4070", "_ptod_4071", "_ptod_4072" ];

document.addEventListener('mousewheel', fn, {passive: false});
document.addEventListener('DOMMouseScroll', fn, {passive: false});

function fn(event) {
		event.preventDefault();
		if (enable) {
			enable = false;
			//get the delta to determine the mousewheel scrol UP and DOWN
			var delta = event.wheelDelta;

			if (delta < 0) {
					actidx = actidx + 1;
					next = $("#"+arr[actidx]);
					if (next.length) {
							$('body, html').animate({
									scrollTop: next.offset().top
							}, '1000', function(){
								enable = true;
								if ($(next).find(".hometxt").length>0) {
									$(next).closest(".pageblock_box").addClass("active");
								}			
							});
					} else {
						enable = true;						
					}
			} else {
					actidx = actidx - 1;
					prev = $("#"+arr[actidx]);
					if (prev.length) {
						$('body, html').animate({
								scrollTop: prev.offset().top
						}, '1000',function(){
								enable = true;
								if ($(prev).find(".hometxt").length>0) {
									$(prev).closest(".pageblock_box").addClass("active");
								}											
						});
					} else {
						enable = true;
					}
			}
		}
}