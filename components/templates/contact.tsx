import { links } from 'common';
import { SocialLinks } from 'components/molecules';

type Props = {};

const ContactPageTemplate = (props: Props) => {
  return (
    <main id='main-content' aria-label='Contact Page Content'>
      <section className='h-container mt-20 py-20 space-y-20 > * + * border-y border-primary-300/20'>
        <h2>Get in Touch</h2>
        <p className='body-100'>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>

        <SocialLinks links={links} />
      </section>

      <section className='h-container mt-20'>
        <h2>Contact Me</h2>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </div>

          <div>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='name' />
          </div>

          <div>
            <label htmlFor='message'>Message</label>
            <textarea name='' id='message'></textarea>
          </div>

          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export { ContactPageTemplate };
