function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? match[1] : null;
}

$(document).keydown(function(e) {
    if (e.keyCode === 192) {
        if (getCookie('panic') == null) {
            window.open('https://classroom.google.com');
            console.log('Cookie cannot be set!');
            return;
            // document.cookie = "panic=classroom.google.com";
        }

        // window.open("https://" + getCookie('panic'));
    }
});