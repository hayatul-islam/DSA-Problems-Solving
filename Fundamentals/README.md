# String to Array Utility

### 1. String to Array

Write a function to split a string and convert it into an array of words.

```text
Examples (Input ==> Output):
"Hello World" ==> ["Hello", "World"]
```

```javascript
function stringToArray(string) {
  // your code
}
```

### Solution

To view the solution, use the toggle button below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toggle Solution</title>
    <style>
      #solution {
        display: none;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <button id="toggleSolution">Show Solution</button>
    <div id="solution">
      <pre>
function stringToArray(string) {
  return string.split(" ");
}

function stringToArray2(string) {
  return string.trim() ? string.split(" ") : [];
}
    </pre
      >
    </div>

    <script>
      const toggleButton = document.getElementById("toggleSolution");
      const solutionDiv = document.getElementById("solution");

      toggleButton.addEventListener("click", () => {
        if (solutionDiv.style.display === "none") {
          solutionDiv.style.display = "block";
          toggleButton.textContent = "Hide Solution";
        } else {
          solutionDiv.style.display = "none";
          toggleButton.textContent = "Show Solution";
        }
      });
    </script>
  </body>
</html>
```
