
function strikeTask(tCount) {
	document.getElementById("tn_" + tCount).style.setProperty("text-decoration", "line-through");
//	document.getElementById("#tn_" + tCount).style.setProperty("text-decoration", "line-through");
};

$(document).ready(function () {

	var counter= 0


$("#addtask").click(function(){
	var dropdown= $("#dropdown").val()
	var row_values= "<p><span id='tn_" + counter +"'>" + $("#add_task").val() + " " + $("#due_date").val() + "</span><input type=\"checkbox\" onclick=\"strikeTask(" + counter + ")\"></p>"

	if (dropdown==="Work"){
		$("#work").append(row_values)
	}
	else if (dropdown==="Personal"){
		$("#personal").append(row_values)
	}
	else {
		$("#misc").append(row_values)
	}
	counter++;
});



var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

$("#addtask").click(function(){
	$("#add_task").val(" ");
	$("#due_date").val(" ");
})



});

