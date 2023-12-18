
export type FlowChoice = {
  text: string;
  next: string;
};

export type FlowOption = {
  key: string
  title: string;
  options: Array<FlowChoice>;
};

export type Flowchart = {
  title: string;
  flow: Array<FlowOption>;
};

export const flowchartData: Array<Flowchart> = [
  {
    title: 'Understanding flow charts',
    flow: [
      {
        key: "start",
        title: "Do you understand flow charts?",
        options: [
          {
            text: "Yes",
            next: "1"
          },
          {
            text: "No",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "Good",
        options: [
          {
            text: "Yes",
            next: "3"
          }
        ]
      },
      {
        key: "3",
        title: "Let's go drink.",
        options: [
          {
            text: "6 Drinks",
            next: "4"
          }
        ]
      },
      {
        key: "4",
        title: "Hey, I should try installing FreeBSD!",
        options: []
      },
      {
        key: "2",
        title: "Okay. You see the option labeled 'Yes'?",
        options: [
          {
            text: "Yes",
            next: "5"
          },
          {
            text: "No",
            next: "6"
          }
        ]
      },
      {
        key: "6",
        title: "But you see the ones labeled 'No'?",
        options: [
          {
            text: "Yes",
            next: "8"
          },
          {
            text: "No",
            next: "9"
          }
        ]
      },
      {
        key: "8",
        title: "Wait, What?",
        options: []
      },
      {
        key: "9",
        title: "Listen.",
        options: [
          {
            text: "->",
            next: "10"
          }
        ]
      },
      {
        key: "10",
        title: "I hate you.",
        options: []
      },
      {
        key: "5",
        title: "... And you can see the ones labeled 'No'?",
        options: [
          {
            text: "Yes",
            next: "1"
          },
          {
            text: "No",
            next: "7"
          }
        ]
      },
      {
        key: "7",
        title: "But you just followed them twice!",
        options: [
          {
            text: "Yes",
            next: "11"
          },
          {
            text: "No",
            next: "11"
          }
        ]
      },
      {
        key: "11",
        title: "(That wasn't a question.)",
        options: [
          {
            text: "->",
            next: "12"
          }
        ]
      },
      {
        key: "12",
        title: "Screw it.",
        options: [
          {
            text: "->",
            next: "3"
          }
        ]
      }
    ]
  },
  {
    title: 'Is it a trap?',
    flow: [
      {
        key: "start",
        title: "Hey, wait, this flowchart is a trap!",
        options: [
          {
            text: "Yes",
            next: "start"
          }
        ]
      }
    ]
  },
  {
    title: 'Tech support cheat sheet',
    flow: [
      {
        key: "start",
        title: "Find a menu item or button which looks related to what you want to do.",
        options: [
          {
            text: "I can't find one",
            next: "1"
          },
          {
            text: "Ok",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "Pick one at random",
        options: [
          {
            text: "I've tried them all.",
            next: "3"
          },
          {
            text: "Ok",
            next: "2"
          }
        ]
      },
      {
        key: "3",
        title: "Google the name of the program plus a few words related to what you want to do. Follow and instructions.",
        options: [
          {
            text: "->",
            next: "4"
          },
        ]
      },
      {
        key: "2",
        title: "Click it.",
        options: [
          {
            text: "->",
            next: "4"
          },
        ]
      },
      {
        key: "4",
        title: "Did it work?",
        options: [
          {
            text: "Yes",
            next: "5"
          },
          {
            text: "No",
            next: "6"
          }
        ]
      },
      {
        key: "5",
        title: "You're done!",
        options: []
      },
      {
        key: "6",
        title: "Have you been trying this for over half an hour?",
        options: [
          {
            text: "Yes",
            next: "7"
          },
          {
            text: "No",
            next: "start"
          }
        ]
      },
      {
        key: "7",
        title: "Ask someone for help or give up.",
        options: []
      }
    ]
  },
  {
    title: 'Learning how to cook',
    flow: [
      {
        key: "start",
        title: "I should cook more!",
        options: [
          {
            text: "->",
            next: "1"
          }
        ]
      },
      {
        key: "1",
        title: "Buy ingredients",
        options: [
          {
            text: "->",
            next: "2"
          }
        ]
      },
      {
        key: "2",
        title: "Put some in a pan",
        options: [
          {
            text: "->",
            next: "3"
          }
        ]
      },
      {
        key: "3",
        title: "Cook",
        options: [
          {
            text: "->",
            next: "4"
          }
        ]
      },
      {
        key: "4",
        title: "Does it taste good?",
        options: [
          {
            text: "Kinda",
            next: "5"
          },
          {
            text: "No",
            next: "5"
          }
        ]
      },
      {
        key: "5",
        title: "Put leftovers in fridge",
        options: [
          {
            text: "Hours pass",
            next: "6"
          }
        ]
      },
      {
        key: "6",
        title: "Order Pizza",
        options: [
          {
            text: "Days pass",
            next: "7"
          }
        ]
      },
      {
        key: "7",
        title: "Throw away leftovers",
        options: [
          {
            text: "Weeks pass",
            next: "8"
          }
        ]
      },
      {
        key: "8",
        title: "Throw away remaining ingredients as they go bad",
        options: [
          {
            text: "Months pass",
            next: "start"
          }
        ]
      }
    ]
  },
  {
    title: 'How to write good code',
    flow: [
      {
        key: "start",
        title: "Do things right or do them fast?",
        options: [
          {
            text: "Fast",
            next: "1"
          },
          {
            text: "Right",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "Code Fast",
        options: [
          {
            text: "->",
            next: "3"
          }
        ]
      },
      {
        key: "3",
        title: "Does it work yet?",
        options: [
          {
            text: "No",
            next: "1"
          },
          {
            text: "Almost, but it's become a mass of kludges and spaghetti code.",
            next: "5"
          }
        ]
      },
      {
        key: "2",
        title: "Code Well",
        options: [
          {
            text: "->",
            next: "4"
          }
        ]
      },
      {
        key: "4",
        title: "Are you done yet?",
        options: [
          {
            text: "No",
            next: "2"
          },
          {
            text: "No, and the requirements have changed.",
            next: "5"
          }
        ]
      },
      {
        key: "5",
        title: "Throw it all out and start over.",
        options: [
          {
            text: "->",
            next: "start"
          }
        ]
      }
    ]
  },
  {
    title: 'Should your project use a blockchain?',
    flow: [
      {
        key: "start",
        title: "Are you making the decision using a flowchart you found?",
        options: [
          {
            text: "Yes",
            next: "1"
          },
          {
            text: "No",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "No",
        options: []
      },
      {
        key: "2",
        title: "You definitely are",
        options: [
          {
            text: "->",
            next: "1"
          }
        ]
      }
    ]
  },
  {
    title: 'Should I stand near this thing?',
    flow: [
      {
        key: "start",
        title: "Are physicists excited about it?",
        options: [
          {
            text: "Yes",
            next: "1"
          },
          {
            text: "No",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "No",
        options: []
      },
      {
        key: "2",
        title: "Maybe",
        options: []
      }
    ]
  },
  {
    title: 'Are you prematurely optimising or just taking time to do the right thing?',
    flow: [
      {
        key: "start",
        title: "Are you consulting a flowchart to answer this question?",
        options: [
          {
            text: "Yes",
            next: "1"
          }
        ]
      },
      {
        key: "1",
        title: "You are prematurely optimising",
        options: []
      }
    ]
  },
  {
    title: 'Should I put solar panels on it?',
    flow: [
      {
        key: "start",
        title: "Does it move around?",
        options: [
          {
            text: "Yes",
            next: "1"
          },
          {
            text: "No",
            next: "2"
          }
        ]
      },
      {
        key: "1",
        title: "Does it have regular chances to recharge or swap batteries?",
        options: [
          {
            text: "Yes",
            next: "3"
          },
          {
            text: "No",
            next: "4"
          }
        ]
      },
      {
        key: "3",
        title: "Probably Not",
        options: []
      },
      {
        key: "4",
        title: "When running, is it hot to the touch?",
        options: [
          {
            text: "Yes",
            next: "5"
          },
          {
            text: "No",
            next: "6"
          }
        ]
      },
      {
        key: "5",
        title: "Haha good luck",
        options: []
      },
      {
        key: "6",
        title: "Maybe",
        options: []
      },
      {
        key: "2",
        title: "Is there empty space nearby where it would be easier to put them?",
        options: [
          {
            text: "Yes",
            next: "3"
          },
          {
            text: "No",
            next: "7"
          }
        ]
      },
      {
        key: "7",
        title: "Sure",
        options: []
      }
    ]
  },
  {
    title: 'How to do Differentiation',
    flow: [
      {
        key: "start",
        title: "Try applying: chain rule, power rule, quotient rule, product rule, etc...",
        options: [
          {
            text: "->",
            next: "1"
          }
        ]
      },
      {
        key: "1",
        title: "Done?",
        options: [
          {
            text: "Yes",
            next: "2"
          },
          {
            text: "No",
            next: "start"
          }
        ]
      },
      {
        key: "2",
        title: "Done!",
        options: []
      }
    ]
  },
  // {
  //   title: 'Integration',
  //   flow: [
  //     {
  //       key: "start",
  //       title: "Try applying: integration by parts or substitution",
  //       options: [
  //         {
  //           text: "->",
  //           next: "1"
  //         }
  //       ]
  //     },
  //     {
  //       key: "1",
  //       title: "Done?",
  //       options: [
  //         {
  //           text: "Haha, nope!",
  //           next: "2"
  //         }
  //       ]
  //     },
  //     {
  //       key: "2",
  //       title: "????",
  //       options: [
  //         {
  //           text: "->",
  //           next: "start"
  //         },
  //         {
  //           text: "->",
  //           next: "3"
  //         },
  //         {
  //           text: "->",
  //           next: "4"
  //         }
  //       ]
  //     },
  //     {
  //       key: "3",
  //       title: "Partial Fractions",
  //       options: [
  //         {
  //           text: "->",
  //           next: "2"
  //         },
  //         {
  //           text: "->",
  //           next: ""
  //         },
  //         {
  //           text: "->",
  //           next: ""
  //         }
  //       ]
  //     },
  //     {
  //       key: "4",
  //       title: "???!?",
  //       options: [
  //         {
  //           text: "->",
  //           next: "1"
  //         },
  //         {
  //           text: "->",
  //           next: ""
  //         }
  //       ]
  //     }
  //   ]
  // }
];
