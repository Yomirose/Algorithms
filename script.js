function analyzeSentence() {
    let sentence = '';
    let inputChar = '';

    while (inputChar !== '.') {
        inputChar = prompt('Enter a character (enter "." to end):');
        if (inputChar !== '.') {
            sentence += inputChar;
        } else {
            sentence += inputChar;
        }
    }

    // Calculate the length of the sentence
    const sentenceLength = sentence.length;

    // Calculate the number of words
    const words = sentence.split(' ').filter(word => word.length > 0);
    const wordCount = words.length;

    // Calculate the number of vowels
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

// Call the function
analyzeSentence();
