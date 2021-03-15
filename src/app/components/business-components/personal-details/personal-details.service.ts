import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  constructor() { }
  public IsValid(that): boolean {
    let valid = true;
    if (that.Age.IsVisible()) {
      valid &&= that.Age.IsValid();
    }
    if (that.Salary.IsVisible()) {
      valid &&= that.Salary.IsValid();
    }
    if (that.SalaryFrequency.Dropdown.IsVisible()) {
      valid &&= that.SalaryFrequency.Dropdown.IsValid();
    }
    if (that.Gender.Toggle.IsVisible()) {
      valid &&= that.Gender.Toggle.IsValid();
    }
    return valid;
  }

  public Validate(that): void {
    if (that.Age.IsVisible()) {
      that.Age.Validate();
    }
    if (that.Salary.IsVisible()) {
      that.Salary.Validate();
    }
    if (that.SalaryFrequency.Dropdown.IsVisible()) {
      that.SalaryFrequency.Dropdown.Validate();
    }
    if (that.Gender.Toggle.IsVisible()) {
      that.Gender.Toggle.Validate();
    }
  }

  InitiateNeedsFlow(that) {
    const isValid = this.IsValid(that);
    that.Model.Children.IsVisible = isValid;
    that.Model.Spouse.IsVisible = isValid;
    that.Model.DisclaimerConfirmation.DefaultValue = false;
    for (let child of that.Model.ChildAges) {
      child.IsVisible = isValid;
    }
    if (!isValid)
      this.Validate(that);
    return that.Model;
  }

  InitiateRatesFlow(that) {
    that.Model.Children.IsVisible = false;
    that.Model.Spouse.IsVisible = false;
    that.Model.DisclaimerConfirmation.DefaultValue = false;
    that.Model.Children.DefaultValue = 0;
    for (let child of that.Model.ChildAges) {
      child.IsVisible = false;
      child.DefaultValue = null;
    }
    const isValid = this.IsValid(that);
    if (!isValid)
      this.Validate(that);
    return that.Model;
  }
}
