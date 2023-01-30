function solution(str, ending) {
  const endLength = ending.length;
  let x = str.slice(-endLength) === ending;
  return ending === '' ? true : str.slice(-endLength) === ending;
};

