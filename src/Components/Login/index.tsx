import { Grid, Paper } from "@material-ui/core";
import LoginForm from "../LoginForm";
import LogoRefundid from "../Logos/Refundid";
import { footerLogin, paperStyle } from "./style";

const Login = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      item 
      lg={6}
    >
      <Paper className="paperStyle" elevation={10} style={paperStyle}>
        <Grid>
          <h1>Enter your order number</h1>
        </Grid>
        <LoginForm />
        <div  style={footerLogin}>
          <LogoRefundid />
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
