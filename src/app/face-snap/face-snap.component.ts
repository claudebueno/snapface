import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  snapsDone!: boolean;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.snapsDone = false;
  }
  onSnap() {
    if (this.snapsDone == false) {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
      this.snapsDone = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
      this.snapsDone = false;
    }
  }
}