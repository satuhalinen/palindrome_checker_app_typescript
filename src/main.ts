import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <div class="palindromePicture">
  <p>Welcome to use palindrome checker app!</p>
  <input type="text" onchange="searchHandler()" />
  <p></p>
</div>
  </div>
`

