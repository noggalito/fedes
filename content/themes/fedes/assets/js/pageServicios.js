$(".serviciosConsultoria").click(function(){
    if($("#textConsultoria").is(":visible")){
        $("#textConsultoria").hide();
    }else if($("#textConsultoria").is(":hidden")){
        $("#textConsultoria").show();
        $("#textAsesoramiento").hide();
        $("#textTrabajo").hide();
    }
});

$(".serviciosAsesoramiento").click(function(){
    if($("#textAsesoramiento").is(":visible")){
        $("#textAsesoramiento").hide();
    }else if($("#textAsesoramiento").is(":hidden")){
        $("#textAsesoramiento").show();
        $("#textConsultoria").hide();
        $("#textTrabajo").hide();
    }
});

$(".serviciosTrabajo").click(function(){
    if($("#textTrabajo").is(":visible")){
        $("#textTrabajo").hide();
    }else if($("#textTrabajo").is(":hidden")){
        $("#textTrabajo").show();
        $("#textAsesoramiento").hide();
        $("#textConsultoria").hide();
    }
});
