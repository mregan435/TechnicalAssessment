// Function to calculate the minimum number of steps to make a password strong
function minStepsToStrongPassword(password) {
  let steps = 0;

  // Check if the password is already strong
  if (isStrongPassword(password)) {
    return steps;
  }

  // Calculate the minimum steps to make the password strong
  steps += strongPasswordSteps(password);

  return steps;
}



// Function to check if a password is already strong
function isStrongPassword(password) {
  // Implementation of the strong password conditions
  const has_lower_case = /[a-z]/.test(password);
  const has_upper_case = /[A-Z]/.test(password);
  const has_numbers = /\d/.test(password);

  return (
    password.length >= 6 &&
    password.length <= 20 &&
    has_lower_case &&
    has_upper_case &&
    has_numbers &&
    hasRepeatingCharacters(password) === false
  );
}

// Function to check if a password has three repeating characters in a row
function hasRepeatingCharacters(password) {
  for (let i = 0; i < password.length - 2; i++) {
    if (
      password[i] === password[i + 1] &&
      password[i + 1] === password[i + 2]
    ) {
      return true;
    }
  }
  return false;
}

// Function to calculate the minimum number of steps to make a password strong
function strongPasswordSteps(password) {
  let steps = 0;

  // Insert or delete characters to meet the length requirement
  const length_differnce = Math.max(0, 6 - password?.length);
  steps += length_differnce;

  // Replace characters to meet the lowercase, uppercase, and digit requirements
  const has_lower_case = /[a-z]/.test(password);
  const has_upper_case = /[A-Z]/.test(password);
  const has_numbers = /\d/.test(password);

  // For each missing category, add a replace step
  if (has_lower_case === false) {
    steps++
  };

  if (has_upper_case === false) {
    steps++
  };

  if (has_numbers === false) {
    steps++
  };

  steps = Math.min(length_differnce, steps);

  return steps;
}


console.log(minStepsToStrongPassword("a")); // 5
console.log(minStepsToStrongPassword("aA1")); // 3
console.log(minStepsToStrongPassword("1337C0d3")); // 0

module.exports = minStepsToStrongPassword;