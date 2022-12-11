import { LevelProvider, useLevel } from 'context';
import * as React from 'react';

type SectionProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};

type Props<E extends React.ElementType> = SectionProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof SectionProps<E>>;

const Section = <E extends React.ElementType = 'section'>({
  children,
  as,
  ...rest
}: Props<E>) => {
  const RenderedElement = as || 'section';
  const level = useLevel();

  return (
    <RenderedElement {...rest}>
      <LevelProvider value={level}>{children}</LevelProvider>
    </RenderedElement>
  );
};

export { Section };
