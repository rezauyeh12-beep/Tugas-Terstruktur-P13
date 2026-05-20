// Welcome saat website dibuka
window.onload = function () {
    setTimeout(() => {
        tampilPesan(
            "✨ Selamat Datang di Website Jadwal Kuliah ✨"
        );
    }, 500);
};


// Fungsi notifikasi keren
function tampilPesan(teks) {

    const notif = document.createElement("div");

    notif.innerHTML = teks;

    notif.style.position = "fixed";
    notif.style.top = "20px";
    notif.style.right = "20px";
    notif.style.padding = "15px 25px";
    notif.style.background = "rgba(0,0,0,0.7)";
    notif.style.color = "white";
    notif.style.borderRadius = "15px";
    notif.style.fontSize = "18px";
    notif.style.boxShadow = "0 0 20px cyan";
    notif.style.zIndex = "999";
    notif.style.animation = "slide 0.5s ease";

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}


// Animasi CSS dari JavaScript
const style = document.createElement("style");

style.innerHTML = `
@keyframes slide{
    from{
        opacity:0;
        transform:translateX(100px);
    }
    to{
        opacity:1;
        transform:translateX(0);
    }
}
`;

document.head.appendChild(style);


// Efek klik tombol
const tombol = document.querySelector("button");

tombol.addEventListener("click", function () {

    tampilPesan("📚 Membuka Halaman Info...");

    tombol.style.transform = "scale(0.95)";

    setTimeout(() => {
        tombol.style.transform = "scale(1)";
    }, 150);

});