function solution(str, ending) { 
  const a = str;
  const lenE = ending.length;
  let x = a.slice(-lenE) === ending;
  if (ending === '') {
    x = a.slice(lenE) !== ending;
  }
  return x;
}