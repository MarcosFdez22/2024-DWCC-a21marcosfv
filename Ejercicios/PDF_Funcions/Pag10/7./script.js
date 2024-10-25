function CheckDni(string) {
  if (string.length !== 9) {
    return false;
  } else {
    let num = parseInt(string.substring(0, 8));
    let letra = string.substring(8, 9);
    let resto = num % 23;
    let letraReal = "";
    switch (resto) {
      case 0:
        letraReal = "T";
        break;
      case 1:
        letraReal = "R";
        break;
      case 2:
        letraReal = "W";
        break;
      case 3:
        letraReal = "A";
        break;
      case 4:
        letraReal = "G";
        break;
      case 5:
        letraReal = "M";
        break;
      case 6:
        letraReal = "Y";
        break;
      case 7:
        letraReal = "F";
        break;
      case 8:
        letraReal = "P";
        break;
      case 9:
        letraReal = "D";
        break;
      case 10:
        letraReal = "X";
        break;
      case 11:
        letraReal = "B";
      case 12:
        letraReal = "N";
        break;
      case 13:
        letraReal = "J";
        break;
      case 14:
        letraReal = "Z";
        break;
      case 15:
        letraReal = "S";
        break;
      case 16:
        letraReal = "Q";
        break;
      case 17:
        letraReal = "V";
        break;
      case 18:
        letraReal = "H";
        break;
      case 19:
        letraReal = "L";
        break;
      case 20:
        letraReal = "C";
        break;
      case 21:
        letraReal = "K";
        break;
      case 22:
        letraReal = "E";
        break;
    }
    if (letra == letraReal) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(CheckDni("77483520Q"));
