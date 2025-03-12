var odmcss = `
:root {
    filter: invert(90%) hue-rotate(180deg) brightness(100%) contrast(100%);
    background: #fff;
} 

iframe, img, image, video, [style*="background-image"] { 
    filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
} 
`;
  
id = "orion-browser-dark-theme";
element = document.getElementById(id);

if (null != element) {
  element.parentNode.removeChild(element);
} else {
  style = document.createElement('style');
  style.type = "text/css";
  style.id = id;

  if (style.styleSheet) {
    style.styleSheet.cssText = odmcss;
  } else {
    style.appendChild(document.createTextNode(odmcss));
  }

  document.head.appendChild(style);
}
