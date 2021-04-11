import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg';
  image3 = 'https://i.giphy.com/media/13XW2MJE0XCoM0/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}