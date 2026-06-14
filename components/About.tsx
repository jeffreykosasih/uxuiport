type IconProps = {
  className?: string;
};

const GoogleIcon = ({ className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className={className}
    fill='currentColor'
  >
    <path d='M21.35 11.1H12v2.9h5.35c-.25 1.55-1.62 4.55-5.35 4.55A6.34 6.34 0 0 1 5.65 12 6.34 6.34 0 0 1 12 5.45c1.84 0 3.08.78 3.79 1.46l2.58-2.49C16.72 2.88 14.58 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.78 0-.66-.07-1.16-.25-1.12Z' />
  </svg>
);

const MicrosoftIcon = ({ className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className={className}
    fill='currentColor'
  >
    <path d='M3 3h8.2v8.2H3V3Zm9.8 0H21v8.2h-8.2V3ZM3 12.8h8.2V21H3v-8.2Zm9.8 0H21V21h-8.2v-8.2Z' />
  </svg>
);

const certificates = [
  {
    label: 'Google Certificate',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7JLH4S8ORLWP',
    icon: GoogleIcon,
  },
  {
    label: 'Microsoft Certificate',
    href: 'https://www.coursera.org/account/accomplishments/specialization/B300T348WFDU',
    icon: MicrosoftIcon,
  },
];

export const About = () => {
  return (
    <section id='about' className='py-24 px-6'>
      <div className='max-w-7xl mx-auto grid gap-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center'>
        <div className='space-y-8'>
          <div className='font-hand space-y-5 text-3xl italic leading-tight text-accent-bright md:text-4xl'>
            <p>
              Born in Indonesia and barely survived in Australia, I am a designer
              that has a unique edge: I speak the language of developers and
              product managers.
            </p>
            <p>
              <span className='font-medium text-text-primary'>Fun Fact:</span> I
              also make music live on spot using loop station!
            </p>
          </div>
        </div>

        <div className='space-y-8 text-right'>
          <h2 className='text-[22vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[10rem] lg:text-[13rem] xl:text-[16rem]'>
            About
          </h2>
          <div className='flex items-center justify-end gap-6'>
            {certificates.map((certificate) => {
              const Icon = certificate.icon;

              return (
                <a
                  key={certificate.label}
                  href={certificate.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={certificate.label}
                  title={certificate.label}
                  className='inline-flex text-text-primary transition-all hover:-translate-y-1 hover:text-hover'
                >
                  <Icon className='h-12 w-12 md:h-14 md:w-14' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
