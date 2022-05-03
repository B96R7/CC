// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// // If both characters are letters, but not the same case, return 0
function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
      return -1
    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    }else{
      return 0
    }
  }

//   You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

//   PT92 - 17 bullets
//   M4A1 - 30 bullets
//   M16A2 - 30 bullets
//   PSG1 - 5 bullets
  function magNumber(info){
    const [gun, street] = info;
    let magzines = 0;
    switch(gun){
        case('PT92'):
        magzines = Math.ceil((street * 3) / 17);
        break;
        case('M4A1'):
        magzines = Math.ceil((street * 3) / 30);
        break;
        case('M16A2'):
        magzines = Math.ceil((street * 3) / 30);
        break;
        case('PSG1'):
        magzines = Math.ceil((street * 3) / 5);
        break;
    }
    return magzines;
  }