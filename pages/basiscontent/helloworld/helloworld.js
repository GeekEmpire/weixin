Page({
  data:{
    items:[
      {name:"商品A"},
      {name:"商品B"},
      { name: "商品c" },
      { name: "商品d" },
      { name: "商品a" },
    ],
    flag:false,
    condition:Math.floor(Math.random()*3+1),
    item:{
      name:"zhangsan",
      phone:"18888888888",
      address:"中国"
    }
  },
  clickMe(e){
    console.log(e);
  },
  clicka()
  {
    console.log('click container-a')
  },
  clickb()
  {
    console.log("click container-b")
  },
  clickc()
  {
    console.log('click container-c')
  }
})