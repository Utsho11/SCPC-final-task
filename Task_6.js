// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword = (length) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  
    const allChars = uppercase + lowercase + number + specialChars;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generatePassword(passwordLength);
  console.log("Generated Password:", randomPassword);