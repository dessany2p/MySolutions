function solution(str, ending) {
  const endLength = ending.length;
  return ending === '' ? true : str.slice(-endLength) === ending;
};
