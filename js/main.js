// $().ready(function(){
//     alert("tsup")
// })


$().ready(function(){

    $("#btnP1Roll").click(function(event){
        event.preventDefault();
        $("#btnP2Roll").hide(200);
        $("#btnP2Hold").hide(200);
        $("#btnP1Hold").show(200);
    })

    $("#btnP1Hold").click(function(event){
        event.preventDefault();
        $("#btnP1Roll").hide(200);
        $("#btnP2Roll").show(200);
        $("#btnP1Hold").hide(200);
    })

    $("#btnP2Roll").click(function(event){
        event.preventDefault();
        $("#btnP1Roll").hide(200);
        $("#btnP1Hold").hide(200);
        $("#btnP2Hold").show(200);
    })

    $("#btnP2Hold").click(function(event){
        event.preventDefault();
        $("#btnP2Roll").hide(200);
        $("#btnP1Roll").show(200);
        $("#btnP2Hold").hide(200);
    })
})