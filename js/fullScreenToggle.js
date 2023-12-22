function fullScreenToggle(toggleId, previewId) {
    if (document.fullscreenEnabled) {
        var togglePreviewFS = document.getElementById(toggleId);
        togglePreviewFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#" + previewId).requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#' + previewId).removeClass('pt-5');
                $(togglePreviewFS).appendTo('#' + previewId);
            } else {
                togglePreviewFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewFS).appendTo('#' + previewId);
                $(togglePreviewFS).addClass('d-block mx-auto mt-3')
                $('#' + previewId).addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
window.addEventListener('load', function() {
fullScreenToggle("togglePreviewImgFS", "previewImgFS");
fullScreenToggle("togglePreviewVidFS", "previewVidFS");
fullScreenToggle("togglePreviewBtnFS", "previewBtnFS");
fullScreenToggle("togglePreviewAlertFS", "previewAlertFS");
fullScreenToggle("togglePreviewTooltipFS", "previewTooltipFS");
fullScreenToggle("togglePreviewAccFS", "previewAccFS");
fullScreenToggle("togglePreviewTableFS", "previewTableFS");
fullScreenToggle("togglePreviewReadmoreFS", "previewReadmoreFS");
})