function WindowOpen(){
    var numberoftabs = document.getElementById("NumberOfTabs").value;
    var Url = document.getElementById("Url0").value;
    for(var i = 0; i < numberoftabs; i++) {
        var newWin = window.open("https://"+Url);
    }
}

var windowName = 'userConsole';
var noPupUp = false
if (noPopUp == true){
}else{
    popUp = window.open('about:blank', windowName, 'width=1, height=1, left=1, top=1');
    if (popUp == null || typeof(popUp)=='undefined') {
    var element = document.getElementById("StartButton");
    element.addEventListener("click", Alert);
    }else{ 	
    	popUp.close();
    	var noPopUp = true
    }
}
function Alert() {
    alert("A popup blocker has prevented Tab Blast from opening tabs! For Tab Blast to work correctly, you must disable your popup-blocker on this site."); 
}
//<Tab Blast (TBLST)> <A stress test that opens a user-definable amount of tabs>
//    Copyright (C) <2023>  <Jack Burlingham>
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <https://www.gnu.org/licenses/>
