const userPrompt = prompt('Введите ваш текст:', 'текст');

// Наверняка можно укоротить все это, но я пришел только к такому методу, как
// вариант еще через charAt сделать.

const modifyString = (userText) => {
  let modifyUserTextToLower = userText.toLowerCase();
  
  let modifyUserText = modifyUserTextToLower[0].toUpperCase() +
  modifyUserTextToLower.slice(1);

  return modifyUserText;
};

console.log(modifyString(userPrompt));