    var a = 0;
    var b = 0;

    var number = document.getElementById("tasbeh")

    function tasbex(){
        a++;
        number.innerHTML = a;
        if (a == 33){
        a = 0;
        b++;
        }
    
    if(b==0){
        document.getElementById("sa").style.display = "block";
        document.getElementById("aa").style.display = "none";
    }if (b == 1){
        document.getElementById("sa").style.display = "none";
        document.getElementById("al").style.display = "block";
    }if (b == 2){
        document.getElementById("al").style.display = "none";
        document.getElementById("aa").style.display = "block";
    }if(b == 3){
        b = 0;
    }

}
