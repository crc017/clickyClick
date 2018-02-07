import tiles from "./tiles.json";


var randomTiles = tiles.sort(function(a, b){return 0.5 - Math.random()});

export default randomTiles;
