import { Box, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Input1 = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !isValid && (isTouched || props.onSubmit);

  useEffect(() => {
    if (props.id === "email") {
      setIsValid(isEmail(enteredValue));
      props.onChange({
        id: props.id,
        value: enteredValue,
        isValid,
      });
    } else {
      setIsValid(isNotEmpty(enteredValue));
      props.onChange({
        id: props.id,
        value: enteredValue,
        isValid,
      });
    }
  }, [enteredValue, isValid]);
  const inputClasses = `
    ${hasError ? "done" : "nope" }
  }`;

  return (
    <Box>
      <Input
        onBlur={valueBlurHandler}
        onChange={valueChangeHandler}
        className={inputClasses}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </Box>
  );
};

export default Input1;
