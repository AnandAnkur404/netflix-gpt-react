export const checkValidData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    
    const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.text(password);
  
    if(!isEmailValid) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}