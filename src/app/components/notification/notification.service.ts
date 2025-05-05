import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { getPausableTimer } from 'src/app/@core/utils/notificationService';
import { NotificationClass } from 'src/app/model/notification';

@Injectable()
export class NotificationsService {
  private notifications$ = new BehaviorSubject<NotificationClass[]>([]);

  public getNotifications(): Observable<NotificationClass[]> {
    return this.notifications$;
  }

  public addNotification(notification: NotificationClass) {
    if (notification && notification.options && notification.options.timeout) {
      notification.obs = getPausableTimer(notification.options.timeout, notification.paused);
      notification.obs.completeTimer
        .pipe(tap(() => this.removeNotification(notification.id))).subscribe();
    }
    this.next([...this.notifications$.getValue(), notification]);
  }

  public removeNotification(id: number) {
    this.next(this.notifications$.getValue().filter(_ => _.id != id));
  }

  private next(notifications: NotificationClass[]) {
    this.notifications$.next(notifications);
  }
}