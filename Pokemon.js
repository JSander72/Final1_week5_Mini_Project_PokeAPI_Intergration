document.addEventListener('DOMContentLoaded', () => {
    // Get references to the image 
const image = document.getElementById('pokeImage'); 
const container = document.getElementById('imageContainer');

// Ensure elements exist before adding event listeners which took a while to correct 
if (image && container) {
    
    let zoomFactor = 2.0;
    const transitionDuration = '0.3s'; 

    // Event listener for mouse movement over the container
    container.addEventListener('mousemove', (event) => {
        
        const rect = container.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        
        const distanceFromCenter = Math.sqrt(
            Math.pow(mouseX - rect.width / 2, 2) + 
            Math.pow(mouseY - rect.height / 2, 2)
        );
        const maxDistance = Math.sqrt(
            Math.pow(rect.width / 2, 2) + 
            Math.pow(rect.height / 2, 2)
        );
        const zoomRange = 5.0; 
        zoomFactor = 1 + (zoomRange - 1) * (1 - distanceFromCenter / maxDistance);

        // Apply zoom and transition
        image.style.transform = `scale(${zoomFactor})`;
        image.style.transformOrigin = `${mouseX}px ${mouseY}px`;
        image.style.transition = `transform ${transitionDuration}`;
    });

    // Event listener for mouse leaving the container
    container.addEventListener('mouseleave', () => {
        // Reset zoom and transition
        zoomFactor = 1.0;
        image.style.transform = `scale(${zoomFactor})`;
        image.style.transition = `transform ${transitionDuration}`;
    });
} else {
    console.error('Image or container element not found');
}

});
