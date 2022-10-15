import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  snapsDone!: boolean;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createDate = new Date();
    this.snaps = 6;
    this.buttonText = 'Oh Snap!';
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapsDone = false;
  }
  onSnap() {
    if (this.snapsDone == false) {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
      this.snapsDone = true;
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
      this.snapsDone = false;
    }
  }
}