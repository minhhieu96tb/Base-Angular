import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notification.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('100ms ease-in-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notifications$: Observable<any[]>;

  constructor(private notification: NotificationsService) { 
    this.notifications$ = this.notification.getNotifications();
  }

  ngOnInit(): void {
  }

  trackById(index, item) {
    return item.id;
  }

}
