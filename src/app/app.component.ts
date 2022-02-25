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
  teams : string[][] = [];

  generateTeam() {
    this.errorMessage = '';
    let memberSize = this.members.length;

    if(this.nbreTeam<1){
      this.errorMessage = '# teams must be greater than 1';
      return
    }

    if (memberSize == 0) {
      this.errorMessage = 'no member found';
      return
    }

    if (memberSize < this.nbreTeam) {
      this.errorMessage = '# members should be greater than # teams ';
      return
    }

    let nbr = memberSize / this.nbreTeam;

    for (let i = 0; i < this.nbreTeam ; i++) {
      this.teams[i]= [];
      for (let j = 0; j < nbr; j++) {
        if (this.members.length>0) {
          this.teams[i][j] =  this.members.pop() || '';
        }
      }
    }
    console.log(this.teams);


  }

  inputTeam(nbr : number){
    this.nbreTeam = nbr;
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
