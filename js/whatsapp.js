window.onload = function () {
    css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = location.protocol+'//'+location.hostname+'/style/css/whatsapp.css';
    document.head.appendChild(css);

    a = document.createElement('a');
    a.classList.add('whatsapp-butonu');
    a.title = 'WhatsApp Sipariş';
    a.href = 'javascript:whatsapp_open();';
    document.body.appendChild(a);
}
function whatsapp_open(){
    window.open('https://wa.me/'+atob('OTA1MzI0MTE2NDY5'), '_blank');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.URL.indexOf('qrcode') == -1) {
    script = document.createElement('script');
    script.src = location.protocol+'//'+location.hostname+'/style/js/sweetalert2.js';
    document.head.appendChild(script);

    setTimeout(function () {
        Swal.fire({
            title: 'Şifacı Baba Geldi',
            html: 'Diz boyun ve bel ağrıları için birebir<br>kuyruk yağlı masaj kremimizi denediniz mi?<br><br>İbn-i Sina\'nın kemik düzelten yağı dediği kuyruk yağlı masaj kremi',
            imageUrl: 'https://subasikasapizgara.com/upload/kuyruk-yagli-masaj-kremi.jpg',
            imageWidth: 400,
            imageHeight: 309,
            imageAlt: 'Şifacı Baba - Kuyruk Yağlı Masaj Kremi',
            confirmButtonColor: '#29a71a',
            confirmButtonText: 'Whatsapp\'tan sipariş ver',
        }).then((result) => {
            if (result.isConfirmed) {
                whatsapp_open();
            }
        });
    },30000);
}
