// const showModal = function(e) {
//     e.preventDefault ();
//     $('.modal-container').show()
// }

// const hideModal = function(e) {
//     e.preventDefault();
//     $('.modal-container').hide()
// }

// $('#new-tweet').on('click', showModal);
// $('.close-modal').on('click', hideModal);
// $('.tweet-btn').on('click', hideModal);


// const render = function(tweet){
//     $('.center-feed').append(`<p> 
//     <img src="assets/twitter-round-icon.png" class="avatar2" width="48" height="48"><!--small avatar -->
//     <div class="user-date">   
//         <span class="userTwitter"> Twitter &nbsp;&nbsp; @Twitter </span> <!-- style this option in css to show on the top of every message-->
//         <span class="postDate"> &nbsp; &nbsp; Oct 18 </span> <!-- style this option in css to show on the top of every message after the Username-->
//         <br>
//         <br>
//         <div class="loadNewTweet">
//         ${tweet}
//         </p>`)
// }

// const saveInput = function(e) {
//     e.preventDefault();
//     text_max = 140;
//     $('#counter').html(text_max + ' characters');
//     const InputData = $('#Input').val();
//     const postInput = {
//         username: 'Twitter',
//         tweet: InputData,
//     }
// console.log(postInput);
//     $.post('/api/tweet', postInput)
//     .then(function(data){
//         render(data.tweet);
//         console.log()
//         console.log('this is data from the response ====>', data)
//             const tweet = {
//                 username: "",
//                 tweet: '',
//             }
//     })
// }

// $('.tweet-btn').on('click', saveInput);

// $.get('/api/tweet')
// .then(function(serverData){
//     for (let i=0; i <serverData.length; i++){
//         render(serverData[i].tweet);
//     }
// })
const text_max = 140;
$(document).ready(function () {
    
    $('#counter').html(text_max + ' characters');
});

$('#text').keyup(function () {
    let text_length = $('#text').val().length;
         text_remaining = text_max - text_length;
    
        $('#counter').html(text_remaining + ' characters');
}); 
