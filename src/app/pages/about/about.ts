import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats = [
    { value: '5+', label: 'Năm kinh nghiệm' },
    { value: '100+', label: 'Dự án hoàn thành' },
    { value: '50+', label: 'Khách hàng tin tưởng' },
  ];

  values = [
    { icon: '💎', title: 'Chất lượng', description: 'Cam kết mang đến sản phẩm chất lượng cao nhất' },
    { icon: '🤝', title: 'Tận tâm', description: 'Luôn đặt lợi ích khách hàng lên hàng đầu' },
    { icon: '🚀', title: 'Đổi mới', description: 'Không ngừng học hỏi và áp dụng công nghệ mới' },
    { icon: '⏰', title: 'Đúng hẹn', description: 'Đảm bảo tiến độ và cam kết thời gian' },
  ];

  team = [
    { avatar: '👨‍💻', name: 'Nguyễn Văn A', role: 'CEO & Founder', bio: 'Hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm' },
    { avatar: '👩‍💻', name: 'Trần Thị B', role: 'CTO', bio: 'Chuyên gia về kiến trúc hệ thống và cloud computing' },
    { avatar: '👨‍🎨', name: 'Lê Văn C', role: 'Lead Designer', bio: 'Đam mê thiết kế UI/UX và trải nghiệm người dùng' },
    { avatar: '👩‍🔧', name: 'Phạm Thị D', role: 'Tech Lead', bio: 'Chuyên gia Angular và các framework frontend hiện đại' },
  ];
}
