import koopa from '../mysteries/troubleinkoopacastle';

const mocks = () => {
  return {
    getSampleMystery: () => koopa.mystery,
    getSampleEvent: () => koopa.event,
  };
};

export { mocks };
