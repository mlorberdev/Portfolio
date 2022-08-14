!(function () {
    document.getElementById("landing").scrollIntoView();
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => btn.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            btn.click();
        }
    }));

})();