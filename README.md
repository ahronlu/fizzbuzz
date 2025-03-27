```markdown
# FizzBuzz Dictionary Challenge

This is a JavaScript implementation of the FizzBuzz challenge, enhanced to support multiple divisors through a dictionary (object) of key-value pairs. You can add any number of divisors and their corresponding output strings.

## How It Works

- The program loops through numbers from 1 to 100.
- For each number, it checks if the number is divisible by any of the divisors in the dictionary.
- If it is divisible by one or more divisors, it prints the corresponding output string(s).
- If it is not divisible by any of the divisors, it simply prints the number itself.

## Example Output

If the dictionary contains the following pairs:
```javascript
{
  3: 'Fizz',
  5: 'Buzz',
  7: 'Boom'
}
```

The output for numbers from 1 to 15 will be:
```
1
2
Fizz
4
Buzz
Fizz
Boom
8
Fizz
Buzz
11
Fizz
Boom
14
FizzBuzz
```

## Customizing the Dictionary

You can modify the `dictionary` object in the script to add more divisors and corresponding output strings. For example, you can add a divisor of 13 for "Wham", or any other divisors that suit your needs.

### Example:

```javascript
const dictionary = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Boom',
  11: 'Bam',
  13: 'Wham'
};
```

## How to Run

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/ahronlu/fizzbuzz.git
   ```

2. Navigate to the project directory:
   ```
   cd fizzbuzz-dictionary
   ```

3. Open the `fizzbuzz.js` file in a text editor of your choice.

4. Run the script in a browser console or Node.js environment:
   ```
   node fizzbuzz.js
   ```
```
