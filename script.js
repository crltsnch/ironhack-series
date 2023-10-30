let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

seriesPending.push('Silicon Valley');

for (let i = 0; i < seriesPending.length; i++) {
  console.log(seriesPending[i]);
  if (seriesPending[i] === 'Boolean 99') {
    console.log('Found it!');
  }
}

let seriesWhatching = [];
let ddd = seriesPending.shift();
seriesWhatching.push(ddd);

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

for (let i = 0; i < 4; i++) {
    let seriesWhatching = [];
    let ddd = seriesPending.shift();
    seriesWhatching.push(ddd);
}
console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);
