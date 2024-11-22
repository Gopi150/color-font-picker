const coloru = (color, id) => {
    var d = "#color" + id;
    var c1 = document.querySelector(d);
    var data = (document.querySelector(".container1").style.color = color);
};
const colorb = (color, id) => {
    var d = "#color" + id;
    var c1 = document.querySelector(d);
    var data = (document.querySelector(".container1").style.backgroundColor = color);
};
var arr = [
    "red",
    "blue",
    "white",
    "yellow",
    "green",
    "grey",
    "lightblue",
    "lightgreen",
    "black",
    "violet",
    "indigo",
    "orange",
    "purple",
    "#FF8F00",
    "silver",
    "pink",
    "brown",
    "skyblue",
    "#FFECA1",
    "#BFD641",
    "#B0BEC5",
    "#EFC7CA",
    "#5DE2E7",
    "#E2EAF4",

]
var c = 1,
    d = 1;
for (var i of arr) {
    var idt = "#color" + c;
    var idti = "#coloru" + c;
    console.log(idt);
    var cc = (document.querySelector(idt).style.backgroundColor = i);
    var ccc = (document.querySelector(idti).style.backgroundColor = i);
    c = c + 1;
}
const fontFamilies = [
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "'Times New Roman', Times, serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "Arial, Helvetica, sans-serif",
    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    "Georgia, 'Times New Roman', Times, serif",
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "Verdana, Geneva, Tahoma, sans-serif",
    "cursive",
    "fantasy",
    "Fauna One, serif",
    "Georgia, serif",
    "Garamond, serif",
];
for (var i = 0; i < 17; i++) {
    var fs = "#font" + i;
    var ff = (document.querySelector(fs).style.fontFamily =
        fontFamilies[i]);
}
const fonty = (n) => {
    var fc = (document.querySelector(".container1").style.fontFamily =
        fontFamilies[n]);
}




function download_image() {
    let d = document.querySelector(".download");
    html2canvas(document.querySelector(".container1")).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "image.png";
        link.click();
    });
}