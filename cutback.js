if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("cutback.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".cutback_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#44aed7;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.cutback_plain:link, a.cutback_plain:visited{text-align:left;background-color:#44aed7;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:13pt;font-family:Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write("a.cutback_plain:hover, a.cutback_plain:active{background-color:#00ffff;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:13pt;font-family:Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0x00ffff;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("cutback_left.jpg",46,17,2,0,0)
mainMenuItem("cutback_b1",".jpg",46,226,"javascript:;","","JOB SEEKER",2,2,"cutback_plain");
mainMenuItem("cutback_b2",".jpg",46,226,"javascript:;","","SIGN IN",2,2,"cutback_plain");
mainMenuItem("cutback_b3",".jpg",46,226,"javascript:;","","EMPLOYER",2,2,"cutback_plain");
mainMenuItem("cutback_b4",".jpg",46,226,"javascript:;","","CAREER RESOURCES",2,2,"cutback_plain");
mainMenuItem("cutback_b5",".jpg",46,226,"javascript:;","","RESUME CENTRE",2,2,"cutback_plain");
endMainMenu("cutback_right.jpg",46,17)

startSubmenu("cutback_b5","cutback_menu",226);
submenuItem("Upload Resume","javascript:;","","cutback_plain");
submenuItem("Create Resume",loc+"slresume.html","","cutback_plain");
endSubmenu("cutback_b5");

startSubmenu("cutback_b4","cutback_menu",226);
submenuItem("Career Choices",loc+"carcho.html","","cutback_plain");
submenuItem("Counseling","javascript:;","","cutback_plain");
submenuItem("Articles",loc+"finalart.html","","cutback_plain");
submenuItem("Current Recruitements","javascript:;","","cutback_plain");
endSubmenu("cutback_b4");

startSubmenu("cutback_b3","cutback_menu",226);
submenuItem("New Employer?",loc+"empreg.html","","cutback_plain");
submenuItem("Log In",loc+"emplog.html","","cutback_plain");
submenuItem("Search candidate","javascript:;","","cutback_plain");
submenuItem("Post Jobs","javascript:;","","cutback_plain");
endSubmenu("cutback_b3");

startSubmenu("cutback_b2","cutback_menu",226);
submenuItem("Log In","javascript:;","","cutback_plain");
submenuItem("New User",loc+"newuserreg.html","","cutback_plain");
submenuItem("Freshers","javascript:;","","cutback_plain");
endSubmenu("cutback_b2");

startSubmenu("cutback_b1","cutback_menu",226);
submenuItem("Search Jobs","javascript:;","","cutback_plain");
submenuItem("Latest Jobs",loc+"latestjobs.html","","cutback_plain");
submenuItem("Job Alerts","javascript:;","","cutback_plain");
submenuItem("Walkins","javascript:;","","cutback_plain");
endSubmenu("cutback_b1");

loc="";
