import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public progress?: string = '0%';
  // public problems?: number = 2;

  public submitPaperForm: FormGroup = this.fb.group({
    nameControl: [null, [Validators.required]],
    subjectControl: [null],
    subjectInfo: this.fb.group({
      streetControl: [],
      postalcodeControl: [],
    }),
    problems: this.fb.array([this.createProblem()], Validators.required),
  });

  ngOnInit(): void {}

  createProblem(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      keywords: [null, Validators.required],
    });
  }

  addProblem() {
    this.problems.push(this.createProblem());
  }

  uploadPaper() {
    console.log('Paper uploaded');
  }

  public get problems(): FormArray {
    return <FormArray>this.submitPaperForm.get('problems');
  }

  nextStep(index: any) {
    const stepButtons = document.querySelectorAll('.step-button');
    this.progress = (index * 100) / 2 + '%';

    stepButtons.forEach((item, secindex) => {
      if (index > secindex) {
        item.classList.remove('btn-primary');
        item.classList.add('btn-secondary');
      }
      if (index <= secindex) {
        item.classList.add('btn-primary');
        item.classList.remove('btn-secondary');
      }
    });
  }
}
