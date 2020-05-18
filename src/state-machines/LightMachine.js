import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  id: 'trafficLight',
  initial: 'RedOn',
  states: {
    RedOn: { on: { changeLight: 'GreenOn' } },
    GreenOn: { on: { changeLight: 'YellowOn' } },
    YellowOn: { on: { changeLight: 'RedOn' } }
  }
});


const service = interpret(lightMachine);

export { lightMachine, service };