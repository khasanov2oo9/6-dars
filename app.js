let mevalar = ["olma", "banan", "uzum", "anor"];

console.log("Array uzunligi:", mevalar.length);
alert("Array uzunligi: " + mevalar.length);

let tasdiq = confirm("Arraydan bitta elementni olib tashlamoqchimisiz?");

if (tasdiq) {
    mevalar.shift();
    alert("Yangi array: " + mevalar);
    console.log("Yangi array:", mevalar);
} else {
    alert("Array o‘zgarmadi: " + mevalar);
    console.log("Array o‘zgarmadi:", mevalar);
}
