// tweet-input     post
// butt-tweet2     button

const twTxtcontent = document.querySelector(".tweet-input");
const twButton = document.querySelector(".butt-tweet2 ");
const addTweet = document.getElementById("addTweet");
const tweets = document.querySelector(".tweets");

twTxtcontent.onkeyup = () => {
    if (twTxtcontent.value === "") {
        twButton.disabled = true;
    } else {
        twButton.disabled = false;
}
};

//  adding tweets

let newTweetContent = document.createElement("div");

addTweet.onsubmit = (e) => {
e.preventDefault();

newTweetContent.innerHTML = `

    <li class="tweet list-unstyled">
    <div class="user-details d-flex">
        <img class="mypic2" src="img/mahmoud.jpg"  alt="">
        <div class="tweet-detail mt-4 ms-2">
            <div class="user">
                <span class="user-name">Mahmoud Hamed</span>
                <span class="user-handel">@Mahmoud_Hamed</span>
                <span class="tweet-age"> .1m</span>
            </div>
            <input type="text" class="twwet-text-content " value="${twTxtcontent.value}" readonly style="outline: none;border: none;">
            <div class="icon-post  d-flex ms-5 justify-content-between mt-2">
                <div class="comment  d-flex align-items-center">
                    <i class="fa-regular fa-comment icon"></i> 
                    <span class="ms-2  num ">0</span>
                </div>
                <div class="retweet  d-flex align-items-center">
                    <i class="fa-solid fa-retweet icon"></i>
                    <span class="ms-2  num ">0</span>
                </div>
                <div class="like d-flex align-items-center">
                    <i class="fa-regular fa-heart icon"></i>
                    <span class="ms-2 num  ">0</span>
                </div>
            </div>
        </div>
    </div>
    
</li>
    
    
    
    `;

twTxtcontent.value = "";

twButton.disabled = true;

tweets.appendChild(newTweetContent);
};


// Darkmode   

var icon = document. getElementById("checkbox");
    icon.onclick = function (){
    document.body.classList.toggle ("dark-theme");
    }


