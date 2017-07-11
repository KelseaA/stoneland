$(function(){

	autoPlayYouTubeModal();

	//Auto play Youtube videos
	function autoPlayYouTubeModal() {
	    var trigger = $("body").find('[data-toggle="modal"]');
	    trigger.on("click", function () {
	        var modal = $(this).data("target");
	        var videoSRC = $(this).attr("data-theVideo");
	        var videoAutoPlaySRC = videoSRC + "&amp;autoplay=1";
	        $(modal + ' iframe').attr('src', videoAutoPlaySRC);
	        $(modal + ' button.close').on("click", function () {
	            $(modal + ' iframe').attr('src', videoSRC);
	        });
	    });
	}
});