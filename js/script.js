$(document).ready(function(){

    var channelArray = ['streamerhouse','monstercat','coscuuu','freecodecamp']

    for (i = 1; i < 5; i++) {
    getData(channelArray[i-1],i);
    }
})

function getData(channel, val){
     
    $.ajax({
        url: 'https://wind-bow.gomix.me/twitch-api/streams/' + channel,
        success: function(data){

            if (data.stream == null){
                $("#title" + val).text(channel)
                $("#status" + val).html('<strong>OFFLINE</strong>')
                $("#status" + val).css('background-color', '#231F20')
                $("#status" + val).css('border', '0px')
                $("#status" + val).css('color', '#C62828')
            } else { 

            $("#title" + val).text(data.stream.channel.display_name)
            $("#game" + val).html('<strong>Game:</strong> ' + data.stream.game)
            $("#user" + val).html('<a href=' + data.stream.channel.url + '>' + data.stream.channel.url + '</a>')
            $("#img" + val).html('<img class="streamimg" src="' + data.stream.preview.medium + '" alt="">')
            $("#status" + val).text('ONLINE')
            $("#viewers" + val).text('Viewers: ' + data.stream.viewers)
        }
        }
 })
}