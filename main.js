//variables that store references to text fields, randomize button and the p element that the story will be copied to
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const mainCharacter = document.getElementById('maincharacter');
const storyLocation = document.getElementById('storylocation');
//function that takes the array and returns one of the items stored in the array at random
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
//base story text and variables that will be inserted in place of placeholders after randomized
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy The Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'DisneyLand', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
//add event listener that runs result function on click
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText; //variable newstory has value of storyText const
  //grabs random value from each array
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem); //replaces place holder with random value from above
  newStory = newStory.replaceAll(':insertz:', zItem);
  //checks if text field has input, if so replaces bob in story with user input name
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }
  //checks if text field has input if so, replaces xitem with user input
  if (mainCharacter.value !== '') {
    const main = mainCharacter.value;
    newStory = newStory.replace(xItem, main);
  }
  //checks if text field has input, if so replaces yitem with user input
  if (storyLocation.value !== '') {
    const location = storyLocation.value;
    newStory = newStory.replace(yItem, location);
  }
  //checks if radio button is checked, if so convers pounds and fahrenheit to stone and centigrade
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' Stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' Centigrade';
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
  }

  story.textContent = newStory; //changes text content of p element to newStory value
  story.style.visibility = 'visible'; //changes css style from hidden to visible to show story
}