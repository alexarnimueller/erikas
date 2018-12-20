
var d = new Date().getDate();
var raster = new Raster('mols/' + d.toString() + '.png');
raster.scale(0.25);
raster.position = view.center;

var mols = ["Vancomycin", "Linezolid", "Daptomycin", "Quinupristin", "Dalfopristin", "Rifampicin", "Tetracycline",
    "Trimethoprim", "Sulfamethoxazole", "Clindamycin", "Telavancin"];
console.log(mols[d - 1]);
document.getElementById('wiki').setAttribute("href", "https://en.wikipedia.org/wiki/" + mols[d - 1]);