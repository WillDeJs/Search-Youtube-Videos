
$(document).ready(function(){

    $('.search-form').on('submit',function(event){
      event.preventDefault()  ;
      var text = $("#searchbox").val();
         $.get(
           "https://www.googleapis.com/youtube/v3/search",
            {
            key:'AIzaSyBxy-pfN3OqYCLl7N4hpN36oTx0xu-CTGw',
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
