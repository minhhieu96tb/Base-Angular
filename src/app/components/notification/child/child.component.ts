import { Component, Input, OnInit } from '@angular/core';
import { NotificationsService } from '../notification.service';
import { NotificationClass } from 'src/app/model/notification';

@Component({
  selector: 'app-child-notification',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() notification: NotificationClass;

  constructor(private _notificationsService: NotificationsService) { }

  ngOnInit(): void {
    
  }

  pause() {
    this.notification.paused.next(true);
  }

  unPause() {
    this.notification.paused.next(false);
  }

  remove() {
    this._notificationsService.removeNotification(this.notification.id);
  }

}
