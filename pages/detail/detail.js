Page({
  data: {
    poster:'/images/detail_poster1.png',
    poster_n:['/images/detail_poster1.png','/images/detail_poster2.png','/images/detail_poster3.png','/images/detail_poster4.png','/images/detail_poster5.png','/images/detail_poster6.png'],
    img:['/images/detail_photo1.png','/images/detail_photo2.png','/images/detail_photo3.png','/images/detail_photo4.png','/images/detail_photo5.png','/images/detail_photo6.png'],
    img_a:['/images/detail_photo1_active.png','/images/detail_photo2_active.png','/images/detail_photo3_active.png','/images/detail_photo4_active.png','/images/detail_photo5_active.png','/images/detail_photo6_active.png'],
    img_l:['/images/detail_photo1.png','/images/detail_photo2.png','/images/detail_photo3.png','/images/detail_photo4.png','/images/detail_photo5.png','/images/detail_photo6.png'],
    choose_list:[
      {name:'当季特饮',money:'39',num:0},
      {name:'摩卡咖啡',money:'26',num:0},
      {name:'拿铁冰咖啡',money:'61',num:0},
      {name:'不要钱随便喝',money:'1',num:0},
    ],
    isShow:true,
    num:0,
    price:0




  },
  onLoad() {},
  posterClick(e){
    // console.log(e); 
    //console.log(e.currentTarget.dataset.index);
    let i = e.currentTarget.dataset.index;
    for(let k=0;k<this.data.img.length;k++){
      this.data.img[k] = this.data.img_l[k];
    }
   // console.log(this.data.img);
    this.data.img[i] = this.data.img_a[i];
    this.data.poster = this.data.poster_n[i]
    this.setData({ 
      img:this.data.img,
      poster:this.data.poster
    }) 
  },
  toCard(){
    my.navigateTo({
      url: '/pages/card/card/card'
    });
  },
  addNum(e){
    let index = e.currentTarget.dataset.index
    // console.log(index);
    this.data.choose_list[index].num += 1;
   
    this.setData({
      choose_list :  this.data.choose_list
    })
    this.allNum();
    this.allPrice();
  },
  subNum(e){
    let index = e.currentTarget.dataset.index
    //  console.log(index);
    this.data.choose_list[index].num -= 1;
   
    this.setData({
      choose_list :  this.data.choose_list
    })
    this.allNum();
    this.allPrice();
   
  },
  allNum(){
    let num = 0;
    for(let n=0;n<this.data.choose_list.length;n++){
      num+=this.data.choose_list[n].num
    }
    // console.log(num);
    this.setData({
      num:num
    })
  },
  allPrice(){
    let price = 0;
    for(let p=0;p<this.data.choose_list.length;p++){
      price+=this.data.choose_list[p].money * this.data.choose_list[p].num
    }
    console.log(price); 
    
    this.setData({
      price:price
    })
  }
});
