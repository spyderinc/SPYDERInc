const spyder = document.getElementById("spyder");
let lines = ['Game Developer','App Developer','Web Developer'];
let i = 0, j = 0, wait = 0;
setInterval(() => {
    if (wait-- > 0) return;
    if(wait == -1) spyder.innerHTML = "";
    if (i < lines.length)
    if(j < lines[i].length)
    spyder.innerHTML += lines[i][j++];
    else
    wait = 1, j = 0, i++;
    else
    wait = 0, i = j = 0;
}, 250);