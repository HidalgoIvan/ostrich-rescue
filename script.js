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

const cancelBtn = document.getElementById('cancel-btn');
const overlay = document.getElementById('overlay');
const ovSpinner = document.getElementById('ov-spinner');
const ovCheck = document.getElementById('ov-check');
const ovText = document.getElementById('ov-text');

cancelBtn.addEventListener('click', () => {
  if (!overlay.classList.contains('hidden')) return;
  ovSpinner.classList.remove('hidden');
  ovCheck.classList.add('hidden');
  ovText.textContent = 'Loading...';
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    ovSpinner.classList.add('hidden');
    ovCheck.classList.remove('hidden');
    ovText.textContent = 'Thank you for helping the cause! A second ostrich has been ordered to your address. We take care to ship male and female pairs to ensure maximum offspring potential.';
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }, 10000);
  }, 3000);
});
