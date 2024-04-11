import { Lists, list1 } from "@/constants/import";
import Image from "next/image";
import { ReactNode } from "react";
import React from 'react';


// export default class App extends Components.list1  {
//   render()  {
    
  
//   return (
    
//   );
// }
// }

export default function Home() {
  return <main className="contriner min-h-screen  items-center ">
  <div className="bg-blue-900 p-5">
  <div className="  flex  text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl justify-between  ">
  <img src="https://finstable.co.th/images/logo-finstable-white.png" className="w-1/12  "  />
  <ul className="flex space-x-4">
      {list1.map((item:any, index:number) => {
        return (
          <li key={index}> {/*key เช็คให้ใน{}มันเป็นค่าที่unique */}
            <a href={item.srcl} className="text-design"> {/* href คือการลิ้งค์ item.srcl กับnavbarข้างบน */}
               {item.name}
            </a>
          </li>
        );
      })}
    </ul>
 </div>
 </div>
</main>
}
