const pdfForm = document.getElementById("pdf-form");
const pdfFile = document.getElementById("pdf-file");
const pdfContainer = document.getElementById("pdf-container");

pdfForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = pdfFile.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const pdfUrl = reader.result;
    const iframe = document.createElement("iframe");
    iframe.src = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
    pdfContainer.appendChild(iframe);
  };
});
