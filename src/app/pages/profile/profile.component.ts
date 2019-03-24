import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  user: Object = undefined;
  constructor(private data: AuthService) {} 


  ngOnInit() {
    this.data.getFakeUser().subscribe(data => {
      this.user = data
      console.log(this.user); 
    });
  }

  
}
