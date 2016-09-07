export function linesToJson(lines) {
  var trains = [];
  lines.forEach( line => {
    line.name.split("").forEach(train => {
      trains.push({name: train, status: line.status});
    });
  });
  return trains;
}
