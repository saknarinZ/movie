export class Movie {
  id: number;
  name: string;
}

export class seatRow {
  row: string;
  seats: seat[]
}
export interface seat {
  id: number
  no: number
  status: 'IDLE' | 'BUSY'
}

export const MOVIES: Movie[] = [
  { id: 1, name: 'Your Name' },
  { id: 2, name: 'Weathering With' },
  { id: 3, name: 'A Silent Voice' },
  { id: 4, name: 'Kyoukai no Kanata' },
  { id: 5, name: 'Centimeters Per Second' },
  { id: 6, name: 'black panther' },
  { id: 7, name: 'spider man far from home' },
  { id: 8, name: 'fast and furious shaw and hobbs' },
  { id: 9, name: ' Mortal Engines' },
  { id: 10, name: 'Alita: Battle Angel' },
  { id: 11, name: 'john wick 3' },
  { id: 12, name: 'deadpool 2' }
];

export const SEAT: seatRow[] = [
  {
    row: 'A',
    seats: [
      {id: 1, no: 1, status: 'BUSY'},
      {id: 2, no: 2,status: 'IDLE'},
      {id: 3, no: 3,status: 'IDLE'},
      {id: 4, no: 4,status: 'IDLE'},
      {id: 5, no: 5,status: 'BUSY'},
      {id: 6, no: 6,status: 'IDLE'},
      {id: 7, no: 7,status: 'IDLE'},
      {id: 8, no: 8,status: 'IDLE'},
      {id: 9, no: 9,status: 'IDLE'},
      {id: 10, no: 10,status: 'IDLE'},
      {id: 11, no: 11,status: 'IDLE'},
      {id: 12, no: 12,status: 'IDLE'},
      {id: 13, no: 13,status: 'IDLE'},
      {id: 14, no: 14,status: 'IDLE'},
      {id: 15, no: 15,status: 'IDLE'}
    ]
  },
  {
    row: 'B',
    seats: [
      {id: 16, no: 1, status: 'IDLE'},
      {id: 17, no: 2,status: 'IDLE'},
      {id: 18, no: 3,status: 'BUSY'},
      {id: 19, no: 4,status: 'BUSY'},
      {id: 20, no: 5,status: 'IDLE'},
      {id: 21, no: 6,status: 'IDLE'},
      {id: 22, no: 7,status: 'IDLE'},
      {id: 23, no: 8,status: 'IDLE'},
      {id: 24, no: 9,status: 'IDLE'},
      {id: 25, no: 10,status: 'IDLE'},
      {id: 26, no: 11,status: 'IDLE'},
      {id: 27, no: 12,status: 'BUSY'},
      {id: 28, no: 13,status: 'BUSY'},
      {id: 29, no: 14,status: 'BUSY'},
      {id: 30, no: 15,status: 'BUSY'}
    ]
  },
  {
    row: 'C',
    seats: [
      {id: 31, no: 1, status: 'IDLE'},
      {id: 32, no: 2,status: 'IDLE'},
      {id: 33, no: 3,status: 'BUSY'},
      {id: 34, no: 4,status: 'IDLE'},
      {id: 35, no: 5,status: 'IDLE'},
      {id: 36, no: 6,status: 'IDLE'},
      {id: 37, no: 7,status: 'IDLE'},
      {id: 38, no: 8,status: 'IDLE'},
      {id: 39, no: 9,status: 'IDLE'},
      {id: 40, no: 10,status: 'IDLE'},
      {id: 41, no: 11,status: 'BUSY'},
      {id: 42, no: 12,status: 'BUSY'},
      {id: 43, no: 13,status: 'IDLE'},
      {id: 44, no: 14,status: 'IDLE'},
      {id: 45, no: 15,status: 'IDLE'}
    ]
  },
  {
    row: 'D',
    seats: [
      {id: 46, no: 1, status: 'IDLE'},
      {id: 47, no: 2,status: 'IDLE'},
      {id: 48, no: 3,status: 'IDLE'},
      {id: 49, no: 4,status: 'IDLE'},
      {id: 50, no: 5,status: 'IDLE'},
      {id: 51, no: 6,status: 'IDLE'},
      {id: 52, no: 7,status: 'IDLE'},
      {id: 53, no: 8,status: 'IDLE'},
      {id: 54, no: 9,status: 'BUSY'},
      {id: 55, no: 10,status: 'BUSY'},
      {id: 56, no: 11,status: 'IDLE'},
      {id: 57, no: 12,status: 'IDLE'},
      {id: 58, no: 13,status: 'IDLE'},
      {id: 59, no: 14,status: 'IDLE'},
      {id: 60, no: 15,status: 'IDLE'}
    ]
  },
  {
    row: 'E',
    seats: [
      {id: 61, no: 1, status: 'IDLE'},
      {id: 62, no: 2,status: 'IDLE'},
      {id: 63, no: 3,status: 'IDLE'},
      {id: 64, no: 4,status: 'IDLE'},
      {id: 65, no: 5,status: 'IDLE'},
      {id: 66, no: 6,status: 'IDLE'},
      {id: 67, no: 7,status: 'IDLE'},
      {id: 68, no: 8,status: 'IDLE'},
      {id: 69, no: 9,status: 'BUSY'},
      {id: 70, no: 10,status: 'BUSY'},
      {id: 71, no: 11,status: 'IDLE'},
      {id: 72, no: 12,status: 'IDLE'},
      {id: 73, no: 13,status: 'IDLE'},
      {id: 74, no: 14,status: 'IDLE'},
      {id: 75, no: 15,status: 'IDLE'}
    ]
  },
  {
    row: 'F',
    seats: [
      {id: 76, no: 1, status: 'BUSY'},
      {id: 77, no: 2,status: 'BUSY'},
      {id: 78, no: 3,status: 'BUSY'},
      {id: 79, no: 4,status: 'IDLE'},
      {id: 80, no: 5,status: 'IDLE'},
      {id: 81, no: 6,status: 'IDLE'},
      {id: 82, no: 7,status: 'IDLE'},
      {id: 83, no: 8,status: 'IDLE'},
      {id: 84, no: 9,status: 'IDLE'},
      {id: 85, no: 10,status: 'IDLE'},
      {id: 86, no: 11,status: 'IDLE'},
      {id: 87, no: 12,status: 'IDLE'},
      {id: 88, no: 13,status: 'IDLE'},
      {id: 89, no: 14,status: 'IDLE'},
      {id: 90, no: 15,status: 'IDLE'}
    ]
  },
  {
    row: 'G',
    seats: [
      {id: 91, no: 1, status: 'BUSY'},
      {id: 92, no: 2,status: 'BUSY'},
      {id: 93, no: 3,status: 'IDLE'},
      {id: 94, no: 4,status: 'IDLE'},
      {id: 95, no: 5,status: 'IDLE'},
      {id: 96, no: 6,status: 'BUSY'},
      {id: 97, no: 7,status: 'BUSY'},
      {id: 98, no: 8,status: 'BUSY'},
      {id: 99, no: 9,status: 'BUSY'},
      {id: 100, no: 10,status: 'IDLE'},
      {id: 101, no: 11,status: 'IDLE'},
      {id: 102, no: 12,status: 'IDLE'},
      {id: 103, no: 13,status: 'BUSY'},
      {id: 104, no: 14,status: 'BUSY'},
      {id: 105, no: 15,status: 'BUSY'}
    ]
  }
]

