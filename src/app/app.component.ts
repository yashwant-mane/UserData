import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userdata';

  constructor() { }
  ngOnInit() {
  }
  userData = [
    {
      status: "Pending",
      createdDate: "29-Feb-2020",
      users: [
        {
          name: "Nikhil",
          number: "234562347",
          age: "34",
          registrationDate: "21-Jan-2020"
        },
        {
          name: "Suresh",
          number: "8394856",
          age: "34",
          registrationDate: "22-Feb-2020"
        }
      ]
    },
    {
      status: "In Progress",
      createdDate: "02-Mar-2020",
      users: [
        {
          name: "Bhavesh",
          number: "34573457",
          age: "32",
          registrationDate: "01-Jan-2021"
        }
      ]
    },
    {
      status: "Done",
      createdDate: "29-Dec-2020",
      users: [
        {
          name: "David",
          number: "2345345",
          age: "56",
          registrationDate: "21-Nov-2020"
        }
      ]
    }
  ]
  userDetails = [
    {
      status: "Pending",
      createdDate: "29-Feb-2020",
      users: [
        {
          name: "Nikhil",
          number: "234562347",
          age: "34",
          registrationDate: "21-Jan-2020"
        },
        {
          name: "Suresh",
          number: "8394856",
          age: "34",
          registrationDate: "22-Feb-2020"
        }
      ]
    },
    {
      status: "In Progress",
      createdDate: "02-Mar-2020",
      users: [
        {
          name: "Bhavesh",
          number: "34573457",
          age: "32",
          registrationDate: "01-Jan-2021"
        }
      ]
    },
    {
      status: "Done",
      createdDate: "29-Dec-2020",
      users: [
        {
          name: "David",
          number: "2345345",
          age: "56",
          registrationDate: "21-Nov-2020"
        }
      ]
    }
  ]
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
