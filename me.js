
    



        //ask the user the words he wanna change

        function bedel(str){
            var str=prompt("Gali hadalkad Rabto inad Bedesho");
            var newStr = str.replace(/a/g,"afa");
    
    document.getElementById("T").innerHTML=newStr;
        }


