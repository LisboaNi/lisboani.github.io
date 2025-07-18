function scrollProjects(direction) {
    const scrollContainer = document.querySelector('.project-wrapper .project');
    const scrollAmount = 340;

    scrollContainer.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
}