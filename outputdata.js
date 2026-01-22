import {rawProducts} from "./inputdata.js";

const cleanProducts = rawProducts
  .filter(p => p.trim() && !/\d/.test(p))
  .map(p => {
    p = p.trim();
    return p[0].toUpperCase() + p.slice(1).toLowerCase();
  });

console.log(cleanProducts);