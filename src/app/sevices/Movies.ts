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
  price: number
  status: 'IDLE' | 'BUSY' | 'MARKING'
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
      {id: 1, no: 1,status:'BUSY'  ,price: 100},
      {id: 2, no: 2,status: 'IDLE' ,price: 100},
      {id: 3, no: 3,status: 'IDLE' ,price: 100},
      {id: 4, no: 4,status: 'IDLE' ,price: 100},
      {id: 5, no: 5,status: 'BUSY' ,price: 100},
      {id: 6, no: 6,status: 'IDLE' ,price: 100},
      {id: 7, no: 7,status: 'IDLE' ,price: 100},
      {id: 8, no: 8,status: 'IDLE' ,price: 100},
      {id: 9, no: 9,status: 'IDLE' ,price: 100},
      {id: 10, no: 10,status: 'IDLE',price: 100},
      {id: 11, no: 11,status: 'IDLE',price: 100},
      {id: 12, no: 12,status: 'IDLE',price: 100},
      {id: 13, no: 13,status: 'IDLE',price: 100},
      {id: 14, no: 14,status: 'IDLE',price: 100},
      {id: 15, no: 15,status: 'IDLE',price: 100}
    ]
  },
  {
    row: 'B',
    seats: [
      {id: 16, no: 1, status: 'IDLE',price: 100},
      {id: 17, no: 2,status: 'IDLE',price: 100},
      {id: 18, no: 3,status: 'BUSY',price: 100},
      {id: 19, no: 4,status: 'BUSY',price: 100},
      {id: 20, no: 5,status: 'IDLE',price: 100},
      {id: 21, no: 6,status: 'IDLE',price: 100},
      {id: 22, no: 7,status: 'IDLE',price: 100},
      {id: 23, no: 8,status: 'IDLE',price: 100},
      {id: 24, no: 9,status: 'IDLE',price: 100},
      {id: 25, no: 10,status: 'IDLE',price: 100},
      {id: 26, no: 11,status: 'IDLE',price: 100},
      {id: 27, no: 12,status: 'BUSY',price: 100},
      {id: 28, no: 13,status: 'BUSY',price: 100},
      {id: 29, no: 14,status: 'BUSY',price: 100},
      {id: 30, no: 15,status: 'BUSY',price: 100}
    ]
  },
  {
    row: 'C',
    seats: [
      {id: 31, no: 1, status: 'IDLE' ,price: 80},
      {id: 32, no: 2,status: 'IDLE',price: 80},
      {id: 33, no: 3,status: 'BUSY',price: 80},
      {id: 34, no: 4,status: 'IDLE',price: 80},
      {id: 35, no: 5,status: 'IDLE',price: 80},
      {id: 36, no: 6,status: 'IDLE',price: 80},
      {id: 37, no: 7,status: 'IDLE',price: 80},
      {id: 38, no: 8,status: 'IDLE',price: 80},
      {id: 39, no: 9,status: 'IDLE',price: 80},
      {id: 40, no: 10,status: 'IDLE',price: 80},
      {id: 41, no: 11,status: 'BUSY',price: 80},
      {id: 42, no: 12,status: 'BUSY',price: 80},
      {id: 43, no: 13,status: 'IDLE',price: 80},
      {id: 44, no: 14,status: 'IDLE',price: 80},
      {id: 45, no: 15,status: 'IDLE',price: 80}
    ]
  },
  {
    row: 'D',
    seats: [
      {id: 46, no: 1, status: 'IDLE',price: 80},
      {id: 47, no: 2,status: 'IDLE',price: 80},
      {id: 48, no: 3,status: 'IDLE',price: 80},
      {id: 49, no: 4,status: 'IDLE',price: 80},
      {id: 50, no: 5,status: 'IDLE',price: 80},
      {id: 51, no: 6,status: 'IDLE',price: 80},
      {id: 52, no: 7,status: 'IDLE',price: 80},
      {id: 53, no: 8,status: 'IDLE',price: 80},
      {id: 54, no: 9,status: 'BUSY',price: 80},
      {id: 55, no: 10,status: 'BUSY',price: 80},
      {id: 56, no: 11,status: 'IDLE',price: 80},
      {id: 57, no: 12,status: 'IDLE',price: 80},
      {id: 58, no: 13,status: 'IDLE',price: 80},
      {id: 59, no: 14,status: 'IDLE',price: 80},
      {id: 60, no: 15,status: 'IDLE',price: 80}
    ]
  },
  {
    row: 'E',
    seats: [
      {id: 61, no: 1, status: 'IDLE',price: 80},
      {id: 62, no: 2,status: 'IDLE',price: 80},
      {id: 63, no: 3,status: 'IDLE',price: 80},
      {id: 64, no: 4,status: 'IDLE',price: 80},
      {id: 65, no: 5,status: 'IDLE',price: 80},
      {id: 66, no: 6,status: 'IDLE',price: 80},
      {id: 67, no: 7,status: 'IDLE',price: 80},
      {id: 68, no: 8,status: 'IDLE',price: 80},
      {id: 69, no: 9,status: 'BUSY',price: 80},
      {id: 70, no: 10,status: 'BUSY',price: 80},
      {id: 71, no: 11,status: 'IDLE',price: 80},
      {id: 72, no: 12,status: 'IDLE',price: 80},
      {id: 73, no: 13,status: 'IDLE',price: 80},
      {id: 74, no: 14,status: 'IDLE',price: 80},
      {id: 75, no: 15,status: 'IDLE',price: 80}
    ]
  },
  {
    row: 'F',
    seats: [
      {id: 76, no: 1, status: 'BUSY',price: 80},
      {id: 77, no: 2,status: 'BUSY',price: 80},
      {id: 78, no: 3,status: 'BUSY',price: 80},
      {id: 79, no: 4,status: 'IDLE',price: 80},
      {id: 80, no: 5,status: 'IDLE',price: 80},
      {id: 81, no: 6,status: 'IDLE',price: 80},
      {id: 82, no: 7,status: 'IDLE',price: 80},
      {id: 83, no: 8,status: 'IDLE',price: 80},
      {id: 84, no: 9,status: 'IDLE',price: 80},
      {id: 85, no: 10,status: 'IDLE',price: 80},
      {id: 86, no: 11,status: 'IDLE',price: 80},
      {id: 87, no: 12,status: 'IDLE',price: 80},
      {id: 88, no: 13,status: 'IDLE',price: 80},
      {id: 89, no: 14,status: 'IDLE',price: 80},
      {id: 90, no: 15,status: 'IDLE',price: 80}
    ]
  },
  {
    row: 'G',
    seats: [
      {id: 91, no: 1, status: 'BUSY',price: 80},
      {id: 92, no: 2,status: 'BUSY',price: 80},
      {id: 93, no: 3,status: 'IDLE',price: 80},
      {id: 94, no: 4,status: 'IDLE',price: 80},
      {id: 95, no: 5,status: 'IDLE',price: 80},
      {id: 96, no: 6,status: 'BUSY',price: 80},
      {id: 97, no: 7,status: 'BUSY',price: 80},
      {id: 98, no: 8,status: 'BUSY',price: 80},
      {id: 99, no: 9,status: 'BUSY',price: 80},
      {id: 100, no: 10,status: 'IDLE',price: 80},
      {id: 101, no: 11,status: 'IDLE',price: 80},
      {id: 102, no: 12,status: 'IDLE',price: 80},
      {id: 103, no: 13,status: 'BUSY',price: 80},
      {id: 104, no: 14,status: 'BUSY',price: 80},
      {id: 105, no: 15,status: 'BUSY',price: 80}
    ]
  }
]

