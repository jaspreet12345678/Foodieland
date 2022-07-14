import { useState, useEffect } from "react";
import { Textarea, Box } from "@chakra-ui/react";

const isNotEmpty = (value) => value.trim() !== "";

const TextArea = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !isValid && (isTouched || props.onSubmit);

  useEffect(() => {
    setIsValid(isNotEmpty(enteredValue));
    props.onChange({
      id: props.id,
      value: enteredValue,
      isValid,
    });
  }, [enteredValue, isValid]);
  
  const inputClasses = `border p-5 rounded-2xl text-sm mb-6 text-black/60 h-full ${
    hasError
      ? "border-red-600 bg-red-300/10"
      : "border-gray-900/10 bg-transparen"
  }`;

  return (
    <Box>
      <Textarea
        onBlur={valueBlurHandler}
        className={inputClasses}
        id={props.id}
        placeholder={props.placeholder}
        onChange={valueChangeHandler}
      />
    </Box>
  );
};

export default TextArea;
