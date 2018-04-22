function telephoneCheck(str) {
  // US phone number = 10 digits (usually 3dgt-3dgt-4dgt)
  // area code required

  return /^(1(\s|\(?))?(\(\d{3}\)|\d{3})(\-|\s)?\d{3}(\-|\s)?\d{4}$/.test(str);

}



telephoneCheck(("757-622-7338"));
