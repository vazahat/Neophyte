
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#dentauraBttB').fadeIn(); 
        } else { 
            $('#dentauraBttB').fadeOut(); 
        } 
    }); 
    $('#dentauraBttB').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
});