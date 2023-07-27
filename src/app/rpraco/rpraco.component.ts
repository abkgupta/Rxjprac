import { Component, OnInit } from '@angular/core';
import { every, from, of, sequenceEqual, shareReplay, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rpraco',
  templateUrl: './rpraco.component.html',
  styleUrls: ['./rpraco.component.css']
})
export class RpracoComponent implements OnInit{

   ngOnInit() {
      // const source = timer(1000);
      // const source = timer(1000, 2000);
      // const subscribe = source.subscribe(val => console.log(val))
     
      //  const source = of(1,2,3,4,5)
      // // const source = of(12,4)
      //  const ev = source.pipe(
      //   every(val => val%2 === 0)
      //  ).subscribe(x =>  console.log(x))

const expseq = from([4,5,6])
     of([1,2,3], [4,5,6], [7,8,9]).pipe(
      switchMap(arr => from(arr).pipe(sequenceEqual(expseq)))
     ).subscribe(console.log)



     const source$ = of(1, 2, 3);

     let data = source$.pipe(
       tap((i) => console.log(`Received ${i}`)),
       shareReplay(1) //bufferSize
     );
     
     data.subscribe((val: any) => {
       console.log(val);
     });
     
     data.subscribe((val: any) => {
       console.log(val);
     });
     
     data.subscribe((val: any) => {
       console.log(val);
     });
     
   }
  
   
}
