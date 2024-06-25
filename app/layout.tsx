import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import { NanumNeo, Tmoney, montserrat, pretendard } from '../public/fonts/fonts';
import ConditionalHeader from '@/components/Layout/HeaderConditional';
import { ThemeProvider } from '@/provider/ThemeProvider';
import Header from '@/components/Layout/Header';

export const metadata: Metadata = {
  title: '준모 포트폴리오',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kr"
      className={`${NanumNeo.variable} ${Tmoney.variable}  ${pretendard.variable} ${montserrat.className} `}
    >
      <StyledComponentsRegistry>
        <body className={NanumNeo.className} style={{ overflowX: 'hidden' }}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            <div className="w-[1300px] m-auto">{children}</div>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
