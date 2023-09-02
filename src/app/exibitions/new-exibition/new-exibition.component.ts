import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-new-exibition',
  templateUrl: './new-exibition.component.html',
  styleUrls: ['./new-exibition.component.css'],
})
export class NewExibitionComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  constructor(private service: ExibitionService) {}

  onSubmit() {
    // this.service.addExhibition(this.form.)
  }
}
