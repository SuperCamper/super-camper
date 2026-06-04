/* =========================
ELEMENTS
========================= */

const templateSelect =
document.getElementById("templateSelect");

const recipientName =
document.getElementById("recipientName");

const reason =
document.getElementById("reason");

const groupColor =
document.getElementById("groupColor");

const photoInput =
document.getElementById("photoInput");

const certificate =
document.getElementById("certificate");

const photoPreview =
document.getElementById("photoPreview");

const namePreview =
document.getElementById("namePreview");

const reasonPreview =
document.getElementById("reasonPreview");

const groupPreview =
document.getElementById("groupPreview");

/* =========================
LIVE PREVIEW
========================= */

recipientName.addEventListener("input",()=>{

```
namePreview.textContent =
recipientName.value ||
"ឈ្មោះអ្នកទទួល";
```

});

reason.addEventListener("input",()=>{

```
reasonPreview.textContent =
reason.value ||
"មូលហេតុទទួលវិញ្ញាបនបត្រ";
```

});

groupColor.addEventListener("input",()=>{

```
groupPreview.textContent =
groupColor.value ||
"ក្រុម";
```

});

/* =========================
TEMPLATE
========================= */

templateSelect.addEventListener("change",()=>{

```
certificate.style.backgroundImage =
`url("${templateSelect.value}")`;
```

});

/* =========================
PHOTO UPLOAD
========================= */

photoInput.addEventListener("change",(e)=>{

```
const file =
e.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = (ev)=>{

    photoPreview.src =
    ev.target.result;

};

reader.readAsDataURL(file);
```

});

/* =========================
TEXT EDITOR
========================= */

const targetText =
document.getElementById("targetText");

const fontFamily =
document.getElementById("fontFamily");

const fontSize =
document.getElementById("fontSize");

const textColor =
document.getElementById("textColor");

const shadowColor =
document.getElementById("shadowColor");

const boldToggle =
document.getElementById("boldToggle");

const italicToggle =
document.getElementById("italicToggle");

const xPos =
document.getElementById("xPos");

const yPos =
document.getElementById("yPos");

function selectedText(){

```
return document.getElementById(
    targetText.value
);
```

}

/* Font */

fontFamily.addEventListener("change",()=>{

```
selectedText().style.fontFamily =
fontFamily.value;
```

});

/* Size */

fontSize.addEventListener("input",()=>{

```
selectedText().style.fontSize =
fontSize.value + "px";
```

});

/* Color */

textColor.addEventListener("input",()=>{

```
selectedText().style.color =
textColor.value;
```

});

/* Shadow */

shadowColor.addEventListener("input",()=>{

```
selectedText().style.textShadow =
`0 3px 8px ${shadowColor.value}`;
```

});

/* Bold */

boldToggle.addEventListener("change",()=>{

```
selectedText().style.fontWeight =
boldToggle.checked
? "700"
: "400";
```

});

/* Italic */

italicToggle.addEventListener("change",()=>{

```
selectedText().style.fontStyle =
italicToggle.checked
? "italic"
: "normal";
```

});

/* X Position */

xPos.addEventListener("input",()=>{

```
selectedText().style.left =
`calc(50% + ${xPos.value}px)`;
```

});

/* Y Position */

yPos.addEventListener("input",()=>{

```
selectedText().style.top =
yPos.value + "px";
```

});

/* =========================
PHOTO EDITOR
========================= */

const photoWidth =
document.getElementById("photoWidth");

const photoHeight =
document.getElementById("photoHeight");

const photoX =
document.getElementById("photoX");

const photoY =
document.getElementById("photoY");

photoWidth.addEventListener("input",()=>{

```
photoPreview.style.width =
photoWidth.value + "px";
```

});

photoHeight.addEventListener("input",()=>{

```
photoPreview.style.height =
photoHeight.value + "px";
```

});

photoX.addEventListener("input",()=>{

```
photoPreview.style.left =
`calc(50% + ${photoX.value}px)`;
```

});

photoY.addEventListener("input",()=>{

```
photoPreview.style.top =
photoY.value + "px";
```

});

/* =========================
DRAG & DROP
========================= */

function makeDraggable(el){

```
let dragging = false;

let offsetX = 0;
let offsetY = 0;

el.addEventListener("mousedown",(e)=>{

    dragging = true;

    offsetX =
    e.clientX -
    el.offsetLeft;

    offsetY =
    e.clientY -
    el.offsetTop;

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    el.style.left =
    (e.clientX - offsetX) + "px";

    el.style.top =
    (e.clientY - offsetY) + "px";

});

document.addEventListener("mouseup",()=>{

    dragging = false;

});
```

}

makeDraggable(photoPreview);
makeDraggable(namePreview);
makeDraggable(reasonPreview);
makeDraggable(groupPreview);

/* =========================
PNG
========================= */

document
.getElementById("downloadPNG")
.addEventListener("click",async()=>{

```
const canvas =
await html2canvas(
    certificate
);

const link =
document.createElement("a");

link.download =
"certificate.png";

link.href =
canvas.toDataURL();

link.click();
```

});

/* =========================
PDF
========================= */

document
.getElementById("downloadPDF")
.addEventListener("click",async()=>{

```
const canvas =
await html2canvas(
    certificate
);

const imgData =
canvas.toDataURL(
    "image/png"
);

const { jsPDF } =
window.jspdf;

const pdf =
new jsPDF(
    "p",
    "mm",
    "a4"
);

pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    210,
    297
);

pdf.save(
    "certificate.pdf"
);
```

});
