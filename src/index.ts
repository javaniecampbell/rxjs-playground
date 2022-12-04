import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
});

someObservable$.subscribe(value => console.log(value));
