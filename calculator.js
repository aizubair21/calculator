

function insertNumber(number){
    //alert(number);
    var inResult = $("#result").val()
    $("#result").val(inResult + number)
}

$("#clear").click(function(){
    $("#result").val(" ")
})


function deletLast(){
   //var presentResult = $("#result");
   if($("#result") != ""){
       $("#result").val( $("#result").val().slice(0, -1));
   }
}

$("#equalAll").click(function(){
    var result = eval($("#result").val());
    $("#result").val(result)
});