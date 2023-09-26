import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/Data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = "3"
  imagePrincipal: string = ""
  titlePrincipal: string = ""
  descriptionPrincipal: string = ""


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
      this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0];
    console.log(result)
    this.imagePrincipal = result.photoCover
    this.titlePrincipal = result.title
    this.descriptionPrincipal = result.description
  }

}
