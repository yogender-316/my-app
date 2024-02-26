import { Component, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  // name="yogender";

  // firstTextBox='hellow world this is firstTextBox';
  // firstTextBox='';
  // Value='';
  // // Price: number[] = [];

  // isChecked450: boolean = false;
  // isChecked400: boolean = false;
  // isChecked30: boolean = false;

  // getSelectedValues() {
  //   const selectedValues = [];
  //   if (this.isChecked450) selectedValues.push(450);
  //   if (this.isChecked400) selectedValues.push(400);
  //   if (this.isChecked30) selectedValues.push(30);
  //   return selectedValues.join(', ');
  // }

  // dropDown:string='';

  // Games:string[]=['Cricket','Football','Badminton'];
  
  today: Date = new Date();  
  formattedDate: any='';
  yearOfJoining: number[]=[];
  YOJ:string='';
  editingIndex: number | undefined;

  constructor() {
    // Extract year, month, and day
    this.generateYear();
    const year: number = this.today.getFullYear();
    const month: number = this.today.getMonth() + 1; // Months are zero-based, so add 1
    const day: number = this.today.getDate();

    // Format the date as a string
    this.formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    console.log('Today\'s Date:', this.formattedDate);
  }
  employees: any[] = []; // Initialize an empty array to store multiple employees
  employee: any = {}; // Initialize an empty object for a single employee


  generateYear(){
    for( let i=1980;i<=this.today.getFullYear();i++)
    {
      // console.log(this.yearOfJoining);
      this.yearOfJoining.push(i);
    }
    
    console.log(this.yearOfJoining);
    return this.yearOfJoining;
  }

  onSubmit() {
    // Handle the form submission logic here
    alert('Your Data is saved');

  if (this.editingIndex !== undefined) {
    // Update the existing employee
    this.employees[this.editingIndex] = { ...this.employee };
    this.editingIndex = undefined; // Reset editing index
  } else {
    // Add the current employee to the array
    this.employees.push({ ...this.employee });
  }

  // Clear the form or create a new object for the next employee
  this.employee = {};
  }
  editEmployee(emp: any) {
    // Implement the logic to handle editing an employee
    this.employee.name = emp.name;
    this.employee.empId = emp.empId;
    this.employee.gender = emp.gender;
    this.employee.joiningDate = emp.joiningDate;
    this.employee.email = emp.email;
    this.employee.phoneNumber = emp.phoneNumber;
    this.employee.YOJ = emp.YOJ;
  
    // Store the index of the employee being edited
    this.editingIndex = this.employees.indexOf(emp);
  }

  // Method to handle Delete button click
  deleteEmployee(employeeToDelete: any) {
    // Implement the logic to handle deleting an employee
    let index = this.employees.findIndex(employee => employee.empId === employeeToDelete.empId);

    if (index !== -1) {
        // If the employee is found, remove it from the array
        this.employees.splice(index, 1);
        console.log('Deleted Employee:', employeeToDelete);
    } else {
        console.log('Employee not found for deletion:', employeeToDelete);
    }
}


  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
}
