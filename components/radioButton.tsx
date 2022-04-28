import React from "react";

function RadioButton ({type,name,value})  {
    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('')

    const isRadioSelected = (value:string):boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value)
    return(
        <div>
            <input 
            // type='radio' name="react-radio-btn" value='radio1' checked={isRadioSelected('radio1')} onChange={handleRadioClick}
            type={type} name={name} value={value} checked={isRadioSelected('radio1')} onChange={handleRadioClick}

            />
        </div>
    )
}
export default RadioButton;