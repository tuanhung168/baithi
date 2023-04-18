let ch = prompt("Nhap chuoi :");
function standradString(str) {
    ch = ch.trim();
    ch = ch.toLowerCase();
    const a = ch.split(" ");
    let newCh = "";
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== ""){
            newCh += a[i].charAt(0).toUpperCase() + a[i].slice(1) + " ";
        }
    }
    newCh = newCh.trimEnd();
    return newCh;
}
console.log(standradString(ch));