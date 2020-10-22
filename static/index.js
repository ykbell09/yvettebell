window.onload = () => {

    const projectsHeading = document.querySelector('#projects-heading');

    document.onscroll = function () {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            projectsHeading.style.visibility = 'visible';
        } else {
            projectsHeading.style.visibility = 'hidden';
        }
    };


}