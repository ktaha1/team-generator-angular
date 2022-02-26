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
  nbrOfTeams: number | string = '';
  teams: string[][] = [];

  reset() {
    this.members = [];
    this.errorMessage = '';
    this.nbrOfTeams = 0;
    this.teams = [];
  }

  generateTeam() {
    if (!this.controleInput()) {
      return;
    }

    let memberList = this.members;

    for (let x = 0; x < this.nbrOfTeams; x++) {
      this.teams[x] = new Array();
    }

    while (memberList.length) {
      for (let i = 0; i < this.nbrOfTeams; i++) {
        let randomIndex = Math.floor(Math.random() * memberList.length);
        this.teams[i].push(memberList[randomIndex]);

        memberList.splice(randomIndex, 1);
        if (!memberList.length) {
          break;
        }
      }
    }
    console.log(this.teams);
  }

  controleInput() {
    this.errorMessage = '';
    let memberSize = this.members.length;

    if (this.nbrOfTeams < 1) {
      this.errorMessage = '# of teams must be greater than 1';
      return false;
    }

    if (memberSize == 0) {
      this.errorMessage = 'no member found';
      return false;
    }

    if (memberSize < this.nbrOfTeams) {
      this.errorMessage = '# of members should be greater than # of teams ';
      return false;
    }
    return true;
  }

  inputTeam(nbr: string) {
    this.nbrOfTeams = Number(nbr);
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
