var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;


function abrir() {
    showSidebar = !showSidebar
    if (showSidebar == true) {
        navigationHeader.style.marginLeft = '0vw'
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';

    } else {
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = '';
        content.style.filter = '';

    }
}
function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            abrir();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            abrir();
        }
    });
