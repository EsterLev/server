const fizz_buzz = require('./sum');
const users = require('./services/users.service');
const daily = require('./services/daily.service');
const login = require('./services/login.service');
describe("FizzBuzz", () => {
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz');
  });
  test('[5] should result in "buzz"', () => {
    expect(fizz_buzz([5])).toBe('buzz');
  });
  test('[15] should result in "fizzbuzz"', () => {
    expect(fizz_buzz([15])).toBe('fizzbuzz');
  });
  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz');
  });
});
describe("getUsers", () => {
  test('get users', () => {
    expect(users.getUsers()).toBe([
      {
        "id": 1,
        "firstName": "Shira",
        "lastName": "Sharabani",
        "address": {
          "city": "Modiin-Ilit",
          "street": "Sd. Yechezkel",
          "number": "18"
        },
        "phone": "0556796376",
        "email": "shirasharabani@gmail.com",
        "height": "1.70",
        "meeting": [
          {
            "date": "06-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "managerDaily": [
          {
            "meals": [
              "בננה"
            ],
            "date": "06-07-2022",
            "id": 1
          },
          {
            "meals": [
              "תפוח"
            ],
            "date": "06-07-2022",
            "id": 2,
            "days": [
              {
                "meals": [
                  "לבן",
                  "לחם"
                ],
                "date": "28-06-2022",
                "id": 1
              }
            ]
          },
          {
            "days": [
              {
                "meals": [
                  "לבן",
                  "לחם"
                ],
                "date": "06-07-2022",
                "id": 2
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "firstName": "Esti",
        "lastName": "Lev",
        "address": {
          "city": "Modiin-Ilit",
          "street": "Netivot Hamishpat",
          "number": "18"
        },
        "phone": "0583281357",
        "email": "st3281357@gmail.com",
        "height": "1.62",
        "meeting": [
          {
            "date": "06-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "managerDaily": [
          {
            "meals": [
              "בננה"
            ],
            "date": "06-07-2022",
            "id": 1
          },
          {
            "meals": [
              "תפוח"
            ],
            "date": "06-07-2022",
            "id": 2
          }
        ]
      },
      {
        "firstName": "Tamar",
        "lastName": "Lev",
        "address": {
          "city": "enter city",
          "street": "Netivot Hamishpat",
          "number": "enter number"
        },
        "phone": "0589742357",
        "email": "enter mail address",
        "height": "1.55",
        "meeting": [
          {
            "date": "06-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "id": 3
      },
      {
        "firstName": "enter first name",
        "lastName": "enter last name",
        "address": {
          "city": "enter city",
          "number": "enter number"
        },
        "phone": "enter phone number",
        "mail": "enter mail address",
        "height": 1.75,
        "meeting": [
          {
            "date": "11-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "weight": [
          70
        ],
        "id": 4
      },
      {
        "firstName": "Efrat",
        "lastName": "Lev",
        "address": {
          "city": "Modiin-Ilit",
          "street": "Netivot-Hamishpat",
          "number": "18"
        },
        "phone": "0583220357",
        "email": "efrat357@gmail.com",
        "height": "1.68",
        "meeting": [
          {
            "date": "06-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "managerDaily": [
          {
            "days": [
              {
                "meals": [
                  "לבן",
                  "לחם"
                ],
                "date": "06-07-2022",
                "id": 1
              }
            ]
          }
        ],
        "id": 5
      },
      {
        "firstName": "Chana",
        "lastName": "Levi",
        "address": {
          "city": "Modiin-Ilit",
          "street": "Netivot-Hamishpat",
          "number": "18"
        },
        "phone": "0526844545",
        "email": "ch545@gmail.com",
        "height": "1.68",
        "meeting": [
          {
            "date": "06-07-2022",
            "weight": "60",
            "id": 1
          }
        ],
        "managerDaily": [
          {
            "days": [
              {
                "meals": [
                  "לבן",
                  "לחם"
                ],
                "date": "06-07-2022",
                "id": 1
              }
            ]
          }
        ],
        "id": 6
      }
    ]);
  });
  test('getUserById[6]', () => {
    expect(users.getUserById(6)).toBe(  {
      "firstName": "Chana",
      "lastName": "Levi",
      "address": {
        "city": "Modiin-Ilit",
        "street": "Netivot-Hamishpat",
        "number": "18"
      },
      "phone": "0526844545",
      "email": "ch545@gmail.com",
      "height": "1.68",
      "meeting": [
        {
          "date": "06-07-2022",
          "weight": "60",
          "id": 1
        }
      ],
      "managerDaily": [
        {
          "days": [
            {
              "meals": [
                "לבן",
                "לחם"
              ],
              "date": "06-07-2022",
              "id": 1
            }
          ]
        }
      ],
      "id": 6
    });
  });
  test('getDaily[1]', () => {
    expect(daily.getDaily(1)).toBe([
      {
        "meals": [
          "בננה"
        ],
        "date": "06-07-2022",
        "id": 1
      },
      {
        "meals": [
          "תפוח"
        ],
        "date": "06-07-2022",
        "id": 2,
        "days": [
          {
            "meals": [
              "לבן",
              "לחם"
            ],
            "date": "28-06-2022",
            "id": 1
          }
        ]
      },
      {
        "days": [
          {
            "meals": [
              "לבן",
              "לחם"
            ],
            "date": "06-07-2022",
            "id": 2
          }
        ]
      }
    ]);
  });
  test('login("st3281357@gmail.com","0583281357")', () => {
    expect(login.login("st3281357@gmail.com","0583281357")).toBe({
      "id": 2,
      "firstName": "Esti",
      "lastName": "Lev",
      "address": {
          "city": "Modiin-Ilit",
          "street": "Netivot Hamishpat",
          "number": "18"
      },
      "phone": "0583281357",
      "email": "st3281357@gmail.com",
      "height": "1.62",
      "meeting": [
          {
              "date": "06-07-2022",
              "weight": "60",
              "id": 1
          }
      ],
      "managerDaily": [
          {
              "meals": [
                  "בננה"
              ],
              "date": "06-07-2022",
              "id": 1
          },
          {
              "meals": [
                  "תפוח"
              ],
              "date": "06-07-2022",
              "id": 2
          }
      ]
  });
  });
});