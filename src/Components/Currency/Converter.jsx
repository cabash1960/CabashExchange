import { Box, Container, Grid, Link, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import InputAmount from "./InputAmount";
import SwitchCurrency from "./SwitchCurrency";
import SelectCountry from "./SelectCountry";
import { CurrencyContext } from "../../context/CurrencyContext";

const Converter = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  useEffect(() => {
    if (firstAmount) {
      axios(
        "https://api.freecurrencyapi.com/v1/latest",
        {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            base_currency: codeFromCurrency,
            currencies: codeToCurrency,
          },
        }
      )
        .then((response) =>
          setResultCurrency(response.data.data[codeToCurrency])
        )
        .catch((error) => console.log(error));
    }
  }, [firstAmount, fromCurrency, toCurrency, codeFromCurrency, codeToCurrency]);

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    position: "relative",
  };

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontSize: "800" }}>
        International Conversion
      </Typography>

      {/* InputAmount component */}
      <InputAmount setFirstAmount={setFirstAmount} />

      {/* Grid container for "From" and "To" select boxes */}
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        {/* SelectCountry component for "From" */}
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
          
        />

        {/* SwitchCurrency component */}
        <SwitchCurrency />

        {/* SelectCountry component for "To" */}
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>

      {/* Display result if firstAmount exists */}
      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "5px", fontWeight: "bold" }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Converter;
