import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/Data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  id:string = "0"
  @Input()
  imageSecondary: string = ""
  @Input()
  titleSecondary: string =""

  constructor() { }

  ngOnInit(): void {
    if(this.id != null){
      this.imageSecondary = dataFake[+this.id].photoCover
      this.titleSecondary = dataFake[+this.id].title
    }
  }

}
