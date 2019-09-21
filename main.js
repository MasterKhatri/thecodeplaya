function updateOutput() {
                
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    
}

$(".btn").hover(function() {
    
    $(this).addClass("highlighted-btn");
    
}, function() {
    
    $(this).removeClass("highlighted-btn");
    
});

$(".btn").click(function() {
    
    $(this).toggleClass("default");
    
    $(this).removeClass("highlighted-btn");
    
    var panelId = $(this).attr("id") + "Panel";
    
    $("#" + panelId).toggleClass("hidden");
    
    var numberOfActivePanels = 4 - $('.hidden').length;
    
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
    
})

$(".panel").height($(window).height() - $("nav").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {

    updateOutput();
    
    
});