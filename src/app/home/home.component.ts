import { Component, OnInit } from '@angular/core';
import { RenderOnModalService } from '../render-on-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgs: any = [];

  constructor(
    private renderOnModal: RenderOnModalService
  ) { }

  ngOnInit(): void {
    this.imgs = [
      {
        'src': 'assets/image/profile/user-001/1.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/1-sm.webp',
        'title': 'River Rafting',
        'location': 'Ganga River, Rishikesh, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/2.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/2-sm.webp',
        'title': 'Independence Day',
        'location': 'Ethane Technologies, Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/3.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/3-sm.webp',
        'title': 'Pound',
        'location': 'Orcha, Madhya Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/4.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/4-sm.webp',
        'title': 'Bike Test',
        'location': 'The Great India Palce, Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/5.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/5-sm.webp',
        'title': 'Mountain Breath',
        'location': 'Triund Mountain, Triund, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/6.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/6-sm.webp',
        'title': 'Royal Enfield Drive',
        'location': 'Chopta, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/7.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/7-sm.webp',
        'title': 'Highway Party',
        'location': 'Amroha, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/8.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/8-sm.webp',
        'title': 'Samadhi Time',
        'location': 'Sridhar Baba, Jammu & Kashmir, India'
      },
      {
        'src': 'assets/image/profile/user-001/9.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/9-sm.webp',
        'title': 'Surya Mandir Kund Darshan',
        'location': 'Jhansi, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/10.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/10-sm.webp',
        'title': 'Crunchy Fashion New Office',
        'location': 'Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/11.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/11-sm.webp',
        'title': 'Gym Preparation',
        'location': 'Vatika City, Gurgaon, Haryana, India'
      },
      {
        'src': 'assets/image/profile/user-001/12.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/12-sm.webp',
        'title': 'Sharukh Khan Pose',
        'location': 'Church Streat, Shimla, Himachal Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/13.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/13-sm.webp',
        'title': 'The Tourist Look',
        'location': 'Church Streat, Shimla, Himachal Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/14.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/14-sm.webp',
        'title': 'Don Look',
        'location': 'NH-24, Ghaziabad, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/15.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/15-sm.webp',
        'title': 'Temple Visit',
        'location': 'Chappra Nagar, South Delhi, Delhi, India'
      },
      {
        'src': 'assets/image/profile/user-001/16.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/16-sm.webp',
        'title': 'Traditional Look at Wedding Garima',
        'location': 'Marriage Hall, Bayana, Rajasthan, India'
      },
      {
        'src': 'assets/image/profile/user-001/17.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/17-sm.webp',
        'title': 'Hunter Look',
        'location': 'Marriage Hall, Bayana, Rajasthan, India'
      },
      {
        'src': 'assets/image/profile/user-001/18.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/18-sm.webp',
        'title': 'Cake Walk',
        'location': 'Mauranipur, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/19.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/19-sm.webp',
        'title': 'Boating Beast',
        'location': 'Paradise Beach, Gokarna, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/20.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/20-sm.webp',
        'title': 'Jungle Jack',
        'location': 'Dandeli, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/21.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/21-sm.webp',
        'title': 'Rock Buddy',
        'location': 'Sinthreli, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/22.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/22-sm.webp',
        'title': 'Crona Light Festival',
        'location': 'BTM Layout, Banglore, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/23.jpg',
        'srcSm': 'assets/image/profile/user-001-optz/23-sm.webp',
        'title': 'Newspaper Reading',
        'location': 'Cannaught Place, Center Delhi, Delhi, India'
      }
    ];
  }

  openModal(currentObj: Object): void {
    this.renderOnModal.mySubject.next(currentObj);
  }
}
