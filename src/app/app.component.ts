import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchValue1 = '';
  searchValue2 = '';

  control1 = new UntypedFormControl('', Validators.required);
  control2 = new UntypedFormControl('', Validators.required);

  options: string[] = ['One', 'Two', 'Three'];
}
