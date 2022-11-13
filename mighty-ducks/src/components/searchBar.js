import React from "react";
import 'material-icons/iconfont/material-icons.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

var userInputs = {
  origin: "",
  destination: ""
};
var IATACodes = ["ABR", "ABI", "ADK", "KKI", "AKI", "CAK", "KQA", "AUK", "ALM", "ALS", "ALB", "CVO", "QWY", "ABQ", "WKK", "AEX", "AET", "ABE", "AIA", "APN", "AOO", "AMA",
  "ABL", "AKP", "ANC", "AGN", "ANI", "ANV", "ATW", "ACV", "ARC", "AVL", "HTS", "ASE", "AHN", "AKB", "ATL", "AIY", "ATK", "AGS", "AUG", "AUS", "BFL", "BWI", "BGR", "BHB", "BRW",
  "BTI", "BTR", "MBS", "BPT", "ZBV", "WBQ", "BKW", "BED", "BLV", "BLI", "BJI", "BEH", "BET", "ABE", "BTT", "BIL", "GPT", "BGM", "KBC", "BHM", "BIS", "BID", "BMI", "BLF", "BOI",
  "BOS", "XHH", "WHH", "WBU", "BYA", "BWG", "BZN", "BFD", "BRD", "BWD", "QKB", "TRI", "BKX", "RBH", "BRO", "BQK", "BKC", "BUF", "IFP", "BUR", "BRL", "BTV", "BTM", "CAK", "CGI",
  "LUR", "EHM", "MDH", "CLD", "CNM", "MRY", "CPR", "CDC", "CID", "CEM", "CDR", "CIK", "CMI", "CHS", "CRW", "CLT", "CHO", "CHA", "CYF", "VAK", "CYS", "CHI", "MDW", "ORD", "CKX",
  "CIC", "KCG", "KCQ", "KCL", "CZN", "HIB", "CHU", "CVG", "CHP", "IRC", "CLP", "CKB", "PIE", "CLE", "CVN", "COD", "CFA", "KCC", "CDB", "CLL", "COS", "COU", "CAE", "CSG", "GTR",
  "CMH", "CCR", "CNK", "QCE", "CDV", "CRP", "CEZ", "CGA", "CEC", "CKO", "CUW", "CBE", "DAL", "DFW", "DAY", "DAB", "DEC", "DRG", "DRT", "DJN", "DEN", "QWM", "DSM", "DTT", "DTW",
  "DVL", "DIK", "DLG", "DDC", "DHN", "DUJ", "DBQ", "DLH", "DRO", "RDU", "RDU", "DUT", "ABE", "EAU", "EDA", "EEK", "KKU", "KEK", "IPL", "ELD", "ELP", "ELV", "ELI", "EKO", "ELM",
  "LYU", "EMK", "BGM", "WDG", "ERI", "ESC", "EUG", "ACV", "EUE", "EVV", "FAI", "FAR", "FMN", "FYV", "XNA", "FAY", "FLG", "FNT", "FLO", "MSL", "FNL", "QWF", "FOD", "FLL", "TBN",
  "RSW", "FSM", "VPS", "FWA", "FKL", "FAT", "GNV", "GUP", "GCK", "GYY", "GCC", "GGG", "GGW", "GDV", "GLV", "GNU", "JGC", "GCN", "GFK", "GRI", "GJT", "GRR", "GPZ", "KGX",
  "GTF", "GRB", "GSO", "GLH", "PGV", "GSP", "GON", "GPT", "GUC", "GST", "HGR", "SUN", "HNS", "PHF", "HNM", "PAK", "CMX", "LEB", "HRL", "MDT", "HRO", "BDL", "HAE", "HVR", "HDN",
  "HYS", "HKB", "HLN", "AVL", "HIB", "HKY", "GSO", "ITO", "HHH", "HBB", "HYL", "HCR", "HOM", "HNL", "MKK", "HNH", "HPB", "HOT", "HOU", "HOU", "IAH", "HUS", "HTS", "HSV", "HON",
  "HSL", "HYA", "HYG", "IDA", "IGG", "ILI", "IPL", "IND", "INL", "IYK", "IMT", "IWD", "ISP", "ITH", "JAC", "JAN", "MKL", "JAX", "OAJ", "JMS", "JHW", "JVL", "BGM", "TRI", "JST",
  "JBR", "JLN", "JNU", "OGG", "KAE", "KNK", "AZO", "LUP", "KLG", "KAL", "MUE", "MCI", "JHM", "KXA", "KUK", "LIH", "EAR", "EEN", "ENA", "KTN", "EYW", "QKS", "IAN", "GGG", "ILE",
  "KVC", "AKN", "IGM", "TRI", "KPN", "IRK", "KVL", "LMT", "KLW", "TYS", "OBU", "ADQ", "KOA", "KKH", "KOT", "OTZ", "KYU", "KWT", "KWK", "LSE", "LAF", "LFT", "LCH", "HII", "LMA",
  "LNY", "LNS", "LAN", "LAR", "LRD", "LAS", "LBE", "PIB", "LAW", "LEB", "KLL", "LWB", "LWS", "LWT", "LEX", "LBL", "LIH", "LNK", "LIT", "LGB", "GGG", "LPS", "LAX", "SDF", "FNL",
  "QWF", "LBB", "MCN", "MSN", "MDJ", "MHT", "MHK", "MBL", "MKT", "MLY", "KMO", "PKB", "MWA", "MQT", "MLL", "MVY", "AOO", "MCW", "MSS", "OGG", "MFE", "MCK", "MCG", "MFR", "MYU",
  "MLB", "MEM", "MCE", "MEI", "MTM", "WMK", "MIA", "MPB", "MBS", "MAF", "MLS", "MKE", "MSP", "MOT", "MNT", "MFE", "MSO", "CNY", "MOB", "MOD", "MLI", "MLU", "MRY", "MGM", "MTJ",
  "MGW", "MWH", "WMH", "MOU", "MSL", "MKG", "MYR", "ACK", "WNA", "PKA", "APF", "BNA", "NKI", "NLG", "NCN", "HVN", "KGK", "GON", "MSY", "KNW", "NYC", "JFK", "LGA", "EWR", "SWF",
  "PHF", "WWT", "NME", "NIB", "IKO", "WTK", "OME", "NNL", "ORV", "OFK", "ORF", "OTH", "LBF", "ORT", "NUI", "NUL", "NUP", "OAK", "MAF", "OGS", "OKC", "OMA", "ONT", "SNA", "ORL",
  "MCO", "OSH", "OTM", "OWB", "OXR", "PAH", "PGA", "PSP", "PFN", "PKB", "PSC", "PDB", "PEC", "PLN", "PDT", "PNS", "PIA", "KPV", "PSG", "PHL", "TTN", "PHX", "PIR", "UGB", "PIP",
  "PQS", "PIT", "PTU", "PLB", "PIH", "KPB", "PHO", "PIZ", "PNC", "PSE", "PTA", "CLM", "BPT", "KPC", "PTH", "PML", "PPV", "PCA", "PWM", "PDX", "PSM", "POU", "PRC", "PQI", "BLF",
  "PVD", "PVC", "SCC", "PUB", "PUW", "UIN", "KWN", "RDU", "RMP", "RAP", "RDG", "RDV", "RDD", "RDM", "RNO", "RHI", "RIC", "RIW", "ROA", "RCE", "RST", "ROC", "RKS", "ZRF", "ZRK",
  "RKD", "RSJ", "ROW", "RBY", "RSH", "RUT", "SMF", "MBS", "STC", "STG", "SGU", "STL", "KSM", "SMK", "SNP", "SLE", "SLN", "SBY", "SLC", "SJT", "SAT", "SAN", "SFO", "SJC", "SJU",
  "SBP", "SDP", "SFB", "SNA", "SBA", "SAF", "SMX", "STS", "SLK", "SRQ", "CIU", "SAV", "SVA", "SCM", "BFF", "AVP", "LKE", "SEA", "WLK", "SWD", "SHX", "SKK", "MSL", "SXP", "SHR",
  "SHH", "SHV", "SHG", "SVC", "SUX", "FSD", "SIT", "SGY", "SLQ", "SBN", "WSN", "SOP", "GSP", "GEG", "SPI", "SGF", "PIE", "SCE", "SHD", "SBS", "WBB", "CWA", "SVS", "SWF", "SCK",
  "SRV", "SUN", "SYR", "TCT", "TKA", "TLH", "TPA", "TAL", "TSM", "TEK", "KTS", "TEX", "TKE", "HUF", "TEH", "TXK", "TVF", "KTB", "TNC", "TOG", "TKJ", "OOK", "TOL", "FOE", "TVC",
  "TTN", "TUS", "TUL", "TLT", "WTL", "TNK", "TUP", "TCL", "TWF", "TWA", "TYR", "UNK", "CMI", "UCA", "UTO", "EGE", "QBF", "VDZ", "VLD", "VPS", "VEE", "OXR", "VEL", "VCT", "VIS",
  "ACT", "AIN", "WAA", "ALW", "WAS", "IAD", "DCA", "KWF", "ALO", "ART", "ATY", "CWA", "EAT", "PBI", "WYS", "HPN", "WST", "WSX", "WWP", "WMO", "LEB", "SPS", "ICT", "AVP", "PHF",
  "IPT", "ISN", "ILM", "BDL", "ORH", "WRL", "WRG", "YKM", "YAK", "COD", "YNG", "YUM"];

