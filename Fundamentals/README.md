### 1. String to Array

Write a function to split a string and convert it into an array of words.

```javascript
Examples (Input ==> Output):
"Hello World" ==> ["Hello", "World"]

function stringToArray(string) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
Way 1: String to array
function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Hello World"));

Way 2: Handles empty strings
function stringToArray2(string) {
  return string.trim() ? string.split(" ") : [];
}

console.log(stringToArray2("Hello World"));
```

</details>
