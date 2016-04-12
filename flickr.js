$(document).ready(function(){
    $('#getJSONBtn').click(getPhotos);
});

function getPhotos() {
    var tags = $('#tags').val();
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags + '&tagmode=any&format=json&jsoncallback=?'
    $.getJSON(url, function(data){
        var imgs = '';
        data.items.forEach(function(item){
            imgs += '<img src="' + item.media.m + '" alt="' + item.title + '" /> '
        });
        $('#images').empty();
        $('#images').append(imgs);
    });
}
