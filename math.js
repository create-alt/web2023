//ボタンを押したときに結果を表示する
var myfunc=function(){
   var exampoint=document.getElementById("pointJ");
   var exampoint_a=eval(exampoint.value)*0.15;
   
   var test=document.getElementById("pointJs");
   var test_a=eval(test.value)*1.3;

   var prints=document.getElementsByName('radio');
   var print_point;
   if(prints.item(0).checked){
      print_point=13;
   }else if(prints.item(1).checked){
      print_point=10;
   }else if(prints.item(2).checked){
      print_point=6;
   }else if(prints.item(3).checked){
      print_point=1;
   }
   console.log(print_point);

   var presentation=document.getElementsByName('radioA');
   var presentation_point;
   if(presentation.item(0).checked){
      presentation_point=11;
   }else if(presentation.item(1).checked){
      presentation_point=6;
   }else if(presentation.item(2).checked){
      presentation_point=1;
   }
   console.log(presentation_point);

   var sumpoint=exampoint_a+test_a+print_point+presentation_point;
   console.log(sumpoint);
   if(sumpoint>=60){
    //変数pに要素pを新たに追加
    //var p = document.createlement('p');

    //pにid=finalを代入
    let p=document.getElementById('final');
 
    p.textContent ='合格です';

    //document.getElementById('final').appendChild( p );
   }else if(sumpoint<60){
    let p = document.getElementById('final');
   
    p.textContent = '不合格です';
   }else{
    let p = document.getElementById('final');
   
    p.textContent = 'error';
   }
}