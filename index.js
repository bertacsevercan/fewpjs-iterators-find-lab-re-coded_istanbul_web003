const testVar = {}

function testFunc() {
  return "hi"
}

function  superbowlWin(arr) {
  const res = arr.find(r => r.result === "W")
  if(res !== undefined){
    return res.year
  }
  return res
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "L"},
  {year: "2016", result: "N/A"}
  //...
]
let a = superBowlWin(record)

console.log(a)