function solution(str, ending) { 
  const a = str;
  const b = ending.length;
  let x = a.slice(-b) === ending;
  if (ending === '') {
    x = a.slice(b) !== ending;
  }
  return x;
}
