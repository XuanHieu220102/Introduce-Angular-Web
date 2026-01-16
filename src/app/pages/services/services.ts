import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      icon: '💻',
      title: 'Phát triển Web',
      description: 'Xây dựng ứng dụng web hiện đại với Angular, React, Vue.js và các công nghệ tiên tiến.',
      features: ['Single Page Application', 'Progressive Web App', 'Responsive Design', 'SEO Optimization'],
      price: '15,000,000đ'
    },
    {
      icon: '📱',
      title: 'Ứng dụng Mobile',
      description: 'Phát triển ứng dụng di động đa nền tảng với hiệu suất native.',
      features: ['iOS & Android', 'React Native / Flutter', 'Push Notifications', 'Offline Support'],
      price: '25,000,000đ'
    },
    {
      icon: '☁️',
      title: 'Giải pháp Cloud',
      description: 'Triển khai và quản lý hạ tầng cloud với AWS, GCP, Azure.',
      features: ['Auto Scaling', 'CI/CD Pipeline', 'Monitoring', '24/7 Support'],
      price: '10,000,000đ'
    },
  ];

  processSteps = [
    { title: 'Tư vấn', description: 'Phân tích yêu cầu và đề xuất giải pháp' },
    { title: 'Thiết kế', description: 'Thiết kế UI/UX và kiến trúc hệ thống' },
    { title: 'Phát triển', description: 'Code và xây dựng tính năng' },
    { title: 'Kiểm thử', description: 'Testing và đảm bảo chất lượng' },
    { title: 'Triển khai', description: 'Deploy và bàn giao sản phẩm' },
  ];
}
