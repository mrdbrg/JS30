const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sorted = document.querySelector("#bands")

function strip(bandName) {
  return bandName.replace('/^(the |a |an )/i')
}

function displayNames(sortedBands) {
  const html = sortedBands.map(bands => {
    return `
      <li>
        ${bands}
      </li>
    `
  }).join("")
  sorted.innerHTML = html;
}

const sortedBands = bands.sort((a,b) => {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
})

displayNames(sortedBands)

console.log(sortedBands)