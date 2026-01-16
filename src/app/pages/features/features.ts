import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  features = [
    { icon: '🚀', title: 'Tốc độ nhanh', description: 'Ứng dụng chạy mượt mà với hiệu suất tối ưu, tải trang trong tích tắc.', featured: false },
    { icon: '🎯', title: 'Chính xác', description: 'Kiến trúc vững chắc, code sạch và dễ bảo trì cho dự án lâu dài.', featured: true },
    { icon: '🔒', title: 'Bảo mật', description: 'Bảo vệ dữ liệu người dùng với các tiêu chuẩn bảo mật cao nhất.', featured: false },
    { icon: '📱', title: 'Responsive', description: 'Giao diện thích ứng hoàn hảo trên mọi thiết bị và kích thước màn hình.', featured: false },
    { icon: '🔧', title: 'Dễ tùy biến', description: 'Linh hoạt mở rộng và tùy chỉnh theo nhu cầu riêng của từng dự án.', featured: false },
    { icon: '💡', title: 'Sáng tạo', description: 'Thiết kế hiện đại, độc đáo với những animation mượt mà cuốn hút.', featured: false },
    { icon: '⚙️', title: 'TypeScript', description: 'Sử dụng TypeScript giúp phát hiện lỗi sớm và tăng năng suất phát triển.', featured: false },
    { icon: '🔄', title: 'Reactive', description: 'Quản lý state hiệu quả với RxJS và các reactive patterns hiện đại.', featured: false },
    { icon: '📦', title: 'Modular', description: 'Cấu trúc module rõ ràng giúp dễ dàng quản lý và mở rộng ứng dụng.', featured: false },
  ];

  technologies = [
    { icon: '🅰️', name: 'Angular' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '📄', name: 'HTML5' },
    { icon: '⚡', name: 'RxJS' },
    { icon: '🧪', name: 'Jasmine' },
    { icon: '📦', name: 'npm' },
    { icon: '🔧', name: 'Webpack' },
  ];
}
