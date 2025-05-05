import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkListType'
})
export class TypeCheckList implements PipeTransform {
    transform(type): string {
        switch (type) {
            case 100101:
                return 'người dùng thêm mới';
                break;
            case 100102:
                return 'người dùng thêm mới';
                break;
            case 100201:
                return 'người dùng được chỉnh sửa';
                break;
            case 100202:
                return 'người dùng được chỉnh sửa';
                break;
            case 100203:
                return 'người dùng được chỉnh sửa';
                break;
            case 100301:
                return 'người dùng được phân quyền';
                break;
            case 100302:
                return 'người dùng được phân quyền';
                break;
            case 100303:
                return 'người dùng được phân quyền';
                break;
            case 100401:
                return 'người dùng bị vô hiệu hóa';
                break;
            case 100402:
                return 'người dùng bị vô hiệu hóa';
                break;
            case 100403:
                return 'người dùng bị vô hiệu hóa';
                break;
            case 100501:
                return 'người dùng được kích hoạt';
                break;
            case 100502:
                return 'người dùng được kích hoạt';
                break;
            case 100503:
                return 'người dùng được kích hoạt';
                break;
            case 100601:
                return 'người dùng bị xóa';
                break;
            case 100602:
                return 'người dùng bị xóa';
                break;
            case 100603:
                return 'người dùng bị xóa';
                break;
            case 100701:
                return 'người dùng được khôi phục';
                break;
            case 100702:
                return 'người dùng được khôi phục';
                break;
            case 100703:
                return 'người dùng được khôi phục';
                break;
            case 200101:
                return 'vai trò được thêm mới';
                break;
            case 200201:
                return 'vai trò được chỉnh sửa';
                break;
            case 200301:
                return 'vai trò bị xóa';
                break;
            case 200302:
                return 'vai trò bị xóa';
                break;
            case 300101:
                return 'nhóm được thêm mới';
                break;
            case 300201:
                return 'nhóm được đổi tên';
                break;
            case 300301:
                return 'nhóm được thêm mới người dùng';
                break;
            case 300302:
                return 'nhóm được thêm mới người dùng';
                break;
            case 300303:
                return 'nhóm được thêm mới người dùng';
                break;
            case 300401:
                return 'nhóm đã thay đổi quyền thành viên';
                break;
            case 300402:
                return 'nhóm đã thay đổi quyền thành viên';
                break;
            case 300403:
                return 'nhóm đã thay đổi quyền thành viên';
                break;
            case 300501:
                return 'nhóm đã xóa thành viên';
                break;
            case 300502:
                return 'nhóm đã xóa thành viên';
                break;
            case 300503:
                return 'nhóm đã xóa thành viên';
                break;
            case 300601:
                return 'nhóm bị xóa';
                break;
            case 300602:
                return 'nhóm bị xóa';
                break;
            case 400101:
                return 'thư mục thêm mới';
                break;
            case 400201:
                return 'thư mục được cấu hình tải xuống';
                break;
            case 400202:
                return 'thư mục thay đổi tên';
                break;
            case 400203:
                return 'thư mục được gán từ khóa';
                break;
            case 400204:
                return 'thu mục được thêm vào bộ sưu tập';
                break;
            case 400301:
                return 'thu mục được di chuyền';
                break;
            case 400302:
                return 'thu mục được di chuyền';
                break;
            case 400401:
                return 'thư mục được sao chép';
                break;
            case 400402:
                return 'thư mục được sao chép';
                break;
            case 400501:
                return 'thư mục được chia sẻ';
                break;
            case 400502:
                return 'thư mục được chia sẻ';
                break;
            case 400503:
                return 'thư mục được chia sẻ';
                break;
            case 400504:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400505:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400506:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400507:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400508:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400509:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400510:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400511:
                return 'thư mục bị xóa quyền chia sẻ';
                break;
            case 400512:
                return 'thư mục bị xóa quyền chia sẻ';
                break;

            // case 400506:
            //     return 'thư mục bị xóa quyền chia sẻ';
            //     break;
            case 400601:
                return 'thư mục bị xóa';
                break;
            case 400602:
                return 'thư mục bị xóa';
                break;
            case 400507:
                return 'thư mục thay đổi chia sẻ';
                break;
            case 500101:
                return 'tệp được thêm mới';
                break;
            case 500102:
                return 'tệp được thêm mới';
                break;
            case 500103:
                return 'tệp được thêm mới phiên bản';
                break;
            case 500201:
                return 'tệp được chỉnh sửa';
                break;
            case 500202:
                return 'tệp được chỉnh sửa';
                break;
            case 500203:
                return 'tệp được chỉnh sửa phiên bản';
                break;
            case 500204:
                return 'tệp được gán từ khóa';
                break;
            case 500205:
                return 'tệp được gán từ khóa';
                break;
            case 500301:
                return 'tệp bị xóa';
                break;
            case 500302:
                return 'tệp bị xóa';
                break;
            case 500303:
                return 'tệp bị xóa';
                break;
            case 500401:
                return 'tệp được tăng độ phân giải';
                break;
            case 500402:
                return 'tệp được tăng độ phân giải';
                break;
            case 500501:
                return 'tệp được di chuyển';
                break;
            case 500502:
                return 'tệp được di chuyển';
                break;
            case 500601:
                return 'tệp được sao chép';
                break;
            case 500602:
                return 'tệp được sao chép';
                break;
            case 500701:
                return 'tệp được chia sẻ';
                break;
            case 500702:
                return 'tệp được chia sẻ';
                break;
            case 500703:
                return 'tệp được chia sẻ';
                break;
            case 500704:
                return 'tệp được chia sẻ';
                break;
            case 500705:
                return 'tệp được chia sẻ';
                break;
            case 500706:
                return 'tệp được chia sẻ';
                break;
            case 500801:
                return 'tệp được khôi phục';
                break;
            case 500802:
                return 'tệp được khôi phục';
                break;
            case 600101:
                return 'từ khóa được thêm mới';
                break;
            case 600102:
                return 'từ khóa được thêm mới';
                break;
            case 600103:
                return 'từ khóa được thêm mới';
                break;
            case 600104:
                return 'từ khóa được thêm mới';
                break;
            case 600105:
                return 'từ khóa được thêm mới';
                break;
            case 600201:
                return 'từ khóa được cập nhật';
                break;
            case 600202:
                return 'từ khóa được cập nhật';
                break;
            case 600203:
                return 'từ khóa được cập nhật';
                break;
            case 600301:
                return 'từ khóa bị xóa';
                break;
            case 600302:
                return 'từ khóa bị xóa';
                break;
            case 600303:
                return 'từ khóa bị xóa';
                break;
            case 600401:
                return 'từ khóa bị ẩn';
                break;
            case 600402:
                return 'từ khóa bỏ ẩn';
                break;
            case 700101:
                return 'album được thay đổi thumbnail';
                break;
            case 700102:
                return 'nghệ sĩ được thay đổi thumbnail';
                break;
            case 700103:
                return 'hãng nhạc được thay đổi thumbnail';
                break;
            case 800101:
                return 'bộ sưu tập được thêm mới';
                break;
            case 800201:
                return 'bộ sưu tập cập nhật';
                break;
            case 800301:
                return 'bộ sưu tập bị xóa';
                break;
            case 800302:
                return 'bộ sưu tập bị xóa';
                break;
            case 800401:
                return 'thư mục bị xóa khỏi bộ sưu tập';
                break;
            case 800402:
                return 'thư mục bị xóa khỏi bộ sưu tập';
                break;
            case 900101:
                return 'phiên bản thêm mới';
                break;
            case 900201:
                return 'phiên bản cập nhật';
                break;
            case 900301:
                return 'phiên bản công bố';
                break;
            case 900302:
                return 'phiên bản dừng công bố';
                break;
            case 900401:
                return 'phiên bản bị xóa';
                break;
            case 900402:
                return 'phiên bản bị xóa';
                break;
            default:
                return ''
                break;
        }
      }
  }