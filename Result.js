/* 
 * Result.js
 * Version 1.0 12/11/2016
 * @author Yongsheng Huang
 * The JavaScript for page of Result
 */

//invoke the recPara function when the page load
document.addEventListener('load', recPara(), false);

//to abtain parameters andshow the result
window.A="";  //global variant
window.B="";  //global variant
function recPara() {
	var urlinfo=window.location.href; 
	var len=urlinfo.length;
	var offset=urlinfo.indexOf("?");
	var newsinfo=urlinfo.substr(offset,len);
	var date=newsinfo.substr(6,2);
	var month=newsinfo.substr(15,2);
	var year=newsinfo.substr(23,4);
	var signs = new Array("Mouse","Cow","Tiger","Rabbit","Dragon","Snake","Horse","Sheep","Monkey","Chicket","Dog","Pig");
	var heavenlyStems = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
	var wuxing = new Array("wood","fire","earth","metal","water");
	var animal=(year-1900)%12;
	var attribute;
	var C = year.substr(0,2);
	var D=date;	
	var Y;
	var M;
	if(month==01 || month==02){
		Y=year.substr(2,2)-1;
		M=month+12;
	} else {
		Y=year.substr(2,2);
		M=month;
	}
	var G = heavenlyStems[(4*C+parseInt(C/4)+5*Y+parseInt(Y/4)+parseInt(3*(M+1)/5)+D-3)%10];
	if(G=="甲"||G=="乙"){
		attribute=wuxing[0];
	}
	if(G=="丙"||G=="丁"){
		attribute=wuxing[1];
	}
	if(G=="戊"||G=="己"){
		attribute=wuxing[2];
	}
	if(G=="庚"||G=="辛"){
		attribute=wuxing[3];
	}
	if(G=="壬"||G=="癸"){
		attribute=wuxing[4];
	}
	A=animal;   
	B=attribute;  
}

function showRel1() {
	if(A!=""){
	document.getElementById("img_zodiac").src=A+".jpg";
	A="";
	}
}

function showRe2() {
	if(B!="") {
		document.getElementById("img_wuxing").src=B+".jpg";
		B="";
	}
}