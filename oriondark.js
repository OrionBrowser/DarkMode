var odmcss = `
:root {
    filter: invert(90%) hue-rotate(180deg) brightness(100%) contrast(100%);
    color-scheme: dark;
    background: #fff;
    transition: filter 0.2s ease;
}

iframe, img, image, video, canvas, svg image,
picture, [style*="background-image"],
[style*="background:"] {
    filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
}

iframe img, iframe video, iframe canvas {
    filter: none;
}

::selection {
    background: #338fff;
    color: #fff;
}

input, textarea, select, button {
    color-scheme: dark;
}
`;

const id = "orion-browser-dark-theme";
const existing = document.getElementById(id);

if (existing) {
    existing.remove();
} else {
    const meta = document.createElement("meta");
    meta.name = "color-scheme";
    meta.content = "dark";
    meta.id = id + "-meta";
    document.head.appendChild(meta);

    const style = document.createElement("style");
    style.id = id;
    style.textContent = odmcss;
    document.head.appendChild(style);
}
