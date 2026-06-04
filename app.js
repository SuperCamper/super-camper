const templateSelect = document.getElementById("templateSelect");
const certificate = document.getElementById("certificate");

const recipientName = document.getElementById("recipientName");
const reason = document.getElementById("reason");
const groupColor = document.getElementById("groupColor");

const namePreview = document.getElementById("namePreview");
const reasonPreview = document.getElementById("reasonPreview");
const groupPreview = document.getElementById("groupPreview");

const photoInput = document.getElementById("photoInput");
const logoInput = document.getElementById("logoInput");

const photoPreview = document.getElementById("photoPreview");
const logoPreview = document.getElementById("logoPreview");

certificate.style.backgroundImage =
`url('${templateSelect.value}')`;

templateSelect.addEventListener("change",()=>{
    certificate.style.backgroundImage =
    `url('${templateSelect.value}')`;
});

recipientName.addEventListener("input",()=>{
    namePreview.textContent =
    recipientName.value || "ឈ្មោះអ្នកទទួល";
});

reason.addEventListener("input",()=>{
    reasonPreview.textContent =
    reason.value || "មូលហេតុទទួលវិញ្ញាបនបត្រ";
});

groupColor.addEventListener("input",()=>{
    groupPreview.textContent =
    groupColor.value || "ក្រុម";
});

photoInput.addEventListener("change",(e)=>{
    const file = e.target.files[0];
    if(!file) return;

    photoPreview.src =
    URL.createObjectURL(file);
});

logoInput.addEventListener("change",(e)=>{
    const file = e.target.files[0];
    if(!file) return;

    logoPreview.src =
    URL.createObjectURL(file);
});

document.getElementById("downloadPNG")
.addEventListener("click",()=>{

    html2canvas(certificate).then(canvas=>{

        const link =
        document.createElement("a");

        link.download =
        "certificate.png";

        link.href =
        canvas.toDataURL();

        link.click();

    });

});

document.getElementById("downloadPDF")
.addEventListener("click",()=>{

    html2canvas(certificate).then(canvas=>{

        const img =
        canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;

        const pdf =
        new jsPDF("p","mm","a4");

        pdf.addImage(
            img,
            "PNG",
            0,
            0,
            210,
            297
        );

        pdf.save("certificate.pdf");

    });

});
