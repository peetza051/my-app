export const Social : string[] = ['FaceBook:xxxxxx','Line:@xxxxxx','Instagram:xxxxxx']  /*ใน social ค่าทั้งหมดยังเป็นสตริงอยู่ และใน list ยังเป็นค่า opition ถ้าอยากให้เป็นค่าเดียวกันให้ใส่ ... ข้างหน้าเพื่อเชื่อมกันให้เป็นค่าเดียวกัน */

export const Lists : {name: string , lo : string}[] = [    
  {           /* ใน {} คือ 1 object แสดงว่าใน array[] มี 3 object  */
    name: "FaceBook:xxxxxx",
    lo: "#",
  },
  {
    name: "Line:@xxxxxx",
    lo: "#",
  },
  {
    name: "Instagram:xxxxxx",
    lo: "#",
  },
]

// const all = [...Social,...List]
export const menu : string[] = ["home", "about", "services", "contact"];

export const list1 : {name: string ,srcl: string}[] = [         //ต้องประกาศ type เพื่อทำให้ code
    {
      name: "หน้าหลัก",
      srcl: "#home",
    },
    {
      name: "ข้อมูลบริษัท",
      srcl: "#about",
    },
    {
      name: "กลุ่มบริษัทในเครือ",
      srcl: "#connection",
    },
    {
      name: "รูปแบบการให้บริการ",
      srcl: "#services",
    },
    {
      name: "ข่าวสารและกิจกรรม",
      srcl: "#news",
    },
    {
      name: "ติดต่อเรา",
      srcl: "#contact",
    },
  ];
