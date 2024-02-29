let result = document.getElementById('result');
let checkPalindrome = document.getElementById('check-btn');

checkPalindrome.addEventListener('click', function (e) {
  e.preventDefault();
  let textInputValue = document.getElementById('text-input').value;

  console.log(textInputValue.replace(/[^a-z0-9]/gi, '').toLowerCase());
  if (
    textInputValue
      .replace(/[^a-z0-9]/gi, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('') === textInputValue.replace(/[^a-z0-9]/gi, '').toLowerCase()
  ) {
    result.innerHTML = textInputValue + ' is a palindrome';
  } else {
    result.innerHTML = textInputValue + ' it is not a palindrome';
  }
});
