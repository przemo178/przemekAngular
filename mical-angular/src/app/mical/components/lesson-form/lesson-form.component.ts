import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, debounce, debounceTime, filter, pairwise, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss'],
})
export class LessonFormComponent implements OnInit, OnDestroy {
  public name: string = '';
  public email: string = 'test';
  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    haveSecondName: new FormControl(false),
    email: new FormControl('email@wp.pl')
  })

  public isInfoVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  public isVATAccount$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  

  private _unsubscribe$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    console.log(this.reactiveForm)
    this.reactiveForm.get('name').valueChanges.pipe(
      takeUntil(this._unsubscribe$),
      debounceTime(800)
    ).subscribe(value => {
      // this._accountService.checkAccountNumber(value);
      console.log('this.reactiveform', this.reactiveForm.getRawValue())
      if(value.substring(0, 7) === '62 1111') {
          this.isVATAccount$.next(true);
      } else {
        this.isVATAccount$.next(false);
      }
      if(value === 'przemek') {
        this.reactiveForm.addControl('visibilitySwitch', new FormControl());
      } else {
        this.reactiveForm.removeControl('visibilitySwitch');
      }
    });

    this.reactiveForm.get('haveSecondName').valueChanges.pipe(
      takeUntil(this._unsubscribe$)
    ).subscribe(value => {
      if(value) {
        this.reactiveForm.addControl('secondName', new FormControl());
      } else {
        this.reactiveForm.removeControl('secondName');
      }
    });

    this.reactiveForm.valueChanges.pipe(
      takeUntil(this._unsubscribe$),
      pairwise(),
      filter(([prev, next]) => prev.visibilitySwitch !== next.visibilitySwitch),
    ).subscribe(([prev, next]) => {
      console.log('prev from valueChanges', prev)
      console.log('next from valueChanges', next)

      if(next.visibilitySwitch === 'SHOW') {
        this.isInfoVisible$.next(true);
      } else {
        this.isInfoVisible$.next(false);
      }
    })
    
    // this.reactiveForm.get('visibilitySwitch')?.valueChanges.pipe().subscribe(value => {
    //   console.log('value from CONTROL valueChanges', value)

    //   if(value === 'SHOW') {
    //     this.isInfoVisible$.next(true);
    //   } else {
    //     this.isInfoVisible$.next(false);
    //   }
    // })

    // this.reactiveForm.get('visibilitySwitch').valueChanges.pipe().subscribe(value => {
    //   console.log('value from CONTROL valueChanges', value)

    //   if(value === 'SHOW') {
    //     this.isInfoVisible$.next(true);
    //   } else {
    //     this.isInfoVisible$.next(false);
    //   }
    // })
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  getValue() {
    console.log(this.name);
  }

  submit() {
    const body = {
      prop1: this.name,
      prop2: this.email
    }
    console.log('body :: ', body)
  }

  reactiveSubmit() {
    console.log('form :: ', this.reactiveForm.getRawValue());
  }
}
