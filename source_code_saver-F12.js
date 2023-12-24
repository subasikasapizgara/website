xhr = new XMLHttpRequest();
url = "https://localhost/qrcode/source_code_saver.php";

data = "html=" + encodeURIComponent('<!DOCTYPE html>'+document.querySelector('html').outerHTML);
data += "&path=" + encodeURIComponent(window.location.pathname.replace('/qrcode/',''));

xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("İstek başarıyla tamamlandı. Sunucu tarafından dönen veri:", xhr.responseText);
    }
};

xhr.send(data);

// her sayfayı dolaşman gerekiyor
// TÜM BU ÇABA FIREFOX İÇİN