// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  const reg = new RegExp(/^[0-9]{4}$|^[0-9]{6}$/);
  return reg.test(pin);
}

function validatePIN2(pin) {
  return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}

console.log(validatePIN("2356"));
console.log(validatePIN("a356"));
console.log(validatePIN("235656"));
