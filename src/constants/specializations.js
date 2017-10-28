export default [
  {
    name: 'Computational Perception and Robotics',
    required: [
      {
        type: 'one-of',
        courses: ['CS 6505', 'CS 6520', 'CS 6550', 'CS 7520', 'CS 7530',
            'CSE 6140']
      },
      {
        type: 'one-of',
        courses: ['CS 6601', 'CS 7641']
      },
      {
        type: 'one-of',
        courses: ['CS 6475', 'CS 6476', 'CS 7499', 'CS 7636', 'CS 7650',
            'CS 8803-xx5']
      },
      {
        type: 'one-of',
        courses: ['CS 7630', 'CS 7631', 'CS 7633', 'CS 7649', 'CS 8803-001']
      },
      {
        type: 'one-of',
        courses: ['CS 6475', 'CS 6476', 'CS 7499', 'CS 7636', 'CS 7650',
            'CS 8803-xx5', 'CS 7630', 'CS 7631', 'CS 7633', 'CS 7649',
            'CS 8803-001']
      }
    ]
  },
  {
    name: 'Computing Systems',
    required: [
      {
        type: 'one-of',
        courses: ['CS 6505','CS 8803 GA']
      },
      {
        type: 'two-of',
        courses: ['CS 6210', 'CS 6241', 'CS 6250', 'CS 6290', 'CS 6300',
            'CS 6301', 'CS 6400']
      },
      {
        type: 'three-of',
        courses: ['CS 6035','CS 6200', 'CS 6220', 'CS 6235', 'CS 6238',
            'CS 6260', 'CS 6262','CS 6291', 'CS 6310', 'CS 6340', 'CS 6365',
            'CS 6422', 'CS 6550', 'CS 6675', 'CS 7210', 'CS 7260', 'CS 7270',
            'CS 7290', 'CS 7292', 'CS 7560', 'CS 8803-FPL', 'CSE 6220']
      }
    ]
  },
  {
    name: 'Interactive Intelligence',
    required: [
      {
        type: 'one-of',
        courses: ['CS 6300', 'CS 6505','CS 8803 GA']
      },
      {
        type: 'two-of',
        courses: ['CS 6601', 'CS 7620', 'CS 7637', 'CS 7641']
      },
      {
        type: 'two-of',
        courses: ['CS 6440', 'CS 6460', 'CS 6465', 'CS 7634', 'CS 8803-xx3',
            'CS 7632', 'CS 7650', 'CS 8803-xx2', 'CS 6795', 'CS 7610',
            'CS 8803-xx1']
      }
    ]
  },
  {
    name: 'Machine Learning',
    required: [
      {
        type: 'one-of',
        courses: ['CS 6505', 'CS 6520', 'CS 6550', 'CS 7510', 'CS 7520',
            'CS 7530', 'CSE 6140', 'CS 8803 GA']
      },
      {
        type: 'one-of',
        courses: ['CS 7641', 'CSE 6740']
      },
      {
        type: 'three-of',
        courses: ['CS 7476', 'CS 7535', 'CS 7540', 'CS 7545', 'CS 7616',
            'CS 7642', 'CS 8803-O03', 'CS 7646', 'CS 7650', 'CS 8803-xx4',
            'CSE 6240', 'CSE 6242', 'CSE 6250', 'CSE 8803', 'ISYE 6416',
            'ISYE 6420', 'ISYE 6664']
      }
    ]
  }
]
