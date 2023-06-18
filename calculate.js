//ボタンを押したときに結果を表示する
var myfuncJ=function(){
   var exampoint=document.getElementById("pointJ");
   var exampoint_a=eval(exampoint.value)*0.15;
   
   var test=document.getElementById("pointJs");
   var test_a=eval(test.value)*(4/3);

   var prints=document.getElementsByName('radioJ');
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

   var presentation=document.getElementsByName('radioJA');
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
    let p=document.getElementById('finalJ');
 
    p.textContent ='合格です。単位を取得できている可能性が高いです。';

    //document.getElementById('final').appendChild( p );
   }else if(sumpoint<60){
    let p = document.getElementById('finalJ');
   
    p.textContent = '不合格です。単位を取得できていない可能性が高いです。';
   }else{
    let p = document.getElementById('finalJ');
   
    p.textContent = 'error　値が正しく入力できているかどうか確認してみてください。';
   }
}

var myfuncMa=function(){
   var exampoint=document.getElementById("pointMa");
   var exampoint_a=eval(exampoint.value)*(7/20);
   
   var test=document.getElementById("pointMas");
   var test_a=eval(test.value)*1.0;

   var prints=document.getElementsByName('radioMa');
   var print_point;
   if(prints.item(0).checked){
      print_point=10;
   }else if(prints.item(1).checked){
      print_point=8;
   }else if(prints.item(2).checked){
      print_point=5;
   }else if(prints.item(3).checked){
      print_point=1;
   }
   console.log(print_point);

   var presentation=document.getElementsByName('radioMaA');
   var presentation_point;
   if(presentation.item(0).checked){
      presentation_point=9;
   }else if(presentation.item(1).checked){
      presentation_point=5;
   }else if(presentation.item(2).checked){
      presentation_point=3;
   }
   console.log(presentation_point);

   var sumpoint=exampoint_a+test_a+print_point+presentation_point;
   console.log(sumpoint);
   if(sumpoint>=60){
    //変数pに要素pを新たに追加
    //var p = document.createlement('p');

    //pにid=finalを代入
    let p=document.getElementById('finalMa');
 
    p.textContent ='合格です。単位を取得できている可能性が高いです。';

    //document.getElementById('final').appendChild( p );
   }else if(sumpoint<60){
    let p = document.getElementById('finalMa');
   
    p.textContent = '不合格です。単位を取得できていない可能性が高いです。';
   }else{
    let p = document.getElementById('finalMa');
   
    p.textContent = 'error　値が正しく入力できているかどうか確認してみてください。';
   }
}

var myfuncMc=function(){
   var exampoint=document.getElementById("pointMc");
   var exampoint_a=eval(exampoint.value)*(7/40);
   
   var test=document.getElementById("pointMcs");
   var test_a=eval(test.value)*1.0;

   var prints=document.getElementsByName('radioMc');
   var print_point;
   if(prints.item(0).checked){
      print_point=10;
   }else if(prints.item(1).checked){
      print_point=8;
   }else if(prints.item(2).checked){
      print_point=5;
   }else if(prints.item(3).checked){
      print_point=1;
   }
   console.log(print_point);

   var presentation=document.getElementsByName('radioMcA');
   var presentation_point;
   if(presentation.item(0).checked){
      presentation_point=9;
   }else if(presentation.item(1).checked){
      presentation_point=5;
   }else if(presentation.item(2).checked){
      presentation_point=3;
   }
   console.log(presentation_point);

   var sumpoint=exampoint_a+test_a+print_point+presentation_point;
   console.log(sumpoint);
   if(sumpoint>=60){
    //変数pに要素pを新たに追加
    //var p = document.createlement('p');

    //pにid=finalを代入
    let p=document.getElementById('finalMc');
 
    p.textContent ='合格です。単位を取得できている可能性が高いです。';

    //document.getElementById('final').appendChild( p );
   }else if(sumpoint<60){
    let p = document.getElementById('finalMc');
   
    p.textContent = '不合格です。単位を取得できていない可能性が高いです。';
   }else{
    let p = document.getElementById('finalMc');
   
    p.textContent = 'error　値が正しく入力できているかどうか確認してみてください。';
   }
}
