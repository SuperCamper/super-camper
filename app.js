const templateSelect = document.getElementById("templateSelect");
const recipientName = document.getElementById("recipientName");
const reason = document.getElementById("reason");
const groupColor = document.getElementById("groupColor");
const photoInput = document.getElementById("photoInput");

const certificate = document.getElementById("certificate");

const namePreview = document.getElementById("namePreview");
const reasonPreview = document.getElementById("reasonPreview");
const groupPreview = document.getElementById("groupPreview");
const photoPreview = document.getElementById("photoPreview");

templateSelect.addEventListener("change", () => {
    certificate.style.backgroundImage =
        `url("${templateSelect.value}")`;
});

recipientName.addEventListener("input", () => {
    namePreview.textContent =
        recipientName.value || "ឈ្មោះអ្នកទទួល";
});

reason.addEventListener("input", () => {
    reasonPreview.textContent =
        reason.value || "មូលហេតុទទួលវិញ្ញាបនបត្រ";
});

groupColor.addEventListener("input", () => {
    groupPreview.textContent =
        groupColor.value || "ក្រុម";
});

photoInput.addEventListener("change", e => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(ev){
        photoPreview.src = ev.target.result;
    };

    reader.readAsDataURL(file);
});

document
.getElementById("downloadPNG")
.addEventListener("click", async () => {

    const canvas =
        await html2canvas(certificate);

    const link =
        document.createElement("a");

    link.download =
        "certificate.png";

    link.href =
        canvas.toDataURL();

    link.click();
});

document
.getElementById("downloadPDF")
.addEventListener("click", async () => {

    const canvas =
        await html2canvas(certificate);

    const imgData =
        canvas.toDataURL("image/png");

    const { jsPDF } =
        window.jspdf;

    const pdf =
        new jsPDF("p","mm","a4");

    pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        210,
        297
    );

    pdf.save("certificate.pdf");
});
