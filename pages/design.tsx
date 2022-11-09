import { icons } from 'common';

type Props = {};

const DesignPage = (props: Props) => {
  return (
    <div>
      <h1>Hello</h1>

      <button type='button' className='btn btn-primary'>
        <span>
          <icons.arrow.down />
        </span>
        <span>About Me</span>
      </button>

      <button type='button' className='btn btn-primary' disabled={true}>
        <span>
          <icons.arrow.down />
        </span>
        <span>About Me</span>
      </button>

      <button type='button' className='btn btn-secondary'>
        Contact Me
      </button>
      <button type='button' className='btn btn-secondary' disabled={true}>
        Contact Me
      </button>
    </div>
  );
};

export default DesignPage;
