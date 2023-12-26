
$("h2").text("Touch screen to start!");


$(document).click(function(){

    $("h1").text("");
    $("h2").text("Touch screen to start!");
    $("h3").text("");
    $("h4").text("");

var routeName = prompt("What is your route?");
var routeNameIdiotProof = routeName.toLowerCase().slice(0,4);
var spot = "Check entire row!"

var southYardRoutes     = ["idae",      "idce",     "idde",     "idee",     "idfe",     "idge",     "idle",     "idne",     "idoe",     "idre",     "idrh",     "idse",     "idue",     "idwe",     "idxe",     "idze",     "impe",     "imph",     "impj",     "impo",     "impr",     "imps"];
var southTrailerRow     = ["O",         "S",        "O",        "O",        "N",        "O",        "N",        "O",        "M",        "Q",        "Q",        "Q",        "Q",        "P",        "N",        "Q",        "R",        "P",        "R",        "P",        "S",        "R"];
var southTrailerSpot    = ["1 - 5",     "10 - 12",  "12 - 15",  "16 - 17",  "6 - 11",   "6 - 9",    "12 - 16",  "22 - 24",  "27 - 33",  "16 - 19",  "13 - 15",  "20 - 29",  "10 - 12",  "19 - 22",  "2 - 5",    "1 - 9",    "2 - 19",   "1 - 17",   "20 - 21",  "23 - 26",  "4 - 5",    "22 - 33"]

var northYardRoutes     = ["idam",      "idaw",     "idbm",     "idcm",     "iddw",     "idem",     "idew",     "idfm",     "idfw",     "idgm",     "idhw",     "idiw",     "idjw",     "idkm",     "idlw",     "idmm",     "idnw",     "idom",     "idow",     "idpm",     "idpw",     "idqm",     "idqw",     "idrm",     "idsm",     "idtm",     "idwm",     "idww",     "idyw",     "idzm",     "impa",     "impb",     "impc",     "impl",     "impu",     "impw"];
var northTrailerRow     = ["E",         "G",        "C",        "D",        "D",        "E",        "C",        "C",        "H",        "C",        "G",        "E",        "H",        "B",        "H",        "D",        "G",        "C",        "H",        "C",        "H",        "C",        "B",        "B",        "C",        "D",        "D",        "H",        "D",        "H",        "F",        "F",        "D",        "D",        "F",        "E"];
var northTrailerSpot    = ["24 - 27",   "7 - 12",   "29 - 33",  "15 - 17",  "31 - 36",  "31 - 33",  "37 - 40",  "22 - 25",  "21 - 24",  "26 - 28",  "13 - 23",  "21 - 23",  "32 - 37",  "26 - 32",  "20",       "18-22",    "24 - 33",  "34 - 36",  "15 - 19",  "1 - 5",    "5 - 6",    "11 - 13",  "33 - 37",  "20 - 25",  "9 - 10",   "37 - 40",  "23 - 24",  "7 - 14",   "25 - 28",  "25 - 31",  "25 - 37",  "10 - 12",  "1 - 6",    "7 - 14",   "18 - 21",  "0 - 21"];

var osYardRoutes        = ["idaf",      "idat",     "idav",     "idbt",     "idcf",     "idct",     "idcv",     "iddt",     "idff",     "idft",     "idfv",     "idhe",     "idie",     "idif",     "idje",     "idlf",     "idlt",     "idlv",     "idme",     "idmf",     "idmt",     "idmv",     "idot",     "idpv",     "idqv",     "idtt",     "iduf",     "idvv",     "idyt",     "idzv",     "impf",     "impn",     "impt",     "impv"];
var osTrailerRow        = ["H",         "F",        "F",        "F",        "H",        "F",        "F",        "F",        "H",        "F",        "F",        "I",        "I",        "H",        "H",        "H",        "F",        "G",        "I",        "I",        "G",        "G",        "G",        "G",        "G",        "I",        "I",        "I",        "G",        "G",        "H",        "I",        "G",        "G"];
var osTrailerSpot       = ["23 - 28",   "1 - 8",    "9 - 12",   "13 - 19",  "29 - 31",  "56 - 59",  "20 - 24",  "25 - 37",  "32 - 36",  "38 - 42",  "49 - 55",  "1 - 10",   "26 - 30",  "37 - 42",  "43 - 48",  "49 - 56",  "60 - 64",  "1 - 6",    "11 - 16",  "17 - 20",  "7 - 10",   "11 - 16",  "17 - 19",  "20 - 32",  "38 - 43",  "32 - 34",  "21 - 25",  "35 - 37",  "33 - 35",  "36 - 37",  "1 - 22",   "38 - 41",  "45 - 47",  "48 - 57"];

var bushmanYardRoutes   = ["idar",      "iddr",     "idfr",     "idke",     "idmr",     "idpd",     "idvd",     "idxl",     "impd",     "impg",     "impk"];
var bushmanTrailerRow   = ["F",         "F",        "D",        "D",        "C",        "C",        "C",        "B",        "D",        "B",        "D"];
var bushmanTrailerSpot  = ["5 - 11",    "12 - 16",  "1 - 4",    "5 - 9",    "1 - 18",   "19 - 22",  "23 - 25",  "10 - 17",  "27 - 28",  "1 - 5",    "20 - 26"];

var pscYardRoutes       = ["idty",      "iduy",     "idxy",     "idzy",     "impx",     "impy",     "impz"];
var pscTrailerRow       = ["F",         "F",        "F",        "F",        "F",        "F",        "F"];
var pscTrailerSpot      = ["20 - 24",   "30 - 32",  spot,       "25 - 27",  spot,       spot,       spot];

if (southYardRoutes.includes(routeNameIdiotProof)) {
    $("h1").text("Route: " + routeName.toUpperCase().slice(0,4));
    $("h2").text("South Yard (GATE 2)");
    var southRouteList = southYardRoutes.indexOf(routeNameIdiotProof);
    $("h3").text("Row: " + southTrailerRow[southRouteList] + "\xa0\xa0\xa0\xa0\xa0" +  "Spot: " +  southTrailerSpot[southRouteList]);
    $("h4").text("Touch screen for new entry");
    

    } else if (northYardRoutes.includes(routeNameIdiotProof)) {
    $("h1").text("Route: " + routeName.toUpperCase().slice(0,4));
    $("h2").text("North Yard (GATE 1)");
    var northRouteList = northYardRoutes.indexOf(routeNameIdiotProof);
    $("h3").text("Row: " + northTrailerRow[northRouteList] + "\xa0\xa0\xa0" +  "Spot: " +  northTrailerSpot[northRouteList]);
    $("h4").text("Touch screen for new entry");


    } else if (osYardRoutes.includes(routeNameIdiotProof)) {
    $("h1").text("Route: " + routeName.toUpperCase().slice(0,4));
    $("h2").text("OS YARD (GATE 1)");
    var osRouteList = osYardRoutes.indexOf(routeNameIdiotProof);
    $("h3").text("Row: " + osTrailerRow[osRouteList] + "\xa0\xa0\xa0" +  "Spot: " +  osTrailerSpot[osRouteList]);
    $("h4").text("Touch screen for new entry");
    
    
    } else if (bushmanYardRoutes.includes(routeNameIdiotProof)) {
    $("h1").text("Route: " + routeName.toUpperCase().slice(0,4));
    $("h2").text("BUSHMAN LOT (GATE 2)");
    var bushmanRouteList = bushmanYardRoutes.indexOf(routeNameIdiotProof);
    $("h3").text("Row: " + bushmanTrailerRow[bushmanRouteList] + "\xa0\xa0\xa0" +  "Spot: " +  bushmanTrailerSpot[bushmanRouteList]);
    $("h4").text("Touch screen for new entry");
    

    } else if (pscYardRoutes.includes(routeNameIdiotProof)) {
    $("h1").text("Route: " + routeName.toUpperCase().slice(0,4));
    $("h2").text("PSC LOT");
    var pscRouteList = pscYardRoutes.indexOf(routeNameIdiotProof);
    $("h3").text("Row: " + pscTrailerRow[pscRouteList] + "\xa0\xa0\xa0" +  "Spot: " +  pscTrailerSpot[pscRouteList]);
    $("h4").text("Touch screen for new entry");
    
    
    } else {
    $("h2").text("Route does't exist. Touch screen to try again.");
}

});
