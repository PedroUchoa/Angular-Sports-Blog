import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { dataFake } from 'src/app/Data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  id: string = "0"
  @Input()
  imagePrincipal: string = ""
  @Input()
  titlePrincipal: string = ""
  @Input()
  descriptionPrincipal: string = ""


  constructor(
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(+this.id)
    this.imagePrincipal = dataFake[+this.id].photoCover
    this.titlePrincipal = dataFake[+this.id].title
    this.descriptionPrincipal = dataFake[+this.id].description


  }


}
