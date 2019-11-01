function SetLang(lang, path) {
    $.post("/i18n/setlang/", {language: lang, next: path},
        function(data) {
            window.location.href = path;
        }
    );
}