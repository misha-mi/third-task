import "./authorization.sass";

import type { Metadata } from 'next';
import Steps from '@/components/ui/steps/steps';

export const metadata: Metadata = {
  title: 'GScore | Authorization ',
}

export default function AuthorizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="authorization">
      <div className='container'>
        <div className="authorization__wrapper">
          <Steps />
          {children}
        </div>
      </div>
    </div>
  )
}
