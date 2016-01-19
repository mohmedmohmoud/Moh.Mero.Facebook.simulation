function login(){
	var valid = true;
	if(document.form.mail.value=="mohmed" && document.form.password.value=="maram"){
		window.location.assign("E:\\My projects\\Moh&Mero.Facebook.simulation\\html_files\\homePage.html");
	}else{
		alert("error");
	}

}


function regs_login(){
	var valid = true;
	var Fname = document.form2.fname.value;
	var Lname = document.form2.lname.value;

	var error_fname = document.getElementById("f_name");
	var error_lname = document.getElementById("l_name");
	if(Fname=="" ||Lname==""){
		error_fname.style.border = "2px solid red";
		error_lname.style.border = "2px solid red";
		return false;
	}
	return valid;
}