var sl_url;function sl_popup(){window.open("https://www.sitelock.com/verify.php?site="+ts_url+"","SiteLock","width=600,height=600,left=160,top=170"); }function show_alert () {alert('Copyright 2009 SITELOCK.COM. All rights reserved.');return false; }var List = document.getElementById(\'sl_shield_image').src.split('/');ts_url = List[List.length-1];var img = document.getElementById(\'sl_shield_image');img.onclick = sl_popup;img.oncontextmenu=show_alert;img.style.cursor ='pointer';
