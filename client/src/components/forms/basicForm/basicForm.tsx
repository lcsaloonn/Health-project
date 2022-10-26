import { FormEvent } from "react";

const BasicForm = () => {
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="basicForm">
      {/* <form onSubmit={submitForm}>
        {inputs.map((input: IFormInput) => (
          <FormInput {...input} key={input.id}></FormInput>
        ))}
      </form> */}
    </div>
  );
};
export default BasicForm;
