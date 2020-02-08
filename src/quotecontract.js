export const STOCK_ORACLE_ADDRESS =
  "0x509B540A251e46689A7A774545E4d9e62169f710";
// "0xdc544654fefd1a458eb24064a6c958b14e579154";

export const STOCK_ORACLE_ABI = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256"
      }
    ],
    name: "setStock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
