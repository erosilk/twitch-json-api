$(document).ready(function(){

    var channelArray = ['streamerhouse','monstercat','coscuuu','freecodecamp','eulcs1']

    for (var i = 0; i < channelArray.length; i++) {
        getData(channelArray[i], i+1)
    }
})

function getData(channel, val){

    $.ajax({
        url: 'https://wind-bow.gomix.me/twitch-api/streams/' + channel,
        success: function(data){
            var stream = data.stream
            if (stream == null){
                $("#container").append('<div class="stream animated fadeInUp"><div id="img1"><img class="streamimg" src="' + 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg' + '"/></div><div class="infocontainer"><h1 class="title">' + channel + '</h1><p class="status"> '+ 'OFFLINE' +' </p></div></div></div>')
            } else {
                $("#container").append('<div class="stream animated fadeInUp"><div id="img1"><img class="streamimg" src="' + stream.preview.medium + '"/></div><div class="infocontainer"><h1 class="title">' + stream.channel.display_name + '</h1><p class="game">'+ '<strong>Game:</strong> ' + stream.game + '</p><p class="user"> '+'<a href=' + stream.channel.url + '>' + stream.channel.url + '</a>'+'</p><div class="inlinestatus"><p class="status"> '+ 'ONLINE' +' </p><p class="viewers">'+'Viewers: ' + stream.viewers+' </p></div></div></div>')
            }
        }
    })
}
