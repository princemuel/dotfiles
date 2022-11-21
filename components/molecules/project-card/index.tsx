import {
  ManageJPGDesktop,
  ManageJPGMobile,
  ManageJPGMobile2x,
  ManageJPGTablet,
} from 'common';
import Image from 'next/future/image';
import Link from 'next/link';

type Props = {
  isPriority: boolean;
};

const ProjectCard = ({ isPriority }: Props) => {
  return (
    <article
      className={`flex flex-col odd:sm:flex-row even:sm:flex-row-reverse gap-16 md:gap-20 lg:gap-32`}
    >
      <figure className='flex-1'>
        <picture>
          <source media='(min-width: 64em)' srcSet={ManageJPGDesktop.src} />
          <source media='(min-width: 40em)' srcSet={ManageJPGTablet.src} />
          <source srcSet={ManageJPGMobile2x.src} />
          <Image
            src={ManageJPGMobile.src}
            width='622'
            height='576'
            alt={'Manage'}
            priority={isPriority}
          />
        </picture>
      </figure>

      <div className='flex-1 flex flex-col items-start justify-center gap-12 py-24 sm:py-10 border-y border-primary-300/10'>
        <h2>Manage</h2>

        <p className='body-100'>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>

        <Link href={`/products/['id']`} as={''} passHref>
          <a className='btn btn-secondary'>View Project</a>
        </Link>
      </div>
    </article>
  );
};

export { ProjectCard };
