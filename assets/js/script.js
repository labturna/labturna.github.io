const lightBeams = document.querySelectorAll('.animate-lightBeam');

lightBeams.forEach(beam => {
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);
    beam.style.top = `${randomY}%`;
    beam.style.left = `${randomX}%`;
});
