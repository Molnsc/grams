document.getElementById("caeb2").click();

setTimeout(() => {
    const premiumSpan = document.querySelector('span[style*="position:fixed"][style*="font-size:18px"][style*="top:1px"][style*="width:116px"][style*="color:#A358E8"]');
    if (premiumSpan) {
        premiumSpan.classList.add('acctype');
    }

    setTimeout(() => {
        if (document.getElementsByClassName("acctype")[0].innerText === "PREMIUM") {
            alert("A+");
        } else {
            alert("A+333");
        }
    }, 1000); // 1 second wait for the class to be applied
}, 1000); // 1 second wait for the click to take effect
