import React, { useState } from "react";
import FormBase from "../FormBase";
import InputBase from "../InputBase";
import ButtonBase from "../ButtonBase";
import ColorCard from "./ColorCard";
import ColorCardsSection from "./ColorCardsSection";
import { ClassNameProps } from "../../types";
import {
  parseColorValues,
  calculateShades,
  calculateTints,
} from "../../utilities/colorsUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../context/store";
import { setTintsAndShades } from "../../context/actions/colorsAction";

interface TintsFormProps extends ClassNameProps {}

const TintsGeneratorForm: React.FC<TintsFormProps> = () => {
  const [colorInput, setColorInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const tintsAndShades = useSelector(
    (state: RootState) => state.tints.tintsAndShades
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedColors = parseColorValues(colorInput);
    if (parsedColors && parsedColors.length > 0) {
      const tints = calculateTints(parsedColors[0]);
      const shades = calculateShades(parsedColors[0]);
      dispatch(setTintsAndShades(tints, shades));
      // setTintsAndShades({ tints, shades });
    }
  };

  return (
    <div>
      <FormBase className='form' data-width='narrow' onSubmit={handleSubmit}>
        <InputBase
          className='form-input'
          placeholder='Enter a color (hex value only)'
          value={colorInput}
          onChange={handleInputChange}
        />
        <ButtonBase className='button' type='submit'>
          Generate Tints
        </ButtonBase>
      </FormBase>

      {tintsAndShades && (
        <div id='tints-and-shades'>
          <ColorCardsSection title='Tints'>
            {tintsAndShades.tints.map((tint, index) => (
              <ColorCard 
                className="color-card" 
                key={index} 
                backgroundColor={`#${tint}`}>
                {tint}
              </ColorCard>
              
            ))}
          </ColorCardsSection>

          <ColorCardsSection title='Shades'>
            {tintsAndShades.shades.map((shade, index) => (
              <ColorCard
                className="color-card"
                key={index}
                backgroundColor={`#${shade}`}>
                {shade}
              </ColorCard>
            ))}
          </ColorCardsSection>
        </div>
      )}
    </div>
  );
};

export default TintsGeneratorForm;
