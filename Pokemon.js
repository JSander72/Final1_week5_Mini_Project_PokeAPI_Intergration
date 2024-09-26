document.addEventListener('DOMContentLoaded', () => {
    // Get references to the image and its container
    const image = document.getElementById('pokeImage'); 
    const container = document.getElementById('imageContainer');

    // Ensure elements exist before adding event listeners
    if (image && container) {
        // Set default zoom factor and transition duration
        let zoomFactor = 5.0;
        const transitionDuration = '0.3s'; // Adjust as needed
        const zoomRange = 5.0; // Adjust the maximum zoom level

        // Event listener for double-clicking the container
        container.addEventListener('dblclick', (event) => {
            // Calculate the mouse position relative to the image
            const rect = image.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            // Set the transform origin to the mouse position
            image.style.transformOrigin = `${offsetX}px ${offsetY}px`;

            // Toggle zoom factor between 1.0 and zoomRange
            zoomFactor = zoomFactor === 1.0 ? zoomRange : 1.0;
            image.style.transform = `scale(${zoomFactor})`;
            image.style.transition = `transform ${transitionDuration}`;
        });
    } else {
        console.error('Image or container element not found');
    }
});

