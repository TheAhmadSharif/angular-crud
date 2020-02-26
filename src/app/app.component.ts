import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'This is a simple app.';
  editDiv:boolean  = false;
  editMember: any;
  id: any;
  teams = ["Mehrab Miah", "Sunom Singha","Ahmad Sharif", "Mustafizur Rahman Khan"];
  addItem = function (newmember: any) {
    this.teams.push(newmember.value);
    newmember.value = '';
  }
  removeItem = function (id:any) {
    this.teams.splice(id, 1);
  }
  editItem = function (id:any) {
    this.editDiv =! this.editDiv;
    this.editMember = this.teams[id];
    this.id = id;
  }
  updateItem = function (id:any, editMember:any) {
    this.teams[id] = editMember;
    this.editDiv =! this.editDiv;
  }
    
}