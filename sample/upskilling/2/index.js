let choice_items = [
    {
        "sectionTitle": "About Me",
        "sectionItem": "Hi"
    }
]

function focusChoiceItem(index) {
    let choice_content = document.getElementById("content");

    let choice_content_title = choice_content.children[1];
    let choice_content_item = choice_content.lastChild;
    
    choice_content_title.textContent = choice_items[index].sectionTitle;
    
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