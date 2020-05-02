import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";

class SignupForm extends Component {
  render() {
    return (
      <Form>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={6} md={4}>
            <Paper
              elevation={4}
              style={{ padding: "20px 15px", marginTop: "30px" }}
            >
              <Typography variant="headline" gutterBottom>
                Signup
              </Typography>
              <FormControl
                fullWidth
                margin="normal"
                error={
                  this.props.touched.username && !!this.props.errors.username
                }
              >
                <InputLabel>Username</InputLabel>
                <Field
                  name="username"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {this.props.touched.username && (
                  <FormHelperText>{this.props.errors.username}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={this.props.touched.email && !!this.props.errors.email}
              >
                <InputLabel>Email</InputLabel>
                <Field
                  name="email"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {this.props.touched.email && (
                  <FormHelperText>{this.props.errors.email}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={
                  this.props.touched.password && !!this.props.errors.password
                }
              >
                <InputLabel>Password</InputLabel>
                <Field
                  name="password"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {this.props.touched.password && (
                  <FormHelperText>{this.props.errors.password}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Plan</InputLabel>
                <Select
                  // displayEmpty
                  name="plan"
                  value={this.props.values.plan}
                  onChange={this.props.handleChange}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="advance">Advance</MenuItem>
                  <MenuItem value="enterprise">Enterprise</MenuItem>
                </Select>
              </FormControl>
              <Field
                name="receiveLetter"
                type="checkbox"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Receive new letter"
                  />
                )}
              />
              <FormControl fullWidth margin="normal">
                <Button variant="extendedFab" color="primary" type="submit">
                  Signup
                </Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Form>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      username: "",
      email: "",
      password: "",
      receiveLetter: true,
      plan: "basic"
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    username: Yup.string()
      .required("Username is required")
      .min(5, "Username must have min 5 characters")
      .max(10, "Username have max 10 characters"),
    email: Yup.string()
      .required("email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have min 8 chacracters")
  })
})(SignupForm);

export default FormikForm;
