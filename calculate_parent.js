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
