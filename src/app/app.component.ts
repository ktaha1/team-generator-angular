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
  nbreTeam = 0;

  generateTeam() {
    this.errorMessage = '';
    let memberSize = this.members.length;

    if (memberSize == 0) {
      this.errorMessage = 'no member found';
    }

    if (memberSize < this.nbreTeam) {
      this.errorMessage = '# members should be greater than # teams ';
    }

    let teams = memberSize / this.nbreTeam;
  }

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
