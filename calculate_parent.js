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
   
      this.sumpoint=this.exampoint_a+this.test_a+this.print_point+this.presentation_point;
      console.log(this.sumpoint);
      
      if(this.sumpoint>=60){
      
      //pにid=finalを代入
      let p=document.getElementById('finalJ');
   
      p.textContent ='合格です';

      }else if(this.sumpoint<60){
      
      let p = document.getElementById('finalJ');
      
      p.textContent = '不合格です';

      }else{

      let p = document.getElementById('finalJ');
      
      p.textContent = 'error,値が正しく入力されていない可能性があります。';
    
    }
   }
}
