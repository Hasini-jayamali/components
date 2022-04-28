import React from "react";

type Props = {
  lable?: string;
  styleClass?: string;
  name?:string
  id: string;
  value?:string;
  cBoxId?:string
};

 const CheckBox = ({
  lable,
  value,
  name,
  cBoxId,
  
  id,
  styleClass,
}: Props) => {

  return (
    <div>
      <label
        className={`${styleClass} block font-medium text-gray-700`}
      >
        {"select"}
      </label>
      
          <div key={id}>
            <input
              type="checkbox"
              id={cBoxId}
              name={name}
              value={value}
            />
            <label> {lable}</label>
            
          </div>
      
    </div>
  );
};
export default CheckBox