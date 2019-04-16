import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
val1:Number = 0;
val2:Number = 0;

somar() :void{
  let variavel1  =Number(this.val1);
  let variavel2 = Number(this.val2);
  let somar = (variavel1+variavel2);
   alert("o resultado é " + somar);
   if(somar % 2 ==0){
     alert("é par");
   }else{
     alert("é impar");
   }
}
}
