import { Field } from 'src/app/middleware/models/form.models';
export class PersonalDetailsModel {
  public Age: Field;
  public Salary: Field;
  public SalaryFrequency: Field;
  public NeedsButton: Field;
  public Spouse: Field;
  public Gender: Field;
  public Children: Field;
  public ChildAges: Array<Field>;
  public DisclaimerConfirmation: Field;
  public ContinueButton: Field;
  public CostButton: Field;
  public Title: string;
  public SubHeader: string;
}

