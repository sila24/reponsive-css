
 var nav = document.getElementById('nav-bar');

    function nav-bar () {       

        if ( nav.style.display === "" )
        nav.style.display = "block";

        else
        nav.style.display = "";
    }


    function windowResizeHandler () {
        if ( screen.width > 500 )
        nav.style.display = "";
    }

    window.addEventListener("resize", windowResizeHandler);

