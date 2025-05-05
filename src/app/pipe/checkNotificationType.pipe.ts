import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationType'
})
export class NotificationTypePipe implements PipeTransform {
  transform(notificationCode: number): string {
    if (notificationCode >= 100000 && notificationCode < 200000) {
        return 'Danh sách người dùng';
    } else if (notificationCode >= 200000 && notificationCode < 300000) {
        return 'Quản lý vai trò';
    } else if (notificationCode >= 300000 && notificationCode < 400000) {
        return 'Quản lý nhóm';
    } else if (notificationCode >= 400000 && notificationCode < 500000) {
        return 'Tài nguyên HG Media';
    } else if (notificationCode >= 500000 && notificationCode < 600000) {
        return 'Tài nguyên HG Media';
    } else if (notificationCode >= 600000 && notificationCode < 700000) {
        return 'Tài nguyên HG Media / Gắn từ khóa';
    } else if (notificationCode >= 800000 && notificationCode < 900000) {
        return 'Bộ sưu tập ';
    } else if (notificationCode >= 900000 && notificationCode < 1000000) {
        return 'Quản lý phiên bản';
    } else {
        return 'Loại thông báo không xác định';
    }
  }
}