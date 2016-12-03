/* 
 * Chinese_Zodiac_and_Wuxing_Calculator.js
 * Version 1.0 12/11/2016
 * @author Yongsheng Huang
 * The JavaScript for page of Chinese_Zodiac_and_Wuxing_Calculator 
*/

/* to validate the form */
function validateForm() {
	var errMsg = "";    // to collect error message
	var year = document.forms["form"]["year"].value;
	var year_pattern=/^\d{4}$/;
	
	// to check the form of year
	if (year.length == 0) {
		errMsg = errMsg + "Year can not be empty!\n";
	}
	
	if (!year_pattern.test(year)) {
		errMsg = errMsg + "The form of year is incorrect!\n";
	}
	
	if(year<1900) {
		errMsg = errMsg + "Year should larger than 1900!\n";
	}
	
	
	if(errMsg!=""){
		window.alert(errMsg);
		errMsg="";
		return false;
	}
	
	if (errMsg=="") {
	   tranPara();
	}
	
}

/* open and the page of result and transform parameters thtough URL*/
function tranPara(){
	var obj_date = document.getElementById("date");
	var obj_month = document.getElementById("month");
	var date = obj_date.options[obj_date.selectedIndex].text;
	var month = obj_month.options[obj_month.selectedIndex].value;
	var year = document.forms["form"]["year"].value;
	window.open("Result.html?date=" + date+"&month="+month+"&year="+year);
	}	
