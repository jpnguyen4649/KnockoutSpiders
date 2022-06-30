import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit()
  {
  }

  clickedAddButton()
  {
    //This would pull all data from
    //this form and click it back to
    //Vendia
    this.goToDashboard();
  }

  goToDashboard()
  {
    this.router.navigate(['']).then();
  }
}
