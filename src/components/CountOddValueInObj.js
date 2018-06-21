function findOdd(A) {
  const obj = {};
  A.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
  
  forv(key in obj) {
    if (obj[key] % 2 !== 0) return parseInt(key);
  }
}