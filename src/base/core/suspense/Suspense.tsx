import { PropsWithChildren, Suspense } from "react";

type Props = {
  loadingProps?: {
    delay?: number;
  };
};

const CoreSuspense = ({ children }: PropsWithChildren<Props>) => {
  return <Suspense fallback={<p>Loading</p>}>{children}</Suspense>;
};

export default CoreSuspense;
