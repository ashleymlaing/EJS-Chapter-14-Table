const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  document.write("<table><tr><th>Name</th><th>Height</th><th>Place</th></tr>");

  for (var i = 0; i < MOUNTAINS.length; i++) {
    document.write("<tr><td>"+ MOUNTAINS[i].name +"</td><td>"+ MOUNTAINS[i].height +"</td><td>"+ MOUNTAINS[i].place +"</td></tr>");
  }
  document.write("</table>");
