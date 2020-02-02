

export const STOCK_ORACLE_ADDRESS =
"0x8dc7257a84d958808f7863081d2fd803fbe0ce94";
  // "0xdc544654fefd1a458eb24064a6c958b14e579154";

export const STOCK_ORACLE_ABI = [
  {
  "0xe8e77626586f73b955364c7b4bbf0bb7f7685ebd40e852b164633a4acbd3244c": [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "symbol",
          "type": "bytes4"
        }
      ],
      "name": "getStockPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "symbol",
          "type": "bytes4"
        }
      ],
      "name": "getStockVolume",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "symbol",
          "type": "bytes4"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "volume",
          "type": "uint256"
        }
      ],
      "name": "setStock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ]
}
];
