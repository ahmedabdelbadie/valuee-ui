export const CostCenters = [
  {
    item: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      nameAr: 'string',
      nameEn: 'string'
    },
    children: [
      {
        item: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          nameAr: 'string',
          nameEn: 'string'
        },
        children: [
          {
            item: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              nameAr: 'string',
              nameEn: 'string'
            }
          }
        ]
      },
      {
        item: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          nameAr: 'string',
          nameEn: 'string'
        },
        children: [
          {
            item: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              nameAr: 'string',
              nameEn: 'string'
            }
          }
        ]
      }
    ]
  },

  {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    nameAr: 'string',
    nameEn: 'string',
    subRows: [
      {
        item: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          nameAr: 'string',
          nameEn: 'string'
        }
      }
    ]
  }
];

export const dataFormated = () => {
  const row = [];
  CostCenters.forEach((element) => {});
};

export const data = [
  {
    firstName: 'Dylan',

    lastName: 'Murray',

    address: '261 Erdman Ford',

    city: 'East Daphne',

    state: 'Kentucky',

    subRows: [
      {
        firstName: 'Ervin',

        lastName: 'Reinger',

        address: '566 Brakus Inlet',

        city: 'South Linda',

        state: 'West Virginia',

        subRows: [
          {
            firstName: 'Jordane',

            lastName: 'Homenick',

            address: '1234 Brakus Inlet',

            city: 'South Linda',

            state: 'West Virginia'
          },

          {
            firstName: 'Jordan',

            lastName: 'Clarkson',

            address: '4882 Palm Rd',

            city: 'San Francisco',

            state: 'California'
          }
        ]
      },

      {
        firstName: 'Brittany',

        lastName: 'McCullough',

        address: '722 Emie Stream',

        city: 'Lincoln',

        state: 'Nebraska'
      }
    ]
  },

  {
    firstName: 'Raquel',

    lastName: 'Kohler',

    address: '769 Dominic Grove',

    city: 'Columbus',

    state: 'Ohio',

    subRows: [
      {
        firstName: 'Branson',

        lastName: 'Frami',

        address: '32188 Larkin Turnpike',

        city: 'Charleston',

        state: 'South Carolina'
      }
    ]
  }
];
