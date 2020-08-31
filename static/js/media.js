// create a project object constructor
function PrintProject(title, images, description) {
    this.title = title;
    this.images = images;
    this.description = description;
};

// instantiate an array to hold the project objects that will be created
const printProjects = new Array;

// create and push objects to the array
const atBrochure = new PrintProject(
    "Company Brochure",
    [
        "images/media/media_brochure1.png",
        "images/media/media_brochure2.png",
        "images/media/media_brochure_grapic.png",
    ],
    "This brochure was designed to the meet client's requests to correlate with their website. Graphics were created using Adobe Photoshop, the provided raw headshot was touched up digitally, and the brochure itself was assembled using Microsoft Publisher via remote computer access."
);
const atASL = new PrintProject(
    "Medical ASL handout",
    [
        "images/media/media_asl1.png",
        "images/media/media_asl2.png",
        "images/media/media_asl_graphic.png"
    ],
    "While working with this client, they came up with an idea to create a handout featuring basic ASL signs for medical providers. Working remotely, we improvised a photoshoot with the tools I could find around the house, then manipulated the images using Photoshop to achieve the look the client was going for. Once I learned the signs, took the photos and edited them, we were able to create a pintable flyer using Microsoft Publisher. "
);

printProjects.push(atBrochure, atASL);

const displayPrintProjects = () => {
    for (let i in printProjects) {
        const project = printProjects[i];

        // add thumbnails to UI
        $('#print-media').append(`
            <h4>${project.title}</h4>
            <img id="thumb-${i}-0" src="${project.images[0]}" />
            <img id="thumb-${i}-1" src="${project.images[1]}" />      
        `);

        // add details to description (left column)
        $('#print-media-details').append(`
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        `);

        // formula to create pop up w/close button
        const displayPopUp = (imgIndex) => {
            let imgSrc = project.images[imgIndex];

            $('#section-print').append(`
                <div class="popup shadow" id="img-${i}-${imgIndex}">
                    <img class=" border" src="${imgSrc}" />
                    <br />
                    <button class="border">close</button>
                </div>
            `); 

            $('button').on('click', function () {
                $('.popup').remove();
            });
        };


        // event listeners for thumbnails
        $(`#thumb-${i}-0`).on('click', function () {
            displayPopUp(0);
        });

        $(`#thumb-${i}-1`).on('click', function () {
            displayPopUp(1);
        });
    }
};



$(function () {

    displayPrintProjects();

});