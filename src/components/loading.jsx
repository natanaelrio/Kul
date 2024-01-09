'use client';
import { Next13ProgressBar } from 'next13-progressbar';

const Loading = ({ children }) => {
  return (
    <>
      <Next13ProgressBar height="4px" Z-Index='99999' color="#4524db" options={{ showSpinner: true }} showOnShallow />
      {children}
    </>
  );
};

export default Loading;