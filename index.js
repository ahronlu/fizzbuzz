const dictionary = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Boom',    // Additional key-value pair
  11: 'Bam',    // Another one
  13: 'Wham',   // You can continue adding more
  17: 'Zap'     // And more
};

for (let i = 1; i <= 100; i++) {
  let output = '';

  // Loop through the dictionary keys and check divisibility
  for (let divisor in dictionary) {
    if (i % divisor === 0) {
      output += dictionary[divisor];
    }
  }

  // If there's no output, print the number, otherwise print the output
  console.log(output || i);
}
