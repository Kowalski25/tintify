import React from "react";
import FormBase from "../FormBase";
import InputBase from "../InputBase";
import ButtonBase from "../ButtonBase";

interface TintsFormProps {

}

const TintsGeneratorForm: React.FC<TintsFormProps> = () => {
  return (
    <FormBase className="grid">
      <InputBase placeholder="Enter a color (hex value only)"></InputBase>

      <ButtonBase className='button' type='submit'>
        Generate Tints
      </ButtonBase>
    </FormBase>
  );
};

export default TintsGeneratorForm;
