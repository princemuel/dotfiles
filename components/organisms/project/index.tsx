type Props = {};

const Project = (props: Props) => {
  return (
    <main id='main-content' aria-label='Contact Page Content'>
      <section className='h-container' aria-label=''>
        <figure></figure>
      </section>

      <article className='h-container mt-40' aria-label=''>
        <div className='flex flex-col items-start gap-12 py-24 sm:py-10 border-y border-primary-300/10'>
          <h2>Manage</h2>

          <p className='body-100'>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>

          <div>
            <p className='flex gap-2 text-primary-100 text-400 font-sans font-bold leading-500'>
              <span>Interaction Design</span>
              <span>/</span>
              <span>Front End Development</span>
            </p>

            <p className='flex gap-2 text-primary-100 text-400 font-sans font-bold leading-500'>
              <span>HTML</span>
              <span>/</span>
              <span>CSS</span>
              <span>/</span>
              <span>JS</span>
            </p>
          </div>

          <a
            href='https://www.github.com/princemuel'
            className='btn btn-secondary'
          >
            Visit Website
          </a>
        </div>
      </article>

      <section className='h-container' aria-label=''>
        <figure></figure>
      </section>
    </main>
  );
};

export { Project };
