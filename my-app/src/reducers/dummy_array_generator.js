export default const dummyColorArray=()=>{
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
    for (let i = 0; i < 2084; i++){
      initialState.push(makeEachDot())
    }
    return initialState()
  }
  makeDummyArray()
}
