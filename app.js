const certificate=document.getElementById("certificate");

const templateSelect=document.getElementById("templateSelect");

const nameInput=document.getElementById("nameInput");
const reasonInput=document.getElementById("reasonInput");
const groupInput=document.getElementById("groupInput");

const photoInput=document.getElementById("photoInput");

const photoPreview=document.getElementById("photoPreview");

const namePreview=document.getElementById("namePreview");
const reasonPreview=document.getElementById("reasonPreview");
const groupPreview=document.getElementById("groupPreview");

templateSelect.onchange=()=>{
certificate.style.backgroundImage=
`url("${templateSelect.value}")`;
};

nameInput.oninput=()=>{
namePreview.innerText=nameInput.value;
};

reasonInput.oninput=()=>{
reasonPreview.innerText=reasonInput.value;
};

groupInput.oninput=()=>{
groupPreview.innerText=groupInput.value;
};

photoInput.onchange=e=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=ev=>{
photoPreview.src=ev.target.result;
};

reader.readAsDataURL(file);

};

const targetText=document.getElementById("targetText");
const fontFamily=document.getElementById("fontFamily");
const fontSize=document.getElementById("fontSize");
const textColor=document.getElementById("textColor");
const shadowColor=document.getElementById("shadowColor");
const bold=document.getElementById("bold");
const italic=document.getElementById("italic");

function currentText(){
return document.getElementById(targetText.value);
}

fontFamily.onchange=()=>{
currentText().style.fontFamily=fontFamily.value;
};

fontSize.oninput=()=>{
currentText().style.fontSize=
fontSize.value+"px";
};

textColor.oninput=()=>{
currentText().style.color=
textColor.value;
};

shadowColor.oninput=()=>{
currentText().style.textShadow=
`2px 2px 8px ${shadowColor.value}`;
};

bold.onchange=()=>{
currentText().style.fontWeight=
bold.checked?"700":"400";
};

italic.onchange=()=>{
currentText().style.fontStyle=
italic.checked?"italic":"normal";
};

document.querySelectorAll(".draggable")
.forEach(el=>{

let active=false;
let x=0;
let y=0;

el.addEventListener("mousedown",e=>{

active=true;

x=e.offsetX;
y=e.offsetY;

});

document.addEventListener("mouseup",()=>{
active=false;
});

document.addEventListener("mousemove",e=>{

if(!active) return;

const rect=
certificate.getBoundingClientRect();

el.style.left=
(e.clientX-rect.left-x)+"px";

el.style.top=
(e.clientY-rect.top-y)+"px";

});

});

document.getElementById("photoWidth")
.oninput=e=>{
photoPreview.style.width=
e.target.value+"px";
};

document.getElementById("photoHeight")
.oninput=e=>{
photoPreview.style.height=
e.target.value+"px";
};

document.getElementById("downloadPNG")
.onclick=async()=>{

const canvas=
await html2canvas(certificate);

const link=
document.createElement("a");

link.download="certificate.png";

link.href=
canvas.toDataURL();

link.click();

};

document.getElementById("downloadPDF")
.onclick=async()=>{

const canvas=
await html2canvas(certificate);

const img=
canvas.toDataURL("image/png");

const {jsPDF}=window.jspdf;

const pdf=
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

};
