const paragraph = document.getElementById('myParagraph')
const text = paragraph.textContent

const findMost = (str) => {
    const strArr = str.replace(/[.,]/g, "").replaceAll('\n','').toLowerCase().split(" ");
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
    return sorted.splice(0,5)
}

const result = findMost(text)
console.log(result)
const txtArr = text.split(' ')

const res = result.map((ele,index) => {
    return txtArr.map((st,i) => {
        let span = document.createElement('span')
        span.classList.add('highlight')
        ele === st ? paragraph.innerHTML = paragraph.innerHTML.replace(st, `<span class="highlight">${st}</span>`) : ''
        
    })
})



// function highlight (paragraph, word) {
//     const regex = new RegExp('${word}', 'gi')
//     const highlightedText = paragraph.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
//     return highlightedText;
// }

// highlight(text, 'the');


