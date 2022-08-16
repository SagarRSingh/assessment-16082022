import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector:'[checkMarks]'
})
export class MarksDirective{
  @Input()
  subMarks:number=-1;
  @Input()
  totalMarks:number=-1;

  @HostBinding('style.background-color') bgColor = 'white';

  ngOnInit(){
      if(this.subMarks>0 && this.subMarks<35) this.bgColor = 'red';
      if(this.totalMarks>0 && this.totalMarks<250) this.bgColor = 'blue';
      if(this.totalMarks>0 && this.totalMarks >450) this.bgColor = 'green'; 
  }
}