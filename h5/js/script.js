if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    //add a new meta node of viewport in head node
    head = document.getElementsByTagName('head');
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'target-densitydpi=device-dpi, width=' + 1080 + 'px, user-scalable=no';
    head.length > 0 && head[head.length - 1].appendChild(viewport);

}
$(function() {

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);  
        //	    window.location.href ="index.html";
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent); 
        //	    window.location.href ="index.html";
    } else {
        window.location.href = "../index.html";
    };
})