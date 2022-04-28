import React, { useState } from "react";

type Props= {
  list: {}[];
  userList:any
  name:string;
  age:number;

}

export const Search = ({userList,list}:Props) => {

  
  const [text, setText] = React.useState<string>("");
  return (
    <div>
      <div>
        <input
          className="m-5 text-center border-2 border-red-600 p-2 rounded text-lg focus:outline-none"
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button  disabled={!text}  className="bg-red-600 text-white p-2 text-lg boder-none border-2 border-red-600 rounded ml-2.5 cursor-pointer">
          Search
        </button>
      </div>
      <div >
        {userList && userList?.length == 0 && (
          <div className="w-96 m-5 p-5 border border-slate-300 text-center">No User Found</div>
        )}

        {list &&
          list?.length > 0 &&
          list?.map((User) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="text-left border border-slate-300 p-5 w-96 m-5">
                <h3>Name: {User.name}</h3>
                <p>Age: {User.age}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Search;
