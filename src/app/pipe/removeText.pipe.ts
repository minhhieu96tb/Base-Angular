import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'replaceText'
})
export class ReplaceTextPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(message: string, additionalData: any, notificationType: number, createdUserInfo: any): SafeHtml {
    if (!message) return message;

    if (createdUserInfo?.username) {
      message = message.replace(/\{0\}/g, `<strong class="clickable-user" data-username="${createdUserInfo?.id}">${createdUserInfo.username}</strong>`);
    }

    message = this.replaceKeywords(message);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, item]: [string, any]) => {
        if (!item?.index) return;

        const index = item.index;
        let replacement = '';
        let styleStrong = "display: inline-block; max-width: 100%; overflow-wrap: break-word; word-break: break-word; white-space: normal;"
        if(item?.datas[0]?.isDeleted && item?.itemsCount < 2){
          styleStrong = "display: inline-block; max-width: 100%; overflow-wrap: break-word; word-break: break-word; white-space: normal; text-decoration: line-through"
        }

        if (key === 'items') {
          replacement = `<strong style="${styleStrong}">${item?.itemsCount}</strong>`;
          message = message.replace(new RegExp(`\\{${index}\\}`, 'g'), replacement);
          return;
        } else { 
          const firstData = item?.datas[0];
    
          if (firstData?.itemType === 1) { // Group item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một nhóm'}</strong>`;
          }
          else if (firstData?.itemType === 0) { // User item
            replacement = `<strong style="${styleStrong}">${firstData?.email || 'một người dùng'}</strong>`;
          }
          else if (firstData?.itemType === 2) { // Role item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một quyền'}</strong>`;
          }
          else if (firstData?.itemType === 3) { // Folder item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một folder'}</strong>`;
          }
          else if (firstData?.itemType === 4) { // File item
            replacement = `<strong style="${styleStrong}">${firstData?.title || 'một tệp'}</strong>`;
          }
          else if (firstData?.itemType === 5) { // Version item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một phiên bản'}</strong>`;
          }
          else if (firstData?.itemType === 6) { // Keyword item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một từ khóa'}</strong>`;
          }
          else if (firstData?.itemType === 7) { // Audio item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một bài hát'}</strong>`;
          }
          else if (firstData?.itemType === 8) { // Collection item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một bộ sưu tập'}</strong>`;
          }
          else if (firstData?.itemType === 9) { // Group item
            replacement = `<strong style="${styleStrong}">${firstData?.name || 'một nhóm'}</strong>`;
          }
          else if (firstData?.itemType === 10) { // File item
            replacement = `<strong style="${styleStrong}">${firstData?.title || 'một tệp'}</strong>`;
          }
          message = message.replace(new RegExp(`\\{${index}\\}`, 'g'), replacement);
          return;
        }
      });
    }
    // message = this.replaceKeywords(message);

    return this.sanitizer.bypassSecurityTrustHtml(message);
  }

  viewUser(event, user){
    event.stopPropagation();
    event.preventDefault();
    window.open(`/admin/manage/details/${user?.id}/group/grid/1/00000000-0000-0000-0000-000000000000/2/grid/1/folder`, '_blank');
  }

  private replaceKeywords(message: string): string {
    const keywordMap = [
      { keyword: 'xóa tài khoản', color: '#E62A2A' },
      { keyword: 'vô hiệu hóa tài khoản', color: '#E62A2A' },
      { keyword: 'kích hoạt tài khoản', color: '#2FB25E' },
      { keyword: 'xóa', color: '#E62A2A' },
      { keyword: 'xóa người dùng', color: '#E62A2A' },
      { keyword: 'vô hiệu hóa', color: '#E62A2A' },
      { keyword: 'kích hoạt', color: '#2FB25E' },
    ];

    keywordMap.forEach(({ keyword, color }) => {
      message = message.replace(new RegExp(`\\b${keyword}\\b`, 'g'), `<span style="color: ${color};">${keyword}</span>`);
    });

    return message;
  }
}
