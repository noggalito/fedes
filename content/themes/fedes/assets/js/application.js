!function(){"use strict";console.log("hello world")}();
$(".serviciosConsultoria").click(function(){$("#textConsultoria").is(":visible")?$("#textConsultoria").hide():$("#textConsultoria").is(":hidden")&&($("#textConsultoria").show(),$("#textAsesoramiento").hide(),$("#textTrabajo").hide())}),$(".serviciosAsesoramiento").click(function(){$("#textAsesoramiento").is(":visible")?$("#textAsesoramiento").hide():$("#textAsesoramiento").is(":hidden")&&($("#textAsesoramiento").show(),$("#textConsultoria").hide(),$("#textTrabajo").hide())}),$(".serviciosTrabajo").click(function(){$("#textTrabajo").is(":visible")?$("#textTrabajo").hide():$("#textTrabajo").is(":hidden")&&($("#textTrabajo").show(),$("#textAsesoramiento").hide(),$("#textConsultoria").hide())});