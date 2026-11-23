const spinner = document.getElementById('spinner');
const check = document.getElementById('check');
const text = document.getElementById('loader-text');
const loader = document.getElementById('loader');
const result = document.getElementById('result');

setTimeout(() => {
  spinner.classList.add('hidden');
  check.classList.remove('hidden');
  text.textContent = "User's address pulled from Customink's database!";
  setTimeout(() => {
    loader.classList.add('hidden');
    result.classList.remove('hidden');
  }, 3000);
}, 3000);
