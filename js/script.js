$(document).ready(function(){

    var channelArray = ['streamerhouse','monstercat','coscuuu','freecodecamp']

    for (var i = 0; i < channelArray.length; i++) {
        getData(channelArray[i], i+1)
    }
})

function getData(channel, val){

    $.ajax({
        url: 'https://wind-bow.gomix.me/twitch-api/streams/' + channel,
        success: function(data){
            var stream = data.stream;
            if (stream == null){
                $("#title" + val).text(channel)
                $("#status" + val).html('<strong>OFFLINE</strong>')
                $("#status" + val).css({
                  'background-color': '#231F20',
                  'border': '0px',
                  'color': '#C62828'
                })
            } else {

                $("#title" + val).text(stream.channel.display_name)
                $("#game" + val).html('<strong>Game:</strong> ' + stream.game)
                $("#user" + val).html('<a href=' + stream.channel.url + '>' + stream.channel.url + '</a>')
                $("#img" + val).html('<img class="streamimg" src="' + stream.preview.medium + '" alt="">')
                $("#status" + val).text('ONLINE')
                $("#viewers" + val).text('Viewers: ' + stream.viewers)
            }
        }
    })
}
