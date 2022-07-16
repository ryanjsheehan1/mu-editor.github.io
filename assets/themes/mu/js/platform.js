var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows")     != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Mac")         != -1) OSName="Mac";
if (window.navigator.userAgent.indexOf("X11")         != -1) OSName="Linux";
if (window.navigator.userAgent.indexOf("Linux")       != -1) OSName="Linux";

if (OSName === "Windows") {
    element = document.getElementById("download-button-windows");
} else if (OSName === "Mac") {
    element = document.getElementById("download-button-macos");
} else if (OSName === "Linux") {
    element = document.getElementById("download-button-linux");
} else {
    element = document.getElementById("download-button-other");
}

if (element)
    element.classList.add("btn-success");