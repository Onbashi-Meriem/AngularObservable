import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((res) => {
      console.log(res);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
