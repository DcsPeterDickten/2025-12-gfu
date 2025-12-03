import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, filter, from, map, of, ReplaySubject, Subject, Subscription, takeUntil, timer } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit, OnDestroy {

  // obs1$ = of(1, 2, 3);
  // obs2$ = from([4, 5, 6]);
  // obs3$ = timer(0, 500);
  // obs4$ = this.obs3$.pipe(
  //   map(x => 10 * x),
  // );
  // obs5$ = this.obs4$.pipe(filter(y => y % 100 === 0));

  // mySubject$ = new ReplaySubject<string>(10);

  mySubscriptions$: Subscription[] = [];
  destroy$: Subject<string> = new Subject();

  constructor() {
    // this.obs3$.subscribe((data) => console.log('obs3$', data));

    // const obs6$ = timer(0, 500);
    // // 5000 Sekunden Pause
    // obs6$.subscribe(console.log)

    // this.mySubject$.subscribe((neueInfo) => console.log('subject sagt - early', neueInfo));
    // this.mySubject$.next('Hallo!');
    // this.mySubject$.next('Welt!');
    // this.mySubject$.subscribe((neueInfo) => console.log('subject sagt - late', neueInfo));
  }

  ngOnInit() {
    const obs$ = timer(0, 500).pipe(takeUntil(this.destroy$));
    obs$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next("He's dead Jim")
  }

}
