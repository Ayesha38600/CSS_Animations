document.addEventListener("mousemove", moveEyes);

function moveEyes(event) {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
        const boundingBox = eye.getBoundingClientRect();
        const eyeCenterX = boundingBox.left + boundingBox.width / 2;
        const eyeCenterY = boundingBox.top + boundingBox.height / 2;
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(boundingBox.width / 4, boundingBox.height / 4);
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
}
