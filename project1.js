document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            openLightbox(item.src);
        });
    });

    function openLightbox(imageSrc) {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0, 0, 0, 0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "1000";

        const img = document.createElement("img");
        img.src = imageSrc;
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        img.style.borderRadius = "10px";

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    }
});
