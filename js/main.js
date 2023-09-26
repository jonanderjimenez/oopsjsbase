import {Makina} from "./makina.js";
let zelaia=[]

for(let i=1;i<=50;i++){
    zelaia.push(new gizaki("g"+i))
}
for(let i=1;i<=50;i++){
    zelaia.push(new jokalari("j"+i))
}
for(let i=1;i<=50;i++){
    zelaia.push(new estralurtar("e"+i))
}

console.log(zelaia)
