$(function () {
  fetchPhotos();
});

let $photoContainer;
let $loadingImage;

// shows a loading gif, then runs displayData()
const fetchPhotos = () => {

  $photoContainer = $('#fiber-photos');
  $photoContainer.html('');
  $loadingImage = $('<img>');
  $loadingImage
    .attr('src', 'images/ajax-loader.gif')
    .css({
      'padding': '50'
    })
    .appendTo($photoContainer);

  // runs displayData();
  $.getScript('https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=displayData&id=189891089@N06&format=json');
}

const displayData = (data) => {

  $loadingImage.remove();

  let fiberData = data.items;

  for (let i in fiberData) {
    const fiberImage = fiberData[i].media.m;
    let $info = $(`${fiberData[i].description}`);
    let description = $info.get();
    const $newImg = $('<div></div>');
    $newImg
      .html(`
        <img src="${fiberImage}" />
      `)
      .attr('id', i)
      .addClass('fiber-image')
      .appendTo($photoContainer)
      .on('click', function () {
        
        // remove existing popup
        $('.popup').remove();

        let $allImages = $('.fiber-image');
        
        // remove border from previously selcted image
        const removeBorder = () => {
          $allImages.each(function () {
            $(this).removeClass('selected');
          });
        };
        removeBorder();
        
        // add border to selected image
        $newImg.addClass('selected');

        $('#section-container').append(`
          <div class="popup shadow">
            <h4>${fiberData[i].title}</h4>
            <img src="${fiberImage}" />
            <p>${description[4].innerText}</p>
            <button class="border">close</button>
          </div>
        `);

        $('button').on('click', function () {
          $('.popup').remove();
          removeBorder();
        });


        // // replace title and description
        // const $fiberDescription = $('#fiber-description');
        // let $info = $(`${fiberData[i].description}`);

        // // breaks the description down into an array to grab the appropriate part of it
        // let description = $info.get();

        // // display the title and appropriate part of the description
        // $fiberDescription.html(`
        //   <span id="fiber-title">${fiberData[i].title}</span> 
        //   <br />${description[4].innerText}
        // `);


      });

  }
};