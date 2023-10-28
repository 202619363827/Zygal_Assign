

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
  
    
    const fontSize = 20;
    const fontFamily = "Arial";
    const fontColor = "yellow";
  
    
    context.font = fontSize + "px " + fontFamily;
    context.fillStyle = fontColor;
  
    
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.clearRect(0, 0, canvas.width, canvas.height);
  
    
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    
    context.fillStyle = fontColor;
  
    
    const text = "B";
  
    
    const x = canvas.width / 2;
    const y = canvas.height / 2;
  
    
    context.fillText(text, x, y);
  
    
    function getPixelColors() {
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixelColors = [];
  
      for (let i = 0; i < imageData.data.length; i += 4) {
        const hexColor = "#" + ((1 << 24) | (imageData.data[i] << 16) | (imageData.data[i + 1] << 8) | imageData.data[i + 2]).toString(16).slice(1);
        pixelColors.push(hexColor);
      }
  
      const pixelColorsText = pixelColors.join("\n");
  
    
      const dataUri = "data:text/plain;charset=utf-8," + encodeURIComponent(pixelColorsText);
  
    
      const downloadLink = document.getElementById("downloadLink");
      downloadLink.href = dataUri;
    }
  
    
    document.getElementById("downloadLink").addEventListener("click", getPixelColors);
  });