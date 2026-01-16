import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  previewFeatures = [
    { icon: '🚀', title: 'Hiệu suất cao', description: 'Ứng dụng chạy mượt mà và nhanh chóng trên mọi thiết bị.' },
    { icon: '🎯', title: 'Chính xác', description: 'Kiến trúc vững chắc, code sạch và dễ bảo trì.' },
    { icon: '🔒', title: 'Bảo mật', description: 'Bảo vệ dữ liệu với tiêu chuẩn bảo mật cao nhất.' },
  ];
}
