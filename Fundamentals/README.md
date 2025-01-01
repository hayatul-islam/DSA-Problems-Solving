### Problem 1: Write a function to split a string and convert it into an array of words.

### Examples

```text
Examples (Input ==> Output):
"Hello World" ==> ["Hello", "World"]
```

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
