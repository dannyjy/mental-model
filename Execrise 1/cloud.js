const paragraph = document.getElementById('myParagraph');
const wordList = document.getElementById('wordList');
const string = paragraph.textContent;

const findMost = (str) => {
    const strArr = str.replaceAll(',','').replaceAll('.','').replaceAll('\n','').toLowerCase().split(" ");
    const obj = {};
    let count = 0;
    const uniqeStr = [...new Set(strArr)]

    uniqeStr.map((ele) => {
        strArr.map((st) => {
            if(ele === st)
                count++
        })
        obj[ele] = count
        count = 0
    })

    const sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
    sorted.splice(0,1)
    return sorted.splice(0,12)
}

const strArr = findMost(string)
strArr.filter((str) => {
    wordList.innerHTML += `<li>${str}</li>`
})

let fontSize = 64;
for(let i = 0; i < wordList.children.length; i++) {
    wordList.children[i].style.fontSize = `${fontSize}px`;
    fontSize = fontSize - 4;
}