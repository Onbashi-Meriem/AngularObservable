import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id:number=0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    // console.log(params)
    this.id=+params['id'];
    // console.log(this.id, typeof(this.id))
   })
  }

}
