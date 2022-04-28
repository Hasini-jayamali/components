// import React, { useState} from 'react'

// function ImageCarousel ()  {

//   const imgs=[
//     {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
//     {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
//     {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
//   ]
//   const [wordData,setWordData]=useState(imgs[0])
//   const handleClick=(index: number)=>{
//     console.log(index)
//     const wordSlider=imgs[index];
//     setWordData(wordSlider)
//   }
//   return (
//   //   <div className="text-center mt-7">
//   //   <img src={wordData.value} height="300" width="500" />
//   //   <div className='justify-center flex pt-5'>
//   //     {imgs.map((data,i)=>
//   //     <div className="pl-5" key={i} >
//   //       <img className={wordData.id==i?"border-4 border-black":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
//   //     </div>
//   //     )}
//   //   </div>
//   // </div>
//   <div className="text-center mt-7">
//    <img src={wordData.value} height="300" width="500" className='justify-center'/>
//    <div className='justify-center  flex pt-5'>

//    <div className=' flex pt-5'>
//     {
//       imgs.map((data,i) =>
//       <div className="pl-2" key={i} >
//       <img className={wordData.id==i?"border-2 border-black ":""} key={data.id} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />

//       </div>
//       )

//     }
//     </div>
//     </div>
//   </div>
//   )
// }

// export default ImageCarousel

import React, { useState } from "react";

function ImageCarousel({ sliderArr }) {
  // let sliderArr = [1,2,3,4,5];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === -0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    //slider
    <div className="relative  border border-red-500 w-full h-screen box-border m-0 p-0 flex item-center overflow-hidden bg-slate-400">
      {sliderArr.map((item, index) => {
        return (
          //slide
          <div
            key={index}
            className="duration-500 relative border solid    h-full overflow-hidden"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button
        onClick={goLeft}
        className="absolute top-1/4 left-0 translate-y-(-2/4) w-1/6 h-4/5 border-none"
      >
      
      </button>
      <button
        onClick={goRight}
        className="absolute top-1/4 right-0 translate-y-(-2/4) w-1/5 h-4/5 border-none"
      >
        
      </button>
    </div>
  );

    }
export default ImageCarousel;
