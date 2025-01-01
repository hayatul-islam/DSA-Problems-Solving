# String to Array Utility

This project provides a utility to split a string and convert it into an array of words. It includes two implementations of the function: `stringToArray` and `stringToArray2`.

## Examples

**Input**

```text
"Hello World"
```

**Output**

```text
["Hello", "World"]
```

## Code

### Function: `stringToArray`

Splits a string into an array of words using the `.split(" ")` method.

```javascript
function stringToArray(string) {
  return string.split(" ");
}
```

### Function: `stringToArray2`

Handles edge cases by checking if the string contains meaningful content before splitting.

```javascript
function stringToArray2(string) {
  return string.trim() ? string.split(" ") : [];
}
```

## Usage

### Example Usage

```javascript
console.log(stringToArray("Hello World"));
// Output: ["Hello", "World"]

console.log(stringToArray2("Hello World"));
// Output: ["Hello", "World"]

console.log(stringToArray2("   "));
// Output: []
```

## Toggle and Close Example

To use a toggle and close option for this functionality, you can implement a UI with a button to show or hide the output:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toggle Example</title>
    <style>
      #output {
        display: none;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <button id="toggleButton">Show Output</button>
    <div id="output"></div>

    <script>
      const toggleButton = document.getElementById("toggleButton");
      const outputDiv = document.getElementById("output");

      toggleButton.addEventListener("click", () => {
        if (outputDiv.style.display === "none") {
          outputDiv.style.display = "block";
          outputDiv.textContent = JSON.stringify(stringToArray2("Hello World"));
          toggleButton.textContent = "Close Output";
        } else {
          outputDiv.style.display = "none";
          toggleButton.textContent = "Show Output";
        }
      });

      function stringToArray2(string) {
        return string.trim() ? string.split(" ") : [];
      }
    </script>
  </body>
</html>
```
