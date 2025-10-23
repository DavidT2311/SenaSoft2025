import React from 'react';
import html2canvas from 'html2canvas';
import { parse, formatRgb } from 'culori';

function convertOklchToRgb(oklchString) {
  const color = parse(oklchString);
  if (!color) return 'rgb(0,0,0)'; 
  return formatRgb(color);
}

function replaceOklchColors() {
  const elements = document.querySelectorAll('*');
  elements.forEach(el => {
    const style = window.getComputedStyle(el);
    ['color', 'background-color', 'border-color'].forEach(prop => {
      const val = style.getPropertyValue(prop);
      if (val.includes('oklch')) {
        const rgb = convertOklchToRgb(val);
        el.style.setProperty(prop, rgb);
      }
    });
  });
}

export default function ExportPdf() {

  const exportPdf = () => {
    replaceOklchColors();  
    html2canvas(document.body).then(canvas => {
      const link = document.createElement('a');
      link.download = 'captura.png'; 
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
      <button onClick={exportPdf}>Exportar PDF</button>
    </div>
  );
}
