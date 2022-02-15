import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { constants } from "../../Constants/constants";
import { btnstyle, textField } from "../Login/style";

const LoginForm = () => {
  type Order = { orderNumber: string; email: string };

  const [orderData, setorderData] = useState<Order>({
    orderNumber: "",
    email: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setorderData({
      ...orderData,
      [name]: value,
    });
  };

  const submit = (e: any) => {
    const params = new URLSearchParams({
      shopOrigin: "culture-kings-2.myshopify.com",
      orderNumber: orderData.orderNumber,
      email: orderData.email,
    });
    const url = `${constants.url}?${params.toString()}`;
    e.preventDefault();
    window.location.replace(url);
  };

  return (
    <div className="App">
      <form>
        <TextField
          name="orderNumber"
          value={orderData.orderNumber}
          onChange={handleInputChange}
          style={textField}
          className="inputRounded"
          variant="outlined"
          label="Order number"
          placeholder="Order number"
          fullWidth
        />
        <TextField
          onChange={handleInputChange}
          style={textField}
          name="email"
          className="inputRounded"
          variant="outlined"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
          value={orderData.email}
        />

        <Button
          disabled={!orderData.orderNumber && !orderData.email}
          type="submit"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={submit}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
