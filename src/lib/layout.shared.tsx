import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LogoMark } from '@/components/logo-mark';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <LogoMark size={20} className="text-fd-foreground" />
          <span className="font-display font-medium">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Install',
        url: '/docs/getting-started',
      },
    ],
  };
}
