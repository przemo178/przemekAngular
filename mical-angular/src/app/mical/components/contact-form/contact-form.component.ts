import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  NgForm,
} from '@angular/forms';
import { IFormItem } from '../../models/menu.interface';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  takeUntil,
  tap,
} from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  allData: IFormItem[] = [];
  // editMode: boolean = false;
  // currentDataId: string;
  // @ViewChild('conForm') form: NgForm;

  public contactForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('abc@example.com', [
      Validators.required,
      Validators.email,
    ]),
    phoneNumber: new FormControl('', [
      this.noStringsAllowed,
      Validators.required,
    ]),
    nationality: new FormControl(false),
    country: new FormControl('poland'),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    skills: new FormArray([new FormControl(null)]),
  });

  // custom validator type only NUMBERS
  noStringsAllowed(control: FormControl): { [key: string]: any } {
    if (!/^\d+$/.test(control.value)) {
      return { digits: true };
    }
    return null;
  }

  constructor(
    private _httpClient: HttpClient,
    private _contactService: ContactService
  ) {}

  public ngOnInit(): void {
    console.log(this.contactForm);
    this.fetchData();
  }

  public dataFetch() {
    this.fetchData();
  }

  addSkills() {
    (<FormArray>this.contactForm.get('skills')).push(new FormControl(null));
  }

  submitForm(params: {
    fullName: string;
    email: string;
    phoneNumber: string;
    nationality?: string;
    country?: string;
    message?: string;
    skills?: [];
  }) {
    this._contactService.postData(params);
  }

  // url = 'http://localhost:3000/applications';

  public fetchData() {
    this._httpClient
      .get<{ [key: string]: IFormItem }>(
        'https://micalangular-default-rtdb.firebaseio.com/applications.json'
      )
      .pipe(
        map((res) => {
          const array = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              array.push({ ...res[key], id: key });
            }
          }
          return array;
        })
      )
      .subscribe((arr) => {
        console.log(arr);
        this.allData = arr;
      });
  }

  public deleteData(id) {
    this._contactService.onDeleteData(id);
  }

  public deleteAllData() {
    this._contactService.onDeleteAllData();
  }

  // public editData(id: string) {
  //   // get data based on the id
  //   let currentData = this.allData.find((d) => {
  //     return d.id === id;
  //   });
  //   console.log(this.form);

  //   //populate the form with the data details
  //   this.form.setValue({
  //     fullName: currentData.fullName,
  //     email: currentData.email,
  //     phoneNumber: currentData.phoneNumber,
  //     nationality: currentData.nationality,
  //     country: currentData.country,
  //     message: currentData.message,
  //     skills: [],
  //   });

  //   //change the button value to update data
  //   this.editMode = true;
  // }

  // submitForm() {
  //   let formData: any = new FormData();
  //   formData.append('fullName', this.contactForm.get('fullName').value);
  //   formData.append('email', this.contactForm.get('email').value);
  //   formData.append('phoneNumber', this.contactForm.get('phoneNumber').value);
  //   formData.append('nationality', this.contactForm.get('nationality').value);
  //   formData.append('country', this.contactForm.get('country').value);
  //   formData.append('message', this.contactForm.get('message').value);
  //   this._httpClient
  //     .post('http://localhost:3000/applications', formData)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => {
  //         console.log(error.message);
  //       }
  //     );
  // }
}
