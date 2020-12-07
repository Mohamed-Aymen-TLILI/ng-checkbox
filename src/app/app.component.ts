import { Component, VERSION } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { name: 'One', id: 1, group: 'A' },
    { name: 'Two', id: 2, group: 'A' },
    { name: 'Three', id: 3, group: 'A' },
    { name: 'Four', id: 4, group: 'B' },
    { name: 'Five', id: 5, group: 'B' },
    { name: 'Six', id: 6, group: 'B' },
  ]

  form = new FormGroup({
    items: new FormArray([])
  })

  ngOnInit() {
    this.items.forEach(e => {
      this.control.push(new FormControl(false));
    })
  }

  submit() { }

  get control() {
    return this.form.get('items') as FormArray;
  }
}
