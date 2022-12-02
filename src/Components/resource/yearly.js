import React from "react";
import "./yearly.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Table from "../table.jsx";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default class Yearly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          Sno: "1",
          StationName: "Bina",
          stncode: "BINA",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "BPL",
          Date: "2019.11.29"
        },
        {
          Sno: "2",
          StationName: "Begumpet",
          stncode: "BMT",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "SC",
          Date: "2020.01.04"
        },
        {
          Sno: "3",
          StationName: "Khurda Road",
          stncode: "KUR",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2019.12.06"
        },
        {
          Sno: "4",
          StationName: "Jabalpur",
          stncode: "JBP",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2019.12.12"
        },
        {
          Sno: "5",
          StationName: "Barabanki",
          stncode: "BBK",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.03.17"
        },
        {
          Sno: "6",
          StationName: "Bhavnagar Terminus",
          stncode: "BVC",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Bhavnagar",
          Date: "2020.04.16"
        },
        {
          Sno: "7",
          StationName: "Nagercoil jn",
          stncode: "NCJ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.02.28"
        },
        {
          Sno: "8",
          StationName: "Udhana",
          stncode: "UDN",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Mumbai Central",
          Date: "2019.07.12"
        },
        {
          Sno: "9",
          StationName: "Ahmednagar",
          stncode: "ANG",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2020.02.14"
        },
        {
          Sno: "10",
          StationName: "Wardha",
          stncode: "WR",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "NGP",
          Date: "2019.02.14"
        },
        {
          Sno: "11",
          StationName: "Chengalpattu jn.",
          stncode: "CGL",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MAS",
          Date: "2019.12.14"
        },
        {
          Sno: "12",
          StationName: "Valsad",
          stncode: "BL",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Mumbai Central",
          Date: "2019.11.12"
        },
        {
          Sno: "13",
          StationName: "Lingampalli",
          stncode: "LPI",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "SC",
          Date: "2019.12.16"
        },
        {
          Sno: "14",
          StationName: "Bellary",
          stncode: "BAY",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "2019.12.31"
        },
        {
          Sno: "15",
          StationName: "Vasco-Da-Gama",
          stncode: "VSG",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "2019.12.17"
        },
        {
          Sno: "16",
          StationName: "Jamui",
          stncode: "JMU",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2021.08.24"
        },
        {
          Sno: "17",
          StationName: "Parashnath",
          stncode: "PNME",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "2020.01.17"
        },
        {
          Sno: "18",
          StationName: "Amravati",
          stncode: "AMI",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "BSL",
          Date: "2019.12.12"
        },
        {
          Sno: "19",
          StationName: "JAMALPUR",
          stncode: "JMP",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ER",
          Division: "MLDT",
          Date: "2020.06.27"
        },
        {
          Sno: "20",
          StationName: "MADHUPUR",
          stncode: "MDP",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ER",
          Division: "ASN",
          Date: "2020.03.17"
        },
        {
          Sno: "21",
          StationName: "GURGAON",
          stncode: "GGN",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2019.12.11"
        },
        {
          Sno: "22",
          StationName: "JALNA",
          stncode: "J",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "NED",
          Date: "2019.12.27"
        },
        {
          Sno: "23",
          StationName: "Jagadhri",
          stncode: "JUD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2020.05.19"
        },
        {
          Sno: "24",
          StationName: "Rajpura Jn.",
          stncode: "RPJ",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2019.12.14"
        },
        {
          Sno: "25",
          StationName: "Mahoba",
          stncode: "MBA",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2020.05.13"
        },
        {
          Sno: "26",
          StationName: "Sirhind Jn.",
          stncode: "SIR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2020.05.10"
        },
        {
          Sno: "27",
          StationName: "Phaphund",
          stncode: "PHD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "ALD",
          Date: "2020.01.14"
        },
        {
          Sno: "28",
          StationName: "Tundla",
          stncode: "TDL",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "ALD",
          Date: "2020.01.25"
        },
        {
          Sno: "29",
          StationName: "Kumbakonam",
          stncode: "KMU",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TPJ",
          Date: "2020.03.02"
        },
        {
          Sno: "30",
          StationName: "Virudhunagar jn",
          stncode: "VPT",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2020.02.23"
        },
        {
          Sno: "31",
          StationName: "Palanpur",
          stncode: "PNU",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Ahmedabad",
          Date: "2020.01.24"
        },
        {
          Sno: "32",
          StationName: "Hardoi",
          stncode: "HRI",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.02.25"
        },
        {
          Sno: "33",
          StationName: "Shoranur jn.",
          stncode: "SRR",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2019.12.31"
        },
        {
          Sno: "34",
          StationName: "Chandrapur",
          stncode: "CD",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "NGP",
          Date: "2020.02.03"
        },
        {
          Sno: "35",
          StationName: "Kathgodam",
          stncode: "KGM",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Izzatnagar",
          Date: "2020.03.09"
        },
        {
          Sno: "36",
          StationName: "Unnao",
          stncode: "ON",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2019.12.13"
        },
        {
          Sno: "37",
          StationName: "Pali Marwar",
          stncode: "PMY",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jodhpur",
          Date: "2019.12.31"
        },
        {
          Sno: "38",
          StationName: "Rudrapur City",
          stncode: "RUPC",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Izzatnagar",
          Date: "2020.06.26"
        },
        {
          Sno: "39",
          StationName: "Siwan Jn.",
          stncode: "SV",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2020.04.28"
        },
        {
          Sno: "40",
          StationName: "Barpeta Road",
          stncode: "BPRD",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "RNY",
          Date: "2020.01.15"
        },
        {
          Sno: "41",
          StationName: "Bongaigaon",
          stncode: "BNGN",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "RNY",
          Date: "2020.02.09"
        },
        {
          Sno: "42",
          StationName: "Coochbehar",
          stncode: "COB",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "APDJ",
          Date: "2020.09.04"
        },
        {
          Sno: "43",
          StationName: "Veraval",
          stncode: "VRL",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Bhavnagar",
          Date: "2019.12.13"
        },
        {
          Sno: "44",
          StationName: "Purnea Jn",
          stncode: "PRNA",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "KIR",
          Date: "2020.01.23"
        },
        {
          Sno: "45",
          StationName: "Raiganj",
          stncode: "RGJ",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "KIR",
          Date: "2020.03.12"
        },
        {
          Sno: "46",
          StationName: "Tinsukia",
          stncode: "TSK",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "TSK",
          Date: "2020.07.02"
        },
        {
          Sno: "47",
          StationName: "BALLABGARH",
          stncode: "BVH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.07.22"
        },
        {
          Sno: "48",
          StationName: "Bhadrak",
          stncode: "BHC",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2019.12.23"
        },
        {
          Sno: "49",
          StationName: "Jajpur-Keonjhar Road",
          stncode: "JJKR",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2019.12.16"
        },
        {
          Sno: "50",
          StationName: "Bhilai Power House",
          stncode: "BPHB",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "SECR",
          Division: "R",
          Date: "2019.12.14"
        },
        {
          Sno: "51",
          StationName: "Chandausi",
          stncode: "CH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.02.06"
        },
        {
          Sno: "52",
          StationName: "FARIDABAD",
          stncode: "FDB",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.11.02"
        },
        {
          Sno: "53",
          StationName: "Brahmapur",
          stncode: "BAM",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2019.12.11"
        },
        {
          Sno: "54",
          StationName: "Chengannur",
          stncode: "CNGR",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.05"
        },
        {
          Sno: "55",
          StationName: "Ongole",
          stncode: "OGL",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "BZA",
          Date: "2020.03.03"
        },
        {
          Sno: "56",
          StationName: "Dharmabad",
          stncode: "DAB",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "HYB",
          Date: "2019.12.20"
        },
        {
          Sno: "57",
          StationName: "Basti",
          stncode: "BST",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2019.12.24"
        },
        {
          Sno: "58",
          StationName: "Jalandhar city",
          stncode: "JRC",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2021.02.08"
        },
        {
          Sno: "59",
          StationName: "Rewa",
          stncode: "REWA",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2019.12.20"
        },
        {
          Sno: "60",
          StationName: "Jaunpur",
          stncode: "JNU",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.06.10"
        },
        {
          Sno: "61",
          StationName: "Khandwa",
          stncode: "KNW",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "BSL",
          Date: "2019.12.24"
        },
        {
          Sno: "62",
          StationName: "Burhanpur",
          stncode: "BAU",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "BSL",
          Date: "2019.12.12"
        },
        {
          Sno: "63",
          StationName: "Kolhapur",
          stncode: "KOP",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "2020.07.10"
        },
        {
          Sno: "64",
          StationName: "Latur",
          stncode: "LUR",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2020.03.19"
        },
        {
          Sno: "65",
          StationName: "Shegaon",
          stncode: "SEG",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "BSL",
          Date: "2020.03.16"
        },
        {
          Sno: "66",
          StationName: "Rajkot",
          stncode: "RJT",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Rajkot",
          Date: "2019.12.26"
        },
        {
          Sno: "67",
          StationName: "Shimla",
          stncode: "SML",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2019.12.15"
        },
        {
          Sno: "68",
          StationName: "Jammu",
          stncode: "JAT",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2019.12.16"
        },
        {
          Sno: "69",
          StationName: "Tirur",
          stncode: "TIR",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.02.07"
        },
        {
          Sno: "70",
          StationName: "Naziababad",
          stncode: "NBD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.10.26"
        },
        {
          Sno: "71",
          StationName: "Shahganj",
          stncode: "SHG",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.06.26"
        },
        {
          Sno: "72",
          StationName: "Shahjahanpur",
          stncode: "SPN",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.04.21"
        },
        {
          Sno: "73",
          StationName: "Gandhidham",
          stncode: "GIM",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Ahmedabad",
          Date: "2020.01.22"
        },
        {
          Sno: "74",
          StationName: "Orai",
          stncode: "ORAI",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2019.12.26"
        },
        {
          Sno: "75",
          StationName: "Partapgarh",
          stncode: "PBH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.03.09"
        },
        {
          Sno: "76",
          StationName: "Alwar",
          stncode: "AWR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2019.12.20"
        },
        {
          Sno: "77",
          StationName: "Bangarpet",
          stncode: "BWT",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2020.02.14"
        },
        {
          Sno: "78",
          StationName: "Viramgam",
          stncode: "VG",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Ahmedabad",
          Date: "2020.08.02"
        },
        {
          Sno: "79",
          StationName: "Bandikui",
          stncode: "BKI",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2020.04.22"
        },
        {
          Sno: "80",
          StationName: "Kovilpatti (Dindugal)",
          stncode: "DG",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2019.12.31"
        },
        {
          Sno: "81",
          StationName: "Mayiladuthurai jn.",
          stncode: "MV",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TPJ",
          Date: "2020.02.27"
        },
        {
          Sno: "82",
          StationName: "Thanjavur jn",
          stncode: "TJ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TPJ",
          Date: "2020.02.07"
        },
        {
          Sno: "83",
          StationName: "Hanumangarh Jn.",
          stncode: "HMH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Bikaner",
          Date: "2020.04.22"
        },
        {
          Sno: "84",
          StationName: "Lalgarh",
          stncode: "LGH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Bikaner",
          Date: "2020.03.05"
        },
        {
          Sno: "85",
          StationName: "Hassan",
          stncode: "HAS",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "MYS",
          Date: "2019.12.20"
        },
        {
          Sno: "86",
          StationName: "Nagaur",
          stncode: "NGO",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jodhpur",
          Date: "2020.03.04"
        },
        {
          Sno: "87",
          StationName: "Ballarshah",
          stncode: "BPQ",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "NGP",
          Date: "2020.01.16"
        },
        {
          Sno: "88",
          StationName: "Palasa",
          stncode: "PSA",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2019.12.28"
        },
        {
          Sno: "89",
          StationName: "Sri Ganganagar",
          stncode: "SGNR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Bikaner",
          Date: "2020.05.07"
        },
        {
          Sno: "90",
          StationName: "Bandel",
          stncode: "BDC",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ER",
          Division: "HWH",
          Date: "2020.01.12"
        },
        {
          Sno: "91",
          StationName: "Rae - Bareli Jn.",
          stncode: "RBL",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2019.12.26"
        },
        {
          Sno: "92",
          StationName: "Vadakara",
          stncode: "BDJ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.03.09"
        },
        {
          Sno: "93",
          StationName: "PIPARIYA",
          stncode: "PPI",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "209.12.22"
        },
        {
          Sno: "94",
          StationName: "Hatia",
          stncode: "HTE",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "SER",
          Division: "RNC",
          Date: "2020.01.13"
        },
        {
          Sno: "95",
          StationName: "Alappuzha",
          stncode: "ALLP",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.17"
        },
        {
          Sno: "96",
          StationName: "Nagda",
          stncode: "NAD",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Ratlam",
          Date: "2020.02.03"
        },
        {
          Sno: "97",
          StationName: "Belthara Road",
          stncode: "BLTR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2019.12.26"
        },
        {
          Sno: "98",
          StationName: "PANIPAT",
          stncode: "PNP",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2019.12.25"
        },
        {
          Sno: "99",
          StationName: "Sultanpur",
          stncode: "SLN",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2019.12.23"
        },
        {
          Sno: "100",
          StationName: "Kanniyakumari",
          stncode: "CAPE",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.12"
        },
        {
          Sno: "101",
          StationName: "Jolarpettai Jn",
          stncode: "JTJ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MAS",
          Date: "2020.03.04"
        },
        {
          Sno: "102",
          StationName: "Kannur",
          stncode: "CAN",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.03.06"
        },
        {
          Sno: "103",
          StationName: "Karur jn.",
          stncode: "KRR",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "SA",
          Date: "2020.05.07"
        },
        {
          Sno: "104",
          StationName: "Navsari",
          stncode: "NVS",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Mumbai Central",
          Date: "2019.10.12"
        },
        {
          Sno: "105",
          StationName: "Tiruvalla",
          stncode: "TRVL",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.16"
        },
        {
          Sno: "106",
          StationName: "Bhadohi",
          stncode: "BOY",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.03.13"
        },
        {
          Sno: "107",
          StationName: "Etawah",
          stncode: "ETW",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "ALD",
          Date: "2020.02.13"
        },
        {
          Sno: "108",
          StationName: "Aburoad",
          stncode: "ABR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2019.12.31"
        },
        {
          Sno: "109",
          StationName: "Khalilabad",
          stncode: "KLD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2020.03.01"
        },
        {
          Sno: "110",
          StationName: "Janghai",
          stncode: "JNH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.01.14"
        },
        {
          Sno: "111",
          StationName: "Suratgarh",
          stncode: "SOG",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Bikaner",
          Date: "2020.01.21"
        },
        {
          Sno: "112",
          StationName: "Beas",
          stncode: "BES",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2019.12.28"
        },
        {
          Sno: "113",
          StationName: "Palakkad jn.",
          stncode: "PGT",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.05.27"
        },
        {
          Sno: "114",
          StationName: "SONIPAT",
          stncode: "SNP",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.01.05"
        },
        {
          Sno: "115",
          StationName: "Mau Jn.",
          stncode: "MAU",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2019.12.31"
        },
        {
          Sno: "116",
          StationName: "Aluva",
          stncode: "AWY",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.16"
        },
        {
          Sno: "117",
          StationName: "Belgeum",
          stncode: "BGM",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2020.01.21"
        },
        {
          Sno: "118",
          StationName: "Pathankot",
          stncode: "PTK",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2020.01.23"
        },
        {
          Sno: "119",
          StationName: "Tiruppur",
          stncode: "TUP",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "SA",
          Date: "2020.02.29"
        },
        {
          Sno: "120",
          StationName: "Bangalore Cantt.",
          stncode: "BNC",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2020.03.12"
        },
        {
          Sno: "121",
          StationName: "VAPI",
          stncode: "VAPI",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Mumbai Central",
          Date: "2020.03.01"
        },
        {
          Sno: "122",
          StationName: "Raja ki mandi",
          stncode: "RKM",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "AGC",
          Date: "2020.02.12"
        },
        {
          Sno: "123",
          StationName: "Villupuram jn.",
          stncode: "VM",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TPJ",
          Date: "2020.03.19"
        },
        {
          Sno: "124",
          StationName: "Azamgarh",
          stncode: "AMH",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2020.04.26"
        },
        {
          Sno: "125",
          StationName: "Deoria Sadar",
          stncode: "DEOS",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2020.01.02"
        },
        {
          Sno: "126",
          StationName: "Jorhat Town",
          stncode: "JTTN",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "TSK",
          Date: "2020.03.15"
        },
        {
          Sno: "127",
          StationName: "Hapur",
          stncode: "HPU",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.01.03"
        },
        {
          Sno: "128",
          StationName: "Falna",
          stncode: "FA",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2020.01.05"
        },
        {
          Sno: "129",
          StationName: "BHARATPUR",
          stncode: "BTE",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "KOTA",
          Date: "2020.04.08"
        },
        {
          Sno: "130",
          StationName: "MAIHAR",
          stncode: "MYR",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2019.12.27"
        },
        {
          Sno: "131",
          StationName: "Srikakulam road",
          stncode: "CHE",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECoR",
          Division: "WAT",
          Date: "2020.01.07"
        },
        {
          Sno: "132",
          StationName: "KARNAL",
          stncode: "KUN",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.01.02"
        },
        {
          Sno: "133",
          StationName: "HOSHANGABAD",
          stncode: "HBD",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "BPL",
          Date: "2020.03.20"
        },
        {
          Sno: "134",
          StationName: "Phagwara",
          stncode: "PGW",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2020.05.10"
        },
        {
          Sno: "135",
          StationName: "ROHTAK",
          stncode: "ROK",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.01.04"
        },
        {
          Sno: "136",
          StationName: "Agra Fort",
          stncode: "AF",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "AGC",
          Date: "2020.02.18"
        },
        {
          Sno: "137",
          StationName: "Firozpur Cantt.",
          stncode: "FZR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2020.01.02"
        },
        {
          Sno: "138",
          StationName: "Marwar Jn.",
          stncode: "MJ",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2020.05.16"
        },
        {
          Sno: "139",
          StationName: "Kasargod",
          stncode: "KGQ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.03.11"
        },
        {
          Sno: "140",
          StationName: "Payyannur",
          stncode: "PAY",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.04.13"
        },
        {
          Sno: "141",
          StationName: "Erode jn",
          stncode: "ED",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "SA",
          Date: "2020.05.06"
        },
        {
          Sno: "142",
          StationName: "Kanhangad",
          stncode: "KZE",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.05.24"
        },
        {
          Sno: "143",
          StationName: "Salem jn",
          stncode: "SA",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "SA",
          Date: "2020.03.01"
        },
        {
          Sno: "144",
          StationName: "Lalitpur",
          stncode: "LAR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2020.03.02"
        },
        {
          Sno: "145",
          StationName: "Thalassery",
          stncode: "TLY",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.03.09"
        },
        {
          Sno: "146",
          StationName: "Ballia",
          stncode: "BUI",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2020.01.20"
        },
        {
          Sno: "147",
          StationName: "Gonda Jn.",
          stncode: "GD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2020.02.25"
        },
        {
          Sno: "148",
          StationName: "Chhapra Jn",
          stncode: "CPR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NER",
          Division: "BSB",
          Date: "2020.02.24"
        },
        {
          Sno: "149",
          StationName: "Gandhinagar-Jp",
          stncode: "GADJ",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2020.02.22"
        },
        {
          Sno: "150",
          StationName: "Mokama",
          stncode: "MKA",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "Err:509",
          Division: "DNR",
          Date: "2020.01.20"
        },
        {
          Sno: "151",
          StationName: "Rewari",
          stncode: "RE",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "JP",
          Date: "2020.01.02"
        },
        {
          Sno: "152",
          StationName: "Nellore",
          stncode: "NLR",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "BZA",
          Date: "2020.03.03"
        },
        {
          Sno: "153",
          StationName: "Rampur",
          stncode: "RMU",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.02.10"
        },
        {
          Sno: "154",
          StationName: "New Bhuj",
          stncode: "NBVJ",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Ahmedabad",
          Date: "2020.10.07"
        },
        {
          Sno: "155",
          StationName: "Bhilwara",
          stncode: "BHL",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2020.01.22"
        },
        {
          Sno: "156",
          StationName: "Tuticorin",
          stncode: "TN",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2020.02.27"
        },
        {
          Sno: "157",
          StationName: "Tirumayilai",
          stncode: "MTMY",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "MAS",
          Date: "2020.03.02"
        },
        {
          Sno: "158",
          StationName: "Mangalore Jn.",
          stncode: "MAJN",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "PGT",
          Date: "2020.03.12"
        },
        {
          Sno: "159",
          StationName: "Shimoga Town",
          stncode: "SMET",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "MYS",
          Date: "2020.02.22"
        },
        {
          Sno: "160",
          StationName: "NAIHATI JN.",
          stncode: "NH",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ER",
          Division: "SDAH",
          Date: "2020.02.25"
        },
        {
          Sno: "161",
          StationName: "KURNOOL TOWN",
          stncode: "KRNT",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SCR",
          Division: "HYB",
          Date: "2020.03.11"
        },
        {
          Sno: "162",
          StationName: "Kayankulam jn",
          stncode: "KYJ",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.11"
        },
        {
          Sno: "163",
          StationName: "Betul",
          stncode: "BZU",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "NGP",
          Date: "2020.01.25"
        },
        {
          Sno: "164",
          StationName: "Lonavala",
          stncode: "LNL",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "CR",
          Division: "BB",
          Date: "2020.02.06"
        },
        {
          Sno: "165",
          StationName: "Kottayam",
          stncode: "KTYM",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.15"
        },
        {
          Sno: "166",
          StationName: "Kota",
          stncode: "KOTA",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WCR",
          Division: "KOTA",
          Date: "2020.10.06"
        },
        {
          Sno: "167",
          StationName: "Krishnarajapuram",
          stncode: "KJM",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2020.02.14"
        },
        {
          Sno: "168",
          StationName: "Surendra Nagar",
          stncode: "SUNR",
          Phase: "Phase-IB",
          Region: "WR",
          Zone: "WR",
          Division: "Rajkot",
          Date: "2020.01.14"
        },
        {
          Sno: "169",
          StationName: "Chandra Pura Jn.",
          stncode: "CRP",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "2020.11.24"
        },
        {
          Sno: "170",
          StationName: "Chopan",
          stncode: "CPU",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "2020.02.11"
        },
        {
          Sno: "171",
          StationName: "Renukut",
          stncode: "RNQ",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "2020.02.10"
        },
        {
          Sno: "172",
          StationName: "Barh",
          stncode: "BARH",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2020.06.19"
        },
        {
          Sno: "173",
          StationName: "Jhajha",
          stncode: "JAJ",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2021.01.27"
        },
        {
          Sno: "174",
          StationName: "Luckee sarai",
          stncode: "LKR",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "In Progress"
        },
        {
          Sno: "175",
          StationName: "Begusarai",
          stncode: "BGS",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "SEE",
          Date: "2020.09.12"
        },
        {
          Sno: "176",
          StationName: "Mansi Jn.",
          stncode: "MNE",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "SEE",
          Date: "2020.06.21"
        },
        {
          Sno: "177",
          StationName: "Sitamarhi",
          stncode: "SMI",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "SPJ",
          Date: "In Progress"
        },
        {
          Sno: "178",
          StationName: "Rajgir",
          stncode: "RGD",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2020.10.03"
        },
        {
          Sno: "179",
          StationName: "Hasanpur Road",
          stncode: "GHD",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "In Progress"
        },
        {
          Sno: "180",
          StationName: "Biharsharif",
          stncode: "BEHS",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2020.10.11"
        },
        {
          Sno: "181",
          StationName: "Sultanganj in liu of Sahibganj",
          stncode: "SBG",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "ER",
          Division: "MLDT",
          Date: "2021.08.26"
        },
        {
          Sno: "182",
          StationName: "Alipurduwar Junction",
          stncode: "APDJ",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "APDJ",
          Date: "2021.08.28"
        },
        {
          Sno: "183",
          StationName: "New Alipurduwar",
          stncode: "NOQ",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "APDJ",
          Date: "2021.08.31"
        },
        {
          Sno: "184",
          StationName: "New Coochbehar",
          stncode: "NCB",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "APDJ",
          Date: "In Progress"
        },
        {
          Sno: "185",
          StationName: "Samsi",
          stncode: "SM",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "KIR",
          Date: "2020.09.21"
        },
        {
          Sno: "186",
          StationName: "Agartala",
          stncode: "AGTL",
          Phase: "Phase-IB",
          Region: "ER",
          Zone: "NFR",
          Division: "LMG",
          Date: "2020.03.18"
        },
        {
          Sno: "187",
          StationName: "Sikohabad",
          stncode: "SKB",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "AGC",
          Date: "2020.03.11"
        },
        {
          Sno: "188",
          StationName: "Firozabad",
          stncode: "FZD",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "AGC",
          Date: "2020.05.15"
        },
        {
          Sno: "189",
          StationName: "Prayag Ghat",
          stncode: "PYG",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.03.02"
        },
        {
          Sno: "190",
          StationName: "Amethi",
          stncode: "AME",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.06.19"
        },
        {
          Sno: "191",
          StationName: "Ambala",
          stncode: "UMB",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2020.12.31"
        },
        {
          Sno: "192",
          StationName: "Faridabad New Town",
          stncode: "FDN",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2020.11.06"
        },
        {
          Sno: "193",
          StationName: "SSP Nilayam",
          stncode: "SSPN",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2020.01.25"
        },
        {
          Sno: "194",
          StationName: "Saharnpur",
          stncode: "SRE",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "UMB",
          Date: "2020.08.27"
        },
        {
          Sno: "195",
          StationName: "Hisar",
          stncode: "HSR",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "BKN",
          Date: "2020.01.15"
        },
        {
          Sno: "196",
          StationName: "Bhiwani",
          stncode: "BNW",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "BKN",
          Date: "2020.01.29"
        },
        {
          Sno: "197",
          StationName: "Banda",
          stncode: "BNDA",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2020.01.16"
        },
        {
          Sno: "198",
          StationName: "Morena",
          stncode: "MRA",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2020.03.12"
        },
        {
          Sno: "199",
          StationName: "Phulera",
          stncode: "FL",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2020.01.04"
        },
        {
          Sno: "200",
          StationName: "Ernakulam town",
          stncode: "ERN",
          Phase: "Phase-IB",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2020.03.13"
        },
        {
          Sno: "201",
          StationName: "Phulpur",
          stncode: "PLP",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NR",
          Division: "LKO",
          Date: "2020.06.10"
        },
        {
          Sno: "202",
          StationName: "Jaiselmer",
          stncode: "JSM",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "JODHPUR",
          Date: "2020.02.05"
        },
        {
          Sno: "203",
          StationName: "Udaipur city",
          stncode: "UDZ",
          Phase: "Phase-IB",
          Region: "NR",
          Zone: "NWR",
          Division: "AII",
          Date: "2020.03.12"
        },
        {
          Sno: "204",
          StationName: "HABIBGANJ",
          stncode: "HBJ",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WCR",
          Division: "BPL",
          Date: "2020.06.15"
        },
        {
          Sno: "205",
          StationName: "Bharuch",
          stncode: "BH",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "In Progress"
        },
        {
          Sno: "206",
          StationName: "Ankeleshwar",
          stncode: "AKV",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "2021.03.27"
        },
        {
          Sno: "207",
          StationName: "Sawai Madhopur",
          stncode: "SWM",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WCR",
          Division: "KOTA",
          Date: "2020.11.09"
        },
        {
          Sno: "208",
          StationName: "Godhara",
          stncode: "GDA",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "2021.06.01"
        },
        {
          Sno: "209",
          StationName: "Vadodara",
          stncode: "BRC",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "2020.12.24"
        },
        {
          Sno: "210",
          StationName: "Nadiad Jn",
          stncode: "ND",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "2021.07.01"
        },
        {
          Sno: "211",
          StationName: "Anand",
          stncode: "ANND",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "WR",
          Division: "Vadodara",
          Date: "2020.10.31"
        },
        {
          Sno: "212",
          StationName: "Babina",
          stncode: "BAB",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2021.01.14"
        },
        {
          Sno: "213",
          StationName: "Datia",
          stncode: "DAA",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2020.10.11"
        },
        {
          Sno: "214",
          StationName: "Badshahnagar",
          stncode: "BNZ",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2021.01.09"
        },
        {
          Sno: "215",
          StationName: "Mankapur Jn.",
          stncode: "MUR",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2021.03.26"
        },
        {
          Sno: "216",
          StationName: "Sitapur",
          stncode: "STP",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NER",
          Division: "Lucknow",
          Date: "2021.02.08"
        },
        {
          Sno: "217",
          StationName: "JIND",
          stncode: "JHI",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NR",
          Division: "CDG",
          Date: "2020.01.02"
        },
        {
          Sno: "218",
          StationName: "Phillaur",
          stncode: "PHR",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NR",
          Division: "FZR",
          Date: "2021.06.04"
        },
        {
          Sno: "219",
          StationName: "Amroha",
          stncode: "AMRO",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2021.06.02"
        },
        {
          Sno: "220",
          StationName: "Beawar",
          stncode: "BER",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2020.12.14"
        },
        {
          Sno: "221",
          StationName: "Dausa",
          stncode: "DO",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2020.08.01"
        },
        {
          Sno: "222",
          StationName: "Kishangarh",
          stncode: "KSG",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NWR",
          Division: "Jaipur",
          Date: "2021.02.25"
        },
        {
          Sno: "223",
          StationName: "Roorkee",
          stncode: "RK",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2020.11.17"
        },
        {
          Sno: "224",
          StationName: "Rani",
          stncode: "RN",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NWR",
          Division: "Ajmer",
          Date: "2020.09.24"
        },
        {
          Sno: "225",
          StationName: "Barmer",
          stncode: "BME",
          Phase: "Phase-IBV",
          Region: "NR",
          Zone: "NWR",
          Division: "Jodhpur",
          Date: "2020.09.24"
        },
        {
          Sno: "226",
          StationName: "Angul",
          stncode: "ANGL",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2020.12.15"
        },
        {
          Sno: "227",
          StationName: "Dhenkanal",
          stncode: "DNKL",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "KUR",
          Date: "2021.01.12"
        },
        {
          Sno: "228",
          StationName: "Balangir",
          stncode: "BLGR",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "SBP",
          Date: "2021.07.01"
        },
        {
          Sno: "229",
          StationName: "Titlagarh JN.",
          stncode: "TIG",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "SBP",
          Date: "2021.06.01"
        },
        {
          Sno: "230",
          StationName: "Jagdalpur",
          stncode: "JDB",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "WAT",
          Date: "2021.06.30"
        },
        {
          Sno: "231",
          StationName: "Koraput",
          stncode: "KRPU",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ECoR",
          Division: "WAT",
          Date: "2021.08.16"
        },
        {
          Sno: "232",
          StationName: "CHITTARANJAN",
          stncode: "CRJ",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ER",
          Division: "ASN",
          Date: "2021.08.18"
        },
        {
          Sno: "233",
          StationName: "RANIGANJ",
          stncode: "RNG",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ER",
          Division: "ASN",
          Date: "2021.08.12"
        },
        {
          Sno: "234",
          StationName: "BERHAMPUR COURT",
          stncode: "BPC",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "ER",
          Division: "SDAH",
          Date: "In Progress"
        },
        {
          Sno: "235",
          StationName: "Bhatapara",
          stncode: "BYT",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "SECR",
          Division: "R",
          Date: "2021.04.11"
        },
        {
          Sno: "236",
          StationName: "Tilda",
          stncode: "TLD",
          Phase: "Phase-IBV",
          Region: "ER",
          Zone: "SECR",
          Division: "R",
          Date: "2021.05.25"
        },
        {
          Sno: "237",
          StationName: "SAMALKOT JN.",
          stncode: "SLO",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "BZA",
          Date: "In Progress"
        },
        {
          Sno: "238",
          StationName: "TUNI",
          stncode: "TUNI",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "BZA",
          Date: "2020.12.16"
        },
        {
          Sno: "239",
          StationName: "KDAPAH",
          stncode: "HX",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "GTL",
          Date: "2020.12.26"
        },
        {
          Sno: "240",
          StationName: "NAGARSOL",
          stncode: "NSL",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "NED",
          Date: "2020.12.12"
        },
        {
          Sno: "241",
          StationName: "MANCHIRYAL",
          stncode: "MCI",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "SC",
          Date: "2020.12.13"
        },
        {
          Sno: "242",
          StationName: "Davangere",
          stncode: "DVG",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "MYS",
          Date: "2021.04.05"
        },
        {
          Sno: "243",
          StationName: "Bijapur",
          stncode: "BJP",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "2021.04.06"
        },
        {
          Sno: "244",
          StationName: "Dharwad",
          stncode: "DWR",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "In Progress"
        },
        {
          Sno: "245",
          StationName: "Kengeri",
          stncode: "KGI",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "2021.04.06"
        },
        {
          Sno: "246",
          StationName: "Hospet",
          stncode: "HPT",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "2020.11.24"
        },
        {
          Sno: "247",
          StationName: "Kovilpatti",
          stncode: "CVP",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2020.12.17"
        },
        {
          Sno: "248",
          StationName: "Tirunelveli jn",
          stncode: "TEN",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2020.12.17"
        },
        {
          Sno: "249",
          StationName: "ADILABAD",
          stncode: "ADB",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "NED",
          Date: "2021.02.18"
        },
        {
          Sno: "250",
          StationName: "MUDKHED JN.",
          stncode: "MUE",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "NED",
          Date: "In Progress"
        },
        {
          Sno: "251",
          StationName: "PARLI VAIJNATH",
          stncode: "PRLI",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SCR",
          Division: "SC",
          Date: "2021.02.06"
        },
        {
          Sno: "252",
          StationName: "Haveri",
          stncode: "HVR",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "MYS",
          Date: "In Progress"
        },
        {
          Sno: "253",
          StationName: "Banaswadi",
          stncode: "BAND",
          Phase: "Phase-IBV",
          Region: "SR",
          Zone: "SWR",
          Division: "SBC",
          Date: "In Progress"
        },
        {
          Sno: "254",
          StationName: "Cotton Green",
          stncode: "CTGN",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "BB",
          Date: "In Progress"
        },
        {
          Sno: "255",
          StationName: "Dock Yard Rd",
          stncode: "DKRD",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "BB",
          Date: "In Progress"
        },
        {
          Sno: "256",
          StationName: "Dapodi",
          stncode: "DAPD",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "2021.08.12"
        },
        {
          Sno: "257",
          StationName: "Kasarwadi",
          stncode: "KSWD",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "2021.08.10"
        },
        {
          Sno: "258",
          StationName: "Khadki",
          stncode: "KK",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "In Progress"
        },
        {
          Sno: "259",
          StationName: "Pimpri",
          stncode: "PMP",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "In Progress"
        },
        {
          Sno: "260",
          StationName: "Shivajinagar",
          stncode: "SVJR",
          Phase: "Phase-IBV",
          Region: "WR",
          Zone: "CR",
          Division: "PA",
          Date: "In Progress"
        },
        {
          Sno: "261",
          StationName: "Daund",
          stncode: "DD",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2018.05.19"
        },
        {
          Sno: "262",
          StationName: "Gulbarga",
          stncode: "KLBG",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2018.04.27"
        },
        {
          Sno: "263",
          StationName: "Kopargaon",
          stncode: "KPG",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2018.05.19"
        },
        {
          Sno: "264",
          StationName: "Kurduwadi",
          stncode: "KWV",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2018"
        },
        {
          Sno: "265",
          StationName: "Sainagar Shirdi",
          stncode: "SNSI",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "CR",
          Division: "SUR",
          Date: "2018"
        },
        {
          Sno: "266",
          StationName: "Sambalpur",
          stncode: "SBP",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ECoR",
          Division: "SBP",
          Date: "2018"
        },
        {
          Sno: "267",
          StationName: "Rayagada",
          stncode: "RGDA",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ECoR",
          Division: "WAT",
          Date: "2018"
        },
        {
          Sno: "268",
          StationName: "Vizianagaram",
          stncode: "VZM",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ECoR",
          Division: "WAT",
          Date: "2018"
        },
        {
          Sno: "269",
          StationName: "Singrauli",
          stncode: "SGRL",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ECR",
          Division: "DHN",
          Date: "2018"
        },
        {
          Sno: "270",
          StationName: "Danapur",
          stncode: "DNR",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ECR",
          Division: "DNR",
          Date: "2018"
        },
        {
          Sno: "271",
          StationName: "JASIDIH",
          stncode: "JSME",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ER",
          Division: "ASN",
          Date: "2018"
        },
        {
          Sno: "272",
          StationName: "Rampurhat",
          stncode: "RPH",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ER",
          Division: "HWH",
          Date: "2018"
        },
        {
          Sno: "273",
          StationName: "BHAGALPUR",
          stncode: "BGP",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "ER",
          Division: "MLDT",
          Date: "2018"
        },
        {
          Sno: "274",
          StationName: "Aligarh",
          stncode: "ALJN",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NCR",
          Division: "ALD",
          Date: "2020.03.05"
        },
        {
          Sno: "275",
          StationName: "Gwalior",
          stncode: "GWL",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NCR",
          Division: "JHS",
          Date: "2018"
        },
        {
          Sno: "276",
          StationName: "Ghazipur City",
          stncode: "GCT",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NER",
          Division: "Varanasi",
          Date: "2018"
        },
        {
          Sno: "277",
          StationName: "Adarshnagardelhi",
          stncode: "ANDI",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "278",
          StationName: "MEERUT CANTT.",
          stncode: "MUT",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "279",
          StationName: "MEERUT CITY",
          stncode: "MTC",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "280",
          StationName: "NANGLOI",
          stncode: "NNO",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "281",
          StationName: "SHAKURBASTI",
          stncode: "SSB",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "282",
          StationName: "SUBZI MANDI",
          stncode: "SZM",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "DLI",
          Date: "2018"
        },
        {
          Sno: "283",
          StationName: "Dehradun",
          stncode: "DDN",
          Phase: "Phase-IA",
          Region: "NR",
          Zone: "NR",
          Division: "MB",
          Date: "2018"
        },
        {
          Sno: "284",
          StationName: "RAJAHMUNDRY",
          stncode: "RJY",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SCR",
          Division: "BZA",
          Date: "2018.12.18"
        },
        {
          Sno: "285",
          StationName: "GUNTUR JN.",
          stncode: "GNT",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SCR",
          Division: "GNT",
          Date: "2018.03.27"
        },
        {
          Sno: "286",
          StationName: "AURANGABAD",
          stncode: "AWB",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SCR",
          Division: "NED",
          Date: "2018.03.13"
        },
        {
          Sno: "287",
          StationName: "WARANGAL",
          stncode: "WL",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SCR",
          Division: "SC",
          Date: "2018"
        },
        {
          Sno: "288",
          StationName: "Balasore",
          stncode: "BLS",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "SER",
          Division: "KGP",
          Date: "2018"
        },
        {
          Sno: "289",
          StationName: "Digha",
          stncode: "DGHA",
          Phase: "Phase-IA",
          Region: "ER",
          Zone: "SER",
          Division: "KGP",
          Date: "2018"
        },
        {
          Sno: "290",
          StationName: "Arakkonam jn",
          stncode: "AJJ",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SR",
          Division: "MAS",
          Date: "2018.03.01"
        },
        {
          Sno: "291",
          StationName: "Rameswaram",
          stncode: "RMM",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SR",
          Division: "MDU",
          Date: "2018.07.10"
        },
        {
          Sno: "292",
          StationName: "Mettupalaiyam",
          stncode: "MTP",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SR",
          Division: "SA",
          Date: "2018"
        },
        {
          Sno: "293",
          StationName: "Kollam jn",
          stncode: "QLN",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2018.07.10"
        },
        {
          Sno: "294",
          StationName: "Thrisur",
          stncode: "TCR",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SR",
          Division: "TVC",
          Date: "2018"
        },
        {
          Sno: "295",
          StationName: "Hubli",
          stncode: "UBL",
          Phase: "Phase-IA",
          Region: "SR",
          Zone: "SWR",
          Division: "UBL",
          Date: "2018.07.10"
        },
        {
          Sno: "296",
          StationName: "VIDISHA",
          stncode: "BHS",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "WCR",
          Division: "BPL",
          Date: "2018.07.27"
        },
        {
          Sno: "297",
          StationName: "DAMOH",
          stncode: "DMO",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2018"
        },
        {
          Sno: "298",
          StationName: "KATNI",
          stncode: "KTE",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2018.01.10"
        },
        {
          Sno: "299",
          StationName: "SATNA",
          stncode: "STA",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2018.01.09"
        },
        {
          Sno: "300",
          StationName: "SAGAR",
          stncode: "SGO",
          Phase: "Phase-IA",
          Region: "WR",
          Zone: "WCR",
          Division: "JBP",
          Date: "2018.01.12"
        }
      ]
    };
  }
  render() {
    return (
      <>
        <div stlye={{}}>
          <Accordion>
            <div className="head-yearly">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography>
                  <div>
                    <h4>Total Stations Completed + Work in Progress</h4>
                  </div>
                </Typography>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography className="col-12">
                <Table data={this.state.tableData} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  }
}
