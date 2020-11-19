import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {

  renderInput = ({ input, label, meta }) => {
    // console.log("StreamCreate.renderInput(formProps) input:", input);
    // console.log("StreamCreate.renderInput(formProps) label:", label);
    // console.log("StreamCreate.renderInput(formProps) meta:", meta);
    const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        { this.renderError(meta) }
      </div>
    );
  }

  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div> 
        </div>
      )
    }
  }

  // Non ReduxForm version.
  //
  // onSubmit(event) {
  //   event.preventDefault();
  // }

  // ReduxForm version. Handles some common tasks.
  onSubmit = formValues => {
    // console.log("StreamCreate.onSubmit(formValues) formValues : ", formValues);
    // console.log("StreamCreate.onSubmit(formValues) this.props :", this.props);
    this.props.onSubmit(formValues);
  }

  render() {
    console.log("StreamCreate this.props: ", this.props);
    return (
      <form
        // NB: semantic-ui need `error` in-order to show errors. 
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          className="ui field"
          name="title"
          component={this.renderInput}
          label="Enter title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  console.log("StreamCreate.validate(formValues) ", formValues);
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title.";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description.";
  }
  return errors;
};

// NB: Causes prop is Object not Function warning.
export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);


