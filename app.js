const certificate = document.getElementById("certificate");

const recipientName = document.getElementById("recipientName");
const reason = document.getElementById("reason");
const groupColor = document.getElementById("groupColor");

const namePreview = document.getElementById("namePreview");
const reasonPreview = document.getElementById("reasonPreview");
const groupPreview = document.getElementById("groupPreview");

const templateSelect = document.getElementById("templateSelect");

recipientName.addEventListener("input", () => {
    namePreview.textContent = recipientName.value || "ឈ្មោះអ្នកទទួល";
});

reason.addEventListener("input", () => {
    reasonPreview.textContent = reason.value || "មូលហេតុទទួលវិញ្ញាបនបត្រ";
});

groupColor.addEventListener("input", () => {
    groupPreview.textContent = groupColor.value || "ក្រុម";
});

templateSelect.addEventListener("change", () => {
    certificate.style.backgroundImage =
        `url('${templateSelect.value}')`;
});

certificate.style.backgroundImage =
    `url('${templateSelect.value}')`;

document.getElementById("photoInput")
.addEventListener("change", e => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        document.getElementById("photoPreview").src =
            reader.result;
    };

    reader.readAsDataURL(file);
});

document.getElementById("logoInput")
.addEventListener("change", e => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        document.getElementById("logoPreview").src =
            reader.result;
    };

    reader.readAsDataURL(file);
});
