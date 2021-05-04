import { Czlowiek } from './czlowiek';

export const MoiLudzie: Czlowiek[] = [
  {
    id: 1,
    nazwisko: 'Einstein',
    imie: 'Albert',
    wiek: 65,
    utworzony: new Date('2020-03-12'),
    zdjecie: 'einstein.jpg',
  },
  {
    id: 2,
    nazwisko: 'Heisenberg',
    imie: 'Werner',
    wiek: 52,
    utworzony: new Date('2021-03-12'),
    zdjecie: 'heisenberg.jpg',
  },
  {
    id: 3,
    nazwisko: 'Kaku',
    imie: 'Michio',
    wiek: 42,
    utworzony: new Date('2021-05-12'),
    zdjecie: 'kaku.jpg',
  },
];
