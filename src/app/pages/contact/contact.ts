import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactInfo = [
    { icon: '📧', title: 'Email', value: 'contact@techflow.vn' },
    { icon: '📞', title: 'Điện thoại', value: '+84 123 456 789' },
    { icon: '📍', title: 'Địa chỉ', value: '123 Nguyễn Huệ, Q.1, TP.HCM' },
    { icon: '🕐', title: 'Giờ làm việc', value: 'T2 - T6: 8:00 - 18:00' },
  ];

  socials = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
  ];

  onSubmit() {
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
  }
}
