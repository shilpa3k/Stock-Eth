import React from "react";
import Web3 from "web3";
import { STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS } from "./quotecontract";
import "./App.css";
import "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

// FM15CT1NBDLTAC08

// Web3 provider
const web3 = new Web3("http://localhost:8545");

//contract name
const stockQuote = new web3.eth.Contract(
  STOCK_ORACLE_ABI,
  STOCK_ORACLE_ADDRESS
);

function App() {
  const [stock, setStock] = React.useState(
    fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=FM15CT1NBDLTAC08"
    )
      .then(res => res.json())
      .then(data => {
        setStock({ quote: data["Global Quote"] });
      })
      .catch(console.log)
  );
  const [price, setPrice] = React.useState("");
  const [volume, setVolume] = React.useState("");

  const setData = async e => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("Account 0 = ", accounts[0]);
    const result = await stockQuote.methods
      .setStock(price, volume)
      .send({ from: account });
    console.log(result);
  };

  const getData = async e => {
    e.preventDefault();
    var retval = await stockQuote.methods
      .getStockPrice(web3.utils.fromAscii("AAAA"))
      .call();
    console.log(retval);
  };

  return (
    <div className="box m-auto">
      <div className="App-Content">
        <Form>
          <FormControl fullWidth>
            <div>
              <TextField label="Symbol" fullWidth />
            </div>
            <Box m={1} />
            <div>
              <TextField
                type="Number"
                label="Price"
                fullWidth
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            <Box m={1} />
            <div>
              <TextField
                type="Number"
                label="Volume"
                fullWidth
                onChange={e => setVolume(e.target.value)}
              />
            </div>
            <Box m={3} />
            <Button onClick={setData} variant="contained" color="primary">
              Submit
            </Button>
            <Box m={3} />
            <div className="form-group">
              <TextField label="Symbol Search" fullWidth />
              <Box m={3} />
              <Button onClick={getData} variant="contained" color="primary">
                Search
              </Button>
            </div>
          </FormControl>
        </Form>
      </div>
    </div>
  );
}

export default App;
