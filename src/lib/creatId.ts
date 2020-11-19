let id: number = parseInt(window.localStorage.getItem('_idMax') || '1') || 1

function creatId(){
  id +=1
  return id
}

export default creatId