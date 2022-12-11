import { Heading, Section } from 'components/atoms';
import Link from 'next/link';

const CTASection = () => {
  return (
    <Section
      className='h-container mt-20 flex flex-col sm:flex-row items-center gap-12 py-20 text-center sm:text-left'
      aria-labelledby='cta-section'
    >
      <Heading id='cta-section' className='sm:flex-auto'>
        Interested in doing a project together?
      </Heading>

      <hr className='sm:flex-initial md:flex-auto sm:w-2/5 lg:w-full sm:h-[1px] sm:bg-primary-300/20' />

      <Link href={`/contact`} passHref>
        <a className='sm:flex-none btn btn-secondary'>Contact Me</a>
      </Link>
    </Section>
  );
};

export { CTASection };
