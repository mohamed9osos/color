


// let a = 10
// let arr = [1,2,3,4]
// function saySomething(){
//     return `something`
// }

// export {a as mynumber, arr, saySomething}


let col = document.getElementById("col")

col.onclick = function(){
    let a = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let arr = []
for(let i=0;i<6;i++){
    arr.push(a[Math.floor(Math.random() * a.length)])
}
console.log(`#${arr.join("")}`)
let color = `#${arr.join("")}`
document.body.style.backgroundColor = color
col.style.color = color
}


