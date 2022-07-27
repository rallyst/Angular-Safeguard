import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openMenu(): void {
    let menuRef = this.dialog.open(MenuComponent, {
      width: '100%',
      height:  '100%',
      maxWidth: '100%',
      minHeight: '100%',
      hasBackdrop: false
    });
  }

  public scrollTo(component: string): void {
    window.location.hash = component;
  }
}
