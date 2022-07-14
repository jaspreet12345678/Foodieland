import { useState, useEffect } from "react";
import { Box, Text, Select } from "@chakra-ui/react";

const SelectList = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.options[0].id);

  const valueChangeHandler = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    props.onChange({
      id: props.id,
      value: selectedValue,
    });
  }, [selectedValue]);

  const options = props.options.map((option, index) => (
    <option className="text-black" key={index} value={option.id}>
      {option.name}
    </option>
  ));

  return (
    <Box>
      <Select onChange={valueChangeHandler} id={props.id}>
        {options}
      </Select>
    </Box>
  );
};

export default SelectList;
