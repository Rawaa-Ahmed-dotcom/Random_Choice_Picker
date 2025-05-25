let textarea = document.getElementById("textarea");
let tagEle = document.getElementById("tags");
textarea.focus();
textarea.onkeydown = (e) => { 
    let array = createTags(e.target.value);
    createTags(e.target.value);
    if(e.key === "Enter") {
        setTimeout(() => {
           e.target.value = ``;
        },10);
        randomSelect();
    } 
}
function createTags(value) {
    let newArr = value.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagEle.innerHTML = ``;
    newArr.map((item) => {
        let tag = document.createElement("span");
        tag.classList.add("tag");
        tag.innerHTML = item;
        tagEle.append(tag);
    });
    return newArr;
}
function randomSelect() {
    let times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomtag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        },100);
        
    },100);
    setTimeout(() => {
       clearInterval(interval);
       setTimeout(() => {
          const randomTag = pickRandomtag();
          highlightTag(randomTag);
       },100)
    },times*100)
}

function pickRandomtag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
    tag.classList.add("highlight");
}
function unhighlightTag(tag) {
    tag.classList.remove("highlight");    
}