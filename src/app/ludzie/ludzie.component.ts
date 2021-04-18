import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../czlowiek';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss'],
})
export class LudzieComponent implements OnInit {
  czlowiek: Czlowiek = {
    id: 1,
    nazwisko: 'Matronowicz',
    imie: 'Antoni',
    wiek: 42,
    utworzony: new Date('2020-03-12'),
    zdjecie: 'antoni.jpg',
  };
  constructor() {}

  ngOnInit(): void {}
}
