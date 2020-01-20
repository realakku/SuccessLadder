if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("cutback1.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".cutback1_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#44aed7;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.cutback1_plain:link, a.cutback1_plain:visited{text-align:left;background-color:#44aed7;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:11pt;font-family:Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write("a.cutback1_plain:hover, a.cutback1_plain:active{background-color:#00ffff;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:11pt;font-family:Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0x00ffff;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("cutback1_left.jpg",40,15,2,0,0)
mainMenuItem("cutback1_b1",".jpg",40,258,"javascript:;","","JOB SEEKER",2,2,"cutback1_plain");
mainMenuItem("cutback1_b2",".jpg",40,258,"javascript:;","","SIGN IN",2,2,"cutback1_plain");
mainMenuItem("cutback1_b3",".jpg",40,258,"javascript:;","","EMPLOYER",2,2,"cutback1_plain");
mainMenuItem("cutback1_b4",".jpg",40,258,"javascript:;","","CAREER RESOURCES",2,2,"cutback1_plain");
mainMenuItem("cutback1_b5",".jpg",40,258,"javascript:;","","RESUME CENTRE",2,2,"cutback1_plain");
endMainMenu("cutback1_right.jpg",40,15)

startSubmenu("cutback1_b5","cutback1_menu",258);
submenuItem("Upload Resume",loc+"upload.html","","cutback1_plain");
submenuItem("Create Resume",loc+"slresume.html","","cutback1_plain");
endSubmenu("cutback1_b5");

startSubmenu("cutback1_b4","cutback1_menu",258);
submenuItem("Career Choices",loc+"carcho.html","","cutback1_plain");
submenuItem("Counseling",loc+"counseling.html","","cutback1_plain");
submenuItem("Articles",loc+"article.html","","cutback1_plain");
submenuItem("Current Recruitements",loc+"currentrecru.html","","cutback1_plain");
endSubmenu("cutback1_b4");

startSubmenu("cutback1_b3","cutback1_menu",258);
submenuItem("New Employer?",loc+"empreg.html","","cutback1_plain");
submenuItem("Log In",loc+"emplog.html","","cutback1_plain");
submenuItem("Search candidate",loc+"searchcand.html","","cutback1_plain");
submenuItem("Post Jobs",loc+"postjob.html","","cutback1_plain");
endSubmenu("cutback1_b3");

startSubmenu("cutback1_b2","cutback1_menu",258);
submenuItem("Log In",loc+"login.html","","cutback1_plain");
submenuItem("New User",loc+"newuserreg.html","","cutback1_plain");
submenuItem("Freshers",loc+"fresher.html","","cutback1_plain");
endSubmenu("cutback1_b2");

startSubmenu("cutback1_b1","cutback1_menu",258);
submenuItem("Search Jobs",loc+"search.html","","cutback1_plain");
submenuItem("Latest Jobs",loc+"latestjobs.html","","cutback1_plain");
submenuItem("Job Alerts",loc+"jobalert.html","","cutback1_plain");
submenuItem("Walkins",loc+"walkin.html","","cutback1_plain");
endSubmenu("cutback1_b1");

loc="";
