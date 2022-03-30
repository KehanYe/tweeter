/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {


  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1623635661424
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1623722061424
    }
  ];

  const createTweetElement = tweet => {

    const template = 
    `<article class="tweet-list-article">
      <header class="tweet-list-header">
        <img class="tweet-list-image" src="${tweet.user.avatars}" alt="user_image">
        <p class="tweet-list-name">${tweet.user.name}</p>
        <p class="tweet-list-handle" >${tweet.user.handle}</p>
      </header>
      <p>${tweet.content.text}</p>
      <footer class="tweet-list-footer">
        <p class="tweetListTime">${timeago.format(tweet.content.created_at)}</p>
        <div class="tweet-list-icons"> 
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
      </div>
      </footer>
    </article>`

    return template;

  }

  const renderTweets = tweets => {

    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      console.log($tweet);
      $('.tweet-list').append($tweet); // adds to page

    }) 
  }
  renderTweets(tweetData);

    $('#submit-tweet').submit((event) => {
      event.preventDefault();
      console.log('click', event.target)
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(event.target).serialize()
      })
      .done(() => {
        $('textarea').val("");
        console.log('ajax post done');
      })

      renderTweets(tweetData);

    })

    // .fail((error) =>  console.log('fail to post', error))

    const loadTweets = () => {
      $.ajax({
        method: 'GET',
        url: '/tweets',
        success: function(tweets) {
          renderTweets(tweets);
          console.log(tweets);
        },
        error: function() { 
          console.log("fail to get", error);
        }
      });
    };

    loadTweets();

    
  
})

