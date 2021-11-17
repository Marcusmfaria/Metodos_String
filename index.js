let info = "create table author (id number, name string, age number, city string, state string, country string)";

let tableName = info.substring(13,19);

let columns = [info.substring(21,30), info.substring(32,43), info.substring(45,55), info.substring(57,68), info.substring(70,81), info.substring(84,98)]

console.log(tableName);
console.log(columns);
