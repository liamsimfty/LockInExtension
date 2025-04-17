chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received in content script:", request);
  if (request.action === "clearPage") {
    console.log("Action 'clearPage' confirmed, clearing body.");

    // Bersihkan halaman dulu
    document.body.innerHTML = "";

    // Buat kontainer teks
    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.top = "50%";
    wrapper.style.left = "50%";
    wrapper.style.transform = "translate(-50%, -50%)";
    wrapper.style.textAlign = "center";
    wrapper.style.fontSize = "24px";
    wrapper.style.fontWeight = "bold";
    wrapper.style.color = "white";

    // Tambahkan teks ke dalamnya
    wrapper.textContent = "Ngoding Woy Malah Skrul Fesnuk.";

    // Sisipkan ke body
    document.body.appendChild(wrapper);

    sendResponse({ status: "konten dihapus dan teks ditambahkan" });
  }
  return false;
});
