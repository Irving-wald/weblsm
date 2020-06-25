import { Component, OnInit,EventEmitter, Input, Output,ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger,{static:true}) trigger: MatMenuTrigger;

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  @Output() changed = new EventEmitter<boolean>();

  toggle(){
    this.changed.emit();
  }

  closeSession(){
    this.router.navigate(['/login']);
  }

}
