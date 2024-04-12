import { Lists, list1 } from "@/constants/import";
import Image from "next/image";
import { ReactNode } from "react";
import React from 'react';
import  './index.css'

// export default class App extends Components.list1  {
//   render()  {
    
  
//   return (
    
//   );
// }s
// }

export default function Navbar() {
  return <nav className="  container  border-1  border-red-900 "> {/* ขาดสี ขาด hover แล้วมีเส้นใต้ ขาดเปลี่ยนภาษา ขาดกดที่ Logo แล้วไปหน้าแรก */}
  <div className="bg-blue-900  box-border h-14 w-200  flex  text-sm font-bold justify-around border-1 border-red-900 ">
    
    <img  src="https://finstable.co.th/images/logo-finstable-white.png" className="flex w-1/10.5 h-7 order--1 my-auto justify-start  border-1 border-white"  /> {/*pr-44*/}
     <ul className=" flex p-4 space-x-4 my-auto border-2 border-white ">
      
     {list1.map((item:any, index:number) => {
  return (
    <a key={index} 
       href={item.srcl} className=" text-white  hover:text-nav "> {/* href คือการลิ้งค์ item.srcl กับnavbarข้างบน */}
         {item.name}
      
    </a>
  );
})}
     </ul>
    
  </div>
  <div className="  ">
    <div className=" colum-van flex  p-60 bg">
     <h1 className=" text-center text-white text-5xl  mb-8 mui-style-10gnrls border-1 border-red-900 box-border h-16 w-44">ข้อมูลบริษัท</h1>
     <b className="mt-2 text-white  border-1 border-red-900 " >ผู้ให้บริการด้านโซลูชั่นบล็อกเชนและศูนย์เทคโนโลยีชั้นนำแห่งเอเชีย</b>
    </div>
  </div>
  <div>

  </div>
</nav>
}
// export default function detai1() {

// }

