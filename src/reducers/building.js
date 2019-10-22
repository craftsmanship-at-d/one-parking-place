
var buildings = [

  {
    name: "mine",
    level: 0,
    cost: [{
      unit: "rocks",
      amount: 100,
    },
    {
      unit: "catnip",
      amount: 4300,
    },
    {
      unit: "water",
      amount: 12,
    }
    ]
  },
  {
    name: "factory",
    level: 1,
    cost: [{
      unit: "rocks",
      amount: 200,
    }
    ]
  },
  {
    name: "nuclear reactors III",
    level: 3,
    cost: [{
      unit: "rocks",
      amount: 20,
    }
    ]
  }
];

export default (state = buildings, action) => {
  return state;
};