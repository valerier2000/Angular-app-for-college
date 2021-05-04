import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../czlowiek';
import { MoiLudzie } from '../mock-ludzie';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss'],
})
export class LudzieComponent implements OnInit {
  moiludzie = MoiLudzie;
  constructor() {}

  ngOnInit(): void {}

  wybranaOsoba?: Czlowiek;
  onSelect(osoba: Czlowiek): void {
    this.wybranaOsoba = osoba;
  }
}
