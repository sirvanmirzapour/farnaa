var myDiv1 = document.getElementById("myDiv1");
var myDiv2 = document.getElementById("myDiv2");
var myDiv3 = document.getElementById("myDiv3");
var myDiv4 = document.getElementById("myDiv4");
document.getElementById("mySelect").onchange = function() {
    myDiv1.style.display = (this.selectedIndex == 1) ? "block" : "none";
    myDiv2.style.display = (this.selectedIndex == 2) ? "block" : "none";
    myDiv3.style.display = (this.selectedIndex == 3) ? "block" : "none";
    myDiv4.style.display = (this.selectedIndex == 4) ? "block" : "none";
}