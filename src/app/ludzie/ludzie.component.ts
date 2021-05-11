import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../czlowiek';
import { MoiLudzie } from '../mock-ludzie';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss'],
})
export class LudzieComponent implements OnInit {
  moiludzie = MoiLudzie;
  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item$ = firestore.collection('samochody').valueChanges();
  }
  ngOnInit(): void {}

  wybranaOsoba?: Czlowiek;
  onSelect(osoba: Czlowiek): void {
    this.wybranaOsoba = osoba;
  }
}
