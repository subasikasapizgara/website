(function () {
    var options = {
        whatsapp: atob("KzkwICg1MzApIDAzMCAwMCA2Nw=="), // WhatsApp number
        company_logo_url: "https://reklamfoni.com.tr/images/whatsapp-toplu-mesaj-reklamfoni.png",
        greeting_message: "Size nasıl yardımcı olabiliriz? Hemen yazın, cevaplayalım", // Text of greeting message
        call_to_action: "Bize yazın", // Call to action
        position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