function searchBar() {
  return (
    <form method="GET" autoComplete="off">
    <div className="container">
        <div className="searchbars">
            <Row>
                <Col as="searchbarPosition">
                    <div className="searchbar-1">
                        <i className="material-icons">search</i><input id="origin" type="text" onKeyDown={updateOrigin} placeholder="Departing From..." method="GET" maxLength="3"/>
                    </div>
                </Col>
                <Col as="searchbarPosition">
                    <div className="searchbar-2">
                        <i className="material-icons">search</i><input id="destination" type="text" onKeyDown={updateDestination} placeholder="Arriving To..." method="POST" maxLength="3" />
                    </div>
                </Col>
                <Col as="searchbarPosition">
                <div className="searchbar-2">
                <a href="Bookings">
                            <button className="searchButton" type="button" value="Submit" onClick={saveInputs}>Go</button>
                        </a>
                        </div>
                </Col>

            </Row>
        </div>
    </div >
    </form>
);
}
export default searchBar;

async function updateOrigin() {
  userInputs.origin = document.getElementById("origin")
  autocomplete(userInputs.origin, IATACodes);
}

async function updateDestination() {
  userInputs.destination = document.getElementById("destination")
  autocomplete(userInputs.destination, IATACodes);
}

async function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode === 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

async function saveInputs() {
  if (userInputs.origin === "") {
    window.alert("Please fill all search parameters.")
  }else if (userInputs.destination === "") {
    alert("Please fill all search parameters.")
  }else{
    var userSend = {
      sendOrigin: userInputs.origin.value,
      sendDestination: userInputs.destination.value
    };
    console.log(userSend.sendOrigin, userSend.sendDestination)
     localStorage.setItem('_userOrigin', userSend.sendOrigin);
     localStorage.setItem('_userDestination', userSend.sendDestination);
     window.location.href = "/Bookings"
  }
}
