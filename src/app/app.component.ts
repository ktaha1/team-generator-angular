import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';

  addMember() {
    if (this.newMemberName) {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Name cannot be empty';
    }
  }

  typing(name: string) {
    this.newMemberName = name;
  }
}
