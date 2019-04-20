function sticky(element){
    function check(){
        if (window.scrollY>50){
            document.getElementById(element).classList.add("fix-fix");
            document.getElementById(element).classList.remove("fix-start");
            console.log("teraz ma flotowac");
        }else {
            document.getElementById(element).classList.remove("fix-fix");
            document.getElementById(element).classList.add("fix-start");
            console.log('teraz ma przestać flotować');
        }
    }

    window.addEventListener('scroll',function(e){
        if (window.scrollY>50){
            document.getElementById(element).classList.add("fix-fix");
            document.getElementById(element).classList.remove("fix-start");
            console.log("teraz ma flotowac");
        }else {
            document.getElementById(element).classList.remove("fix-fix");
            document.getElementById(element).classList.add("fix-start");
            console.log('teraz ma przestać flotować');
        }

    })
    check();
}



sticky("contactform");
