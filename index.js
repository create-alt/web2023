import {myfunc} from './calculate_parent.js';

export class myfuncJ extends myfunc{

   constructor(pointJ,pointJs,japanese,japaneseA){ 
    super(pointJ,pointJs,japanese,japaneseA); 

    this.exampoint_a=eval(this.exampoint.value)*0.15;
    
    this.test_a=eval(this.test.value)*1.3;

    if(this.prints.item(0).checked){
       this.print_point=13;
    }else if(this.prints.item(1).checked){
       this.print_point=10;
    }else if(this.prints.item(2).checked){
       this.print_point=6;
    }else if(this.prints.item(3).checked){
       this.print_point=1;
    }
    console.log(this.print_point);
 
    if(this.presentation.item(0).checked){
       this.presentation_point=11;
    }else if(this.presentation.item(1).checked){
       this.presentation_point=6;
    }else if(this.presentation.item(2).checked){
       this.presentation_point=1;
    }
    console.log(this.presentation_point);
      
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
