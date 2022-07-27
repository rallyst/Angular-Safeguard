import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menuRef: MatDialogRef<MenuComponent>) { }

  ngOnInit(): void {
  }

  public onClose() {
    this.menuRef.close();
  }

  public scrollTo(component: string): void {
    window.location.hash = component;
  }
}