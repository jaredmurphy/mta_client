export function linesToJson(lines) {
  var trains = [];
  lines.forEach( line => {
    line.name.split("").forEach(train => {
      trains.push({name: train, status: line.status});
    });
  });
  return trains;
}

export function selectColor(lineName){
  switch(lineName) {
    case '1': case '2':  case '3':
        return {backgroundColor: '#EC000A'};
        break;
    case '4':  case '5':  case '6':
        return {backgroundColor: '#008000'};
        break;
    case '7':
        return {backgroundColor: '#800080'};
        break;
    case 'A':  case 'C':  case 'E':
        return {backgroundColor: '#0032FF'};
        break;
    case 'B':  case 'D':  case 'F':  case 'M':
        return {backgroundColor: '#FF5900'};
        break;
    case 'G':
        return {backgroundColor: '#69DB3D'};
        break;
    case 'J':  case 'Z':
        return {backgroundColor: '#7A5001'};
        break;
    case 'L':  case 'S':
        return {backgroundColor: '#999999'};
        break;
    case 'N':  case 'Q':  case 'R':
        return {backgroundColor: '#FFD900'};
        //$(this).children('a').css('color','black')
        break;
  }
}
