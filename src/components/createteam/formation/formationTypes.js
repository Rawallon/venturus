export const formationTypes = {
  '4-4-2': '4-4-2',
  '4-1-4-1': '4-1-4-1',
  '4-2-3-1': '4-2-3-1',
  '4-3-3': '4-3-3',
  '3-4-3': '3-4-3',
};
// 3-2-2-3
// 3-2-3-1
// 3-4-3 - x
// 3-5-2
// 4-2-3-1 - x
// 4-3-1-1
// 4-3-2
// 4-4-2 - x
// 4-5-1
// 5-4-1
export function getFormation(type) {
  switch (type) {
    case '4-4-2':
      return [
        [{ label: 'GK', left: '42%', top: '3%', number: 1 }],
        [
          { label: 'LB', left: '8%', top: '20%', number: 3 },
          { label: 'LCB', left: '30%', top: '20%', number: 6 },
          { label: 'RCB', left: '55%', top: '20%', number: 5 },
          { label: 'RB', left: '78%', top: '20%', number: 2 },
        ],
        [
          { label: 'LM', left: '8%', top: '45%', number: 11 },
          { label: 'LCM', left: '30%', top: '45%', number: 8 },
          { label: 'RCM', left: '55%', top: '45%', number: 4 },
          { label: 'RM', left: '78%', top: '45%', number: 7 },
        ],
        [
          { label: 'LS', left: '30%', top: '70%', number: 10 },
          { label: 'RS', left: '55%', top: '70%', number: 9 },
        ],
      ];

    case '4-1-4-1':
      return [
        [{ label: 'GK', left: '42%', top: '3%', number: 1 }],
        [
          { label: 'LB', left: '8%', top: '20%', number: 3 },
          { label: 'LCB', left: '30%', top: '20%', number: 6 },
          { label: 'RCB', left: '55%', top: '20%', number: 5 },
          { label: 'RB', left: '78%', top: '20%', number: 2 },
        ],
        [{ label: 'CDM', left: '42%', top: '35%', number: 4 }],
        [
          { label: 'LM', left: '8%', top: '50%', number: 11 },
          { label: 'LCM', left: '30%', top: '50%', number: 10 },
          { label: 'RCM', left: '55%', top: '50%', number: 8 },
          { label: 'RM', left: '78%', top: '50%', number: 7 },
        ],
        [{ label: 'ST', left: '42%', top: '70%', number: 9 }],
      ];

    case '4-2-3-1':
      return [
        [{ label: 'GK', left: '42%', top: '3%', number: 1 }],
        [
          { label: 'LB', left: '8%', top: '20%', number: 3 },
          { label: 'LCB', left: '30%', top: '20%', number: 6 },
          { label: 'RCB', left: '55%', top: '20%', number: 5 },
          { label: 'RB', left: '78%', top: '20%', number: 2 },
        ],
        [
          { label: 'LDM', left: '30%', top: '40%', number: 8 },
          { label: 'RDM', left: '55%', top: '40%', number: 4 },
        ],
        [
          { label: 'LAM', left: '14%', top: '55%', number: 11 },
          { label: 'CAM', left: '42%', top: '55%', number: 10 },
          { label: 'RAM', left: '72%', top: '55%', number: 7 },
        ],
        [{ label: 'S', left: '42%', top: '70%', number: 9 }],
      ];

    case '4-3-3':
      return [
        [{ label: 'GK', left: '42%', top: '3%', number: 1 }],
        [
          { label: 'LB', left: '8%', top: '20%', number: 3 },
          { label: 'LCB', left: '30%', top: '20%', number: 6 },
          { label: 'RCB', left: '55%', top: '20%', number: 5 },
          { label: 'RB', left: '78%', top: '20%', number: 2 },
        ],
        [
          { label: 'LM', left: '18%', top: '45%', number: 10 },
          { label: 'CM', left: '42%', top: '45%', number: 4 },
          { label: 'RM', left: '68%', top: '45%', number: 8 },
        ],
        [
          { label: 'LW', left: '12%', top: '67%', number: 11 },
          { label: 'CF', left: '42%', top: '72%', number: 9 },
          { label: 'RW', left: '74%', top: '67%', number: 7 },
        ],
      ];

    case '3-4-3':
      return [
        [{ label: 'GK', left: '42%', top: '3%', number: 1 }],
        [
          { label: 'LCB', left: '18%', top: '18%', number: 6 },
          { label: 'CB', left: '42%', top: '18%', number: 4 },
          { label: 'RCB', left: '68%', top: '18%', number: 5 },
        ],
        [
          { label: 'LM', left: '8%', top: '45%', number: 3 },
          { label: 'LCM', left: '30%', top: '45%', number: 10 },
          { label: 'RCM', left: '55%', top: '45%', number: 8 },
          { label: 'RM', left: '78%', top: '45%', number: 2 },
        ],
        [
          { label: 'LW', left: '18%', top: '67%', number: 11 },
          { label: 'CF', left: '42%', top: '72%', number: 9 },
          { label: 'RW', left: '68%', top: '67%', number: 7 },
        ],
      ];

    default:
      return [];
  }
}
