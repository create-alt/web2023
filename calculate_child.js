import {myfunc} from 'calculate_parent.js';

class myfuncJp extends myfunc {

   constructor(pointJ,pointJs,japanese,japaneseA){ 
    super(pointJ,pointJs,japanese,japaneseA); 

    this.exampoint_a=eval(exampoint.value)*0.15;
    
    this.test_a=eval(test.value)*1.3;

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
   }
 }

 var myfuncJ=new myfuncJp('pointJ','pointJs','japanese','japaneseA');
