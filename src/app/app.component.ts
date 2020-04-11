import { Component } from '@angular/core';
import {Observable,fromEvent,from, of,interval} from 'rxjs';
import {debounceTime,filter,take,takeUntil} from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

//uncomment and check one by one
export class AppComponent  {
  name = 'Observable - Filter';

ngOnInit():void{ 
  //debounce time - helps to avoid repetitive clicks, it takes only after the time mentioned
  // const eventToCheck=fromEvent(document,'click').pipe(debounceTime(2000))
  // eventToCheck.subscribe(value=>console.log('debounceCheck',value.target));


// take - helps to take  upto ceratin events from observer
  // const takeCheck=interval(1000).pipe(take(2)).subscribe(value=>console.log('takeCheck',value))

  // filter - helps to filter  upto ceratin events from observer
  // const fiterCheck=interval(1000).pipe(filter(value=>value%2===0)).pipe(take(20)).subscribe(value=>console.log('fiterCheck',value))



//takeUntil takes an event as param, helps to stop enti until that event triggers
  // const Check=
  
  // interval(1000).pipe(takeUntil(fromEvent(document,'click'))).subscribe(value=>console.log('takeUntil',value))

}
}
