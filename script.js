
$(document).ready(function(){

    $('.search-form').on('submit',function(event){
      event.preventDefault()  ;
      var text = $("#searchbox").val();
         $.get(
           "https://www.googleapis.com/youtube/v3/search",
            {
            key:'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE',
            maxResults:10,
            part:'snippet',
            type:'video',
            q:text.replace(' ','+'),
            },
            function(data){
              console.log(data);
              for(var i=0; i<data.items.length;i++){
                console.log(data.items[i].snippet.title);

               $('.search-form').after('<iframe src="https://www.youtube.com/embed/'+data.items[i].id.videoId+'"></iframe>');
              }
            }
        )
    });
});
