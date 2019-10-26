import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { CustomButton } from "./../../components/controls/CustomButton.jsx";
import { InputField } from "./../../components/controls/Fields.jsx";
// import history from "./../../_helpers/history";
// Local imports
import { loginActions, loginSelectors } from "./ducks";
import { bindActionCreators } from "redux"

// Presentational component: Login
class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  static getDerivedStateFromProps(nextProps, state) {
    let newProps = {}

    if (nextProps.error !== state.error) {
      newProps.error = nextProps.error
      // newProps.loading = false

    }

    return {
      ...newProps
    }
  }

  componentWillUnmount() {
  }

  handleSubmit(values) {
    this.setState({
      // error: undefined,
      loading: true,
    });
    const { username, password } = values;
    this.props.loginActions.login({
      username,
      password
    });
  }

  render() {
    const { error, loading } = this.state;
    const { hasError, handleSubmit } = this.props;
    return (
      <div className="container card-page">
        <div className="card col-sm-12">
          <form
            className="login-form"
            onSubmit={handleSubmit(this.handleSubmit)}
          >
            <h4
              className="text-center"
              style={{ paddingBottom: 5, color: "#A9A9A9" }}
            >
              BoilerPlate Login
            </h4>
            <div className="form-group row">
              <label className="col-sm-12 col-md-4 col-form-label" required>
                Email (Username)
              </label>
              <div className="col-sm-12 col-md-8">
                <Field
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="username"
                  component={InputField}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-12 col-md-4 col-form-label" required>
                Password
              </label>
              <div className="col-sm-12 col-md-8">
                <Field
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder=""
                  name="password"
                  component={InputField}
                />
              </div>
            </div>
            <CustomButton
              id="login"
              disabled={loading}
              // loading={loading}
              // loading={loading && this.props.connectionDetailsLoading}
              text="Submit"
              style={{ float: "right" }}
            />

            <div className="row">
              <div className="col-sm-12">
                <span style={{ color: "#fff", fontSize: "small" }}>
                  New User?{" "}
                  {/* <Link
                    to="/customer"
                    style={{ color: "#F8921A", cursor: "pointer" }}
                  >
                    Create an Account
                  </Link> */}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12" style={{ textAlign: "left" }}>
                <Link
                  to="/password"
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 10,
                    textDecoration: "underline"
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
const mapStateToProps = state => {
  return {
    ...loginSelectors.getAuthenticated(state),
    ...loginSelectors.getError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default withRouter(
  reduxForm({
    form: "profile",
    validate
  })(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
  )
);
