//ボタンを押したときに結果を表示する
//次回以降、多教科に対応できるように継承用の親クラスを作成していく。

//myfunc を親クラスとして書き換えていくと同時にオブジェクト指向を追加していく。
//=function(pointBig,pointSmall,radio1,radio2)
export class myfunc{
  
   sumpoint=0;
   exampoint_a=0;
   test_a=0;
   print_point=0;
   presentation_point=0; 
  
   constructor(pointBig,pointSmall,radio1,radio2){
      this.exampoint=document.getElementById(pointBig);
      this.test=document.getElementById(pointSmall);
      this.prints=document.getElementsByName(radio1);
      this.presentation=document.getElementsByName(radio2);
   }
}
/*
   get PointBig(){
     return this.exampoint;
   }
   get PointSmall(){
      return this.test;
   }
     
   get Radio1(){
      return this.prints;
   }
   get Radio2(){
      return this.presentation;
   }
   */
      
      //この先の条件分岐は子クラスごとに定義
   
      //sumpointの計算・条件分岐は子クラスごとに定義