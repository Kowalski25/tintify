import React, { memo, useState } from "react";
import FormBase from "../base/FormBase";
import InputBase from "../base/InputBase";
import ButtonBase from "../base/ButtonBase";
import ColorCard from "./ColorCard";
import ColorCardsSection from "./ColorCardsSection";
import { ClassNameProps } from "../../types";
import {
  parseColorValues,
  calculateShades,
  calculateTints,
} from "../../utilities/colorsUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { setTintsAndShades } from "../../state/tints-and-shades/colorsAction";
import LabelBase from "../base/LabelBase";
import ColorDetailLabel from "./ColorDetailLabel";

interface TintsFormProps extends ClassNameProps {}

const TintsGeneratorForm: React.FC<TintsFormProps> = memo(() => {
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
    } else {
      alert("Please enter a valid hex color value");
    }
  };

  return (
    <div className='flow'>
      <FormBase
        className='form | flow margin-block-end-9 align-mx-auto'
        data-width='narrow'
        onSubmit={handleSubmit}>
        <div className='grid' data-gap='narrow'>
          <LabelBase htmlFor='color-input' className='fw-medium'>
            Enter a color (hex value only)
          </LabelBase>
          <InputBase
            id='color-input'
            name='color-input'
            className='form-input'
            placeholder='e.g. #20b2aa or 20b2aa'
            value={colorInput}
            onChange={handleInputChange}
          />
        </div>
        <ButtonBase className='button' type='submit' data-type='animated'>
          <svg
            height='18'
            width='18'
            viewBox='0 0 24 24'
            data-name='Layer 1'
            id='Layer_1'
            className='sparkle'>
            <path d='M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z'></path>
          </svg>
          <span>Generate Tints and Shades</span>
        </ButtonBase>
      </FormBase>

      {tintsAndShades && (
        <div
          id='tints-and-shades'
          className='flow-wide'
          style={{ maxWidth: "max-content", marginInline: "auto" }} // TODO - will remove this later on.
        >
          <ColorCardsSection title='Tints'>
            {tintsAndShades.tints?.map((tint, index) => (
              <div key={`tint-${index}`} className='text-center'>
                <ColorDetailLabel className='color-detail-label'>
                  {tint.percentage}%
                </ColorDetailLabel>
                <ColorCard
                  className='color-card'
                  backgroundColor={`#${tint.value}`}></ColorCard>
                <ColorDetailLabel
                  className='color-detail-label'
                  data-type='primary'>
                  {tint.value}
                </ColorDetailLabel>
              </div>
            ))}
          </ColorCardsSection>

          <ColorCardsSection title='Shades'>
            {tintsAndShades.shades?.map((shade, index) => (
              <div key={`shade-${index}`} className='text-center'>
                <ColorDetailLabel className='color-detail-label'>
                  {shade.percentage}%
                </ColorDetailLabel>
                <ColorCard
                  className='color-card'
                  backgroundColor={`#${shade.value}`}></ColorCard>
                <ColorDetailLabel
                  className='color-detail-label'
                  data-type='primary'>
                  {shade.value}
                </ColorDetailLabel>
              </div>
            ))}
          </ColorCardsSection>
        </div>
      )}
    </div>
  );
});

export default TintsGeneratorForm;
