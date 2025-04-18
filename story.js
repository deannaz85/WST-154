// filepath: c:\Users\Deanna Zercher\OneDrive\Desktop\WST154\Intro\Story\story.js
let protagonist = "Lila";
let setting = "a small, enchanted forest";
let goal = "find the hidden treasure";
let obstacle = "a mischievous talking fox";

let story = `${protagonist} lived in ${setting}. One day, she decided to ${goal}. However, her journey was not easy because she encountered ${obstacle}. 
The fox challenged her with riddles, and only by solving them could she continue her quest. 
After much thought and determination, Lila solved the riddles, befriended the fox, and together they found the treasure, which turned out to be a magical book of endless stories.`;

document.getElementById("story").textContent = story;