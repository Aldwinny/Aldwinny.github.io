let choice_items = [
    {
        "sectionTitle": "About Me",
        "sectionItem": `<p class="font-medium">My name is Aldwin Dennis L. Reyes, but feel free to call me Aldwin / Alds / Dwin</p>
                        <figure>
                            <img src="./assets/pic_me.jpg" height="350"/>
                            <figcaption>This is me, I look kewl!</figcaption>
                        </figure><br>
                        <p class="font-medium">I added things like education, work experience, hobbies, and contact form. Click the other boxes to read more.</p>`,
    },
     {
        "sectionTitle": "Education",
        "sectionItem": `<h2>Education</h2>
                        <h3>Bachelor's Degree</h3>
                        <p>I finished my <u>IT degree</u> at Technological Institute of the Philippines Q.C. It's around Cubao, if you're familiar with QC</p>
                        <h3>Senior High School & High School</h3>
                        <p>I finished SHS and HS at Quezon City Academy which is a school located near SM North.</p>
                        <p><b>Fun Fact</b>: Their rules are strict as hell, I need monthly 3 by 4 white side wall cuts which is almost the same as the military with a little <b><i>PIZZAZZ!</i></b></p>
                        <h3>Elementary School</h3>
                        <p>I finished elementary at Sto nino parochial school, which is a catholic school. (They were infamous for that one issue that happened where a student was stopped from her talks during their graduation..)</p>`
    },
     {
        "sectionTitle": "Work Experience",
        "sectionItem": `<p class="font-medium">If you're interested an in-depth view of my work experience, check out my <a href="https://linkedin.com/in/Aldwinny" target="_blank">Linkedin!</a></p>
        <ul>
            <li class="font-medium"><u>Manulife IT Delivery Center (5 months)</u> - I worked as a backend intern and did cool backend stuff. </li>
            <li class="font-medium"><u>Opswerks (2 months)</u> - I trained as an intern under their SRE program where I learned heavy devops stuff. My brain was burning from knowledge but it was fun nonetheless.</li>
            <li class="font-medium"><u>Manulife IT Delivery Center (8 months and counting!)</u> - I do backend stuff now as an associate!</li>
        </ul>
        <p class="font-medium">Want me to make you a cool website or mobile app? email me here 👉 <a href="mailto:aldwinny.dev@gmail.com">Mail me!</a> - paid btw lmao</p>`
    },
     {
        "sectionTitle": "Hobbies",
        "sectionItem": `
        <p class="font-medium">I've done a lot of hobbies before from 3D Animation to Crocheting, I guess I could say..</p><br>
        <img src="./assets/pic_3d1-ellie.jpg" alt="ellie" height="150" />
        <img src="./assets/pic_3d2-shiba.jpg" alt="ellie" height="150" />
        <p class="font-medium">..That my hobby is literally jumping around multiple hobbies. I mean, I could even rate them: </p><br>
        <table border="2">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>3D Animation</td>
                <td>I use Blender to animate 3D things</td>
                <td>4/5 - Enjoyable, and I want to pick this up again</td>
            </tr>
            <tr>
                <td>3D Modeling</td>
                <td>I use Blender to make 3D Scenes</td>
                <td>4/5 - Enjoyable, and I want to pick this up again FOR REAL, MAN!</td>
            </tr>
            <tr>
                <td>Amigurumi</td>
                <td>It's like crocheting except you make stuffed toys</td>
                <td>5/5 - Because the pink "dinosaur" stuffed toy in my room says so. Also because I used this to make a gift to give to my crush.</td>
            </tr>
            <tr>
                <td>Crocheting</td>
                <td>You make chains using yarn and then you chain those chains with chains, and then you chain those chains with chains..</td>
                <td>3/5 - I swear I would enjoy it more if I wasn't so immersed on the internet.</td>
            </tr>
            <tr>
                <td>Doom Scrolling</td>
                <td>Does this even count as a hobby? This is where you just scroll at your favorite social media for short videos.</td>
                <td>1.5/5 - Dangerously Addicting, but sometimes gives me useful knowledge</td>
            </tr>
            <tr>
                <td>Drawing</td>
                <td>Traditional Arts (Paper and other trad. media)</td>
                <td>5/5 - It's so satisfying when you finish.</td>
            </tr>
            <tr>
                <td>Electronics</td>
                <td>By this I mean salvaging components and trying to build schematic diagrams</td>
                <td>4/5 - Enjoyable, but I probably exposed myself to lead a lot making me dumber.</td>
            </tr>
            <tr>
                <td>Guitar</td>
                <td>You play the guitar</td>
                <td>4/5 - Fun, but I to practice more songs (or finish one)</td>
            </tr>
            <tr>
                <td>Ukulele</td>
                <td>You play a mini high-pitched guitar</td>
                <td>4/5 - Fun & the first instrument I tried. (I still havent finished a single song in it)</td>
            </tr>
            <tr>
                <td>Pixel Art</td>
                <td>Digital art using pixels</td>
                <td>5/5 - Also satisfying when you finish. I'm not the best but you can look at my <a href="https://dotpict.net/users/1972119">dotpict account</a></td>
            </tr>
            <tr>
                <td>Reading Books</td>
                <td>It is what it sounds like.</td>
                <td>3.5/5 - Books are a fun surprise, they're sometimes cool but other times they make me sleep. Either way, it's still fun learning something from them!</td>
            </tr>
            <tr>
                <td>Watching Youtube Videos</td>
                <td>So there's this thing called youtube which hosts cool videos you can watch.</td>
                <td>5/5 - The dopamine rush is worth it</td>
            </tr>
            <tr>
                <td>World building</td>
                <td>You write your own story and make your own concept for a world.</td>
                <td>5/5 - Coolest thing I've tried</td>
            </tr>
        </table>`
    },
     {
        "sectionTitle": "Contact me",
        "sectionItem": `<h4 class="font-medium">If you want to get in touch with me, feel free to fill out this form (doesn't work, just contact me thru <a href="https://linkedin.com/in/Aldwinny">linkedin</a>):</h4>
        <form>
            <div>
                <label class="font-medium" for="name">Name</label><br>
                <input style="width: 50%;" type="text" name="name" placeholder="Your name"/>
            </div>
            <br />
            <div>
                <label class="font-medium" for="email">Email</label><br>
                <input style="width: 50%;" type="email" name="name" placeholder="I will contact you back using this email"/>
            </div>
            <br />
            <div>
                <label class="font-medium" for="message">Description</label><br>
                <textarea style="width: 50%; height: 350px" name="message" placeholder="What's your message"></textarea>
            </div>
            <br>
            <input type="submit" value="📨 Send the message"/>
        </form>`
    }
]

function focusChoiceItem(index) {
    let choice_content = document.getElementById("content");

    let choice_content_title = choice_content.children[1];
    let choice_content_item = choice_content.children[2];
    
    choice_content_title.textContent = choice_items[index].sectionTitle;
    choice_content_item.innerHTML = choice_items[index].sectionItem;
    showChoiceContent();
}

function showChoiceContent() {
    let choice_content = document.getElementById("content");
    choice_content.style.animation = 'slide-in 750ms ease forwards';
}

function hideChoiceContent() {
    let choice_content = document.getElementById("content");
    choice_content.style.animation = 'slide-out 750ms ease forwards';
}