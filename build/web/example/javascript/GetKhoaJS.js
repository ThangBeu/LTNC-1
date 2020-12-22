document.getElementById("bodyID1").onload = function() {OnLoadBody()};

function OnLoadBody(){
    var radionButtonValue = document.getElementById("radioButtonValue").value;
    var item = ["sxmakhoa", "sxtenkhoa"];
    item.forEach(myFunction);
    
    function myFunction(item, index){
        var it = document.getElementById(item).value;
        if(it == radionButtonValue){
            document.getElementById(item).checked = true;
        }
    }
    
    //convert true -> nam va nguoc lai
    var cell = document.querySelectorAll("[id = 'sum']");
    
    
}

