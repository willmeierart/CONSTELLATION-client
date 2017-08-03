export default function dummyColorArray(){
  const makeEachDot=()=>{
    const dot = []
    for (let i = 0; i < 3; i++){
      const colVal = Math.random()*255
      dot.push(colVal.toFixed(0))
    }
    return dot
  }
  const makeDummyArray=()=>{
    const initialState = []
    for (let i = 0; i < 2048; i++){
      initialState.push(makeEachDot())
    }
    return initialState
  }
  return makeDummyArray()
}


// example:
// const matrix = dummyColorArray().map(color=>{
//   return <CustomComponent
//     className="dot"
//     style={{backgroundColor:'rgb(color[0],color[1],color[2])'}}
//   />
// })
//
//
// ...then
//
// ...render(){
//   return(
//     <div className="matrix">
//       {matrix}
//     </div>
//   )
// }
