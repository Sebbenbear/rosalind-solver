/* Expects an array and a callback. */
module.exports = {
  countNucleotides: (input, callback) => {
    let (a = 0, t = 0, g = 0, c = 0);
    for(let i = 0; i < dna.length; i++){
      switch(dna.charAt(i)){
        case 'a' : a++; break;
        case 'c' : c++; break;
        case 'g'  : g++; break;
        case 't' : t++; break;
      }
    return (`${a} ${c} ${g} ${t}`);
  }
}
