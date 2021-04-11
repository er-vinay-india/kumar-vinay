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
        'tittle': 'River Rafting',
        'location': 'Ganga River, Rishikesh, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/2.jpg',
        'tittle': 'Independence Day',
        'location': 'Ethane Technologies, Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/3.jpg',
        'tittle': 'Pound',
        'location': 'Orcha, Madhya Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/4.jpg',
        'tittle': 'Bike Test',
        'location': 'The Great India Palce, Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/5.jpg',
        'tittle': 'Mountain Breath',
        'location': 'Triund Mountain, Triund, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/6.jpg',
        'tittle': 'Royal Enfield Drive',
        'location': 'Chopta, Uttrakhand, India'
      },
      {
        'src': 'assets/image/profile/user-001/7.jpg',
        'tittle': 'Highway Party',
        'location': 'Amroha, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/8.jpg',
        'tittle': 'Samadhi Time',
        'location': 'Sridhar Baba, Jammu & Kashmir, India'
      },
      {
        'src': 'assets/image/profile/user-001/9.jpg',
        'tittle': 'Surya Mandir Kund Darshan',
        'location': 'Jhansi, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/10.jpg',
        'tittle': 'Crunchy Fashion New Office',
        'location': 'Noida, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/11.jpg',
        'tittle': 'Gym Preparation',
        'location': 'Vatika City, Gurgaon, Haryana, India'
      },
      {
        'src': 'assets/image/profile/user-001/12.jpg',
        'tittle': 'Sharukh Khan Pose',
        'location': 'Church Streat, Shimla, Himachal Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/13.jpg',
        'tittle': 'The Tourist Look',
        'location': 'Church Streat, Shimla, Himachal Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/14.jpg',
        'tittle': 'Don Look',
        'location': 'NH-24, Ghaziabad, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/15.jpg',
        'tittle': 'Temple Visit',
        'location': 'Chappra Nagar, South Delhi, Delhi, India'
      },
      {
        'src': 'assets/image/profile/user-001/16.jpg',
        'tittle': 'Traditional Look at Wedding Garima',
        'location': 'Marriage Hall, Bayana, Rajasthan, India'
      },
      {
        'src': 'assets/image/profile/user-001/17.jpg',
        'tittle': 'Hunter Look',
        'location': 'Marriage Hall, Bayana, Rajasthan, India'
      },
      {
        'src': 'assets/image/profile/user-001/18.jpg',
        'tittle': 'Cake Walk',
        'location': 'Mauranipur, Uttar Pradesh, India'
      },
      {
        'src': 'assets/image/profile/user-001/19.jpg',
        'tittle': 'Boating Beast',
        'location': 'Paradise Beach, Gokarna, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/20.jpg',
        'tittle': 'Jungle Jack',
        'location': 'Dandeli, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/21.jpg',
        'tittle': 'Rock Buddy',
        'location': 'Sinthreli, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/22.jpg',
        'tittle': 'Crona Light Festival',
        'location': 'BTM Layout, Banglore, Karnataka, India'
      },
      {
        'src': 'assets/image/profile/user-001/23.jpg',
        'tittle': 'Newspaper Reading',
        'location': 'Cannaught Place, Center Delhi, Delhi, India'
      }
    ];
  }

  openModal(currentObj: Object): void {
    this.renderOnModal.mySubject.next(currentObj);
  }
}
