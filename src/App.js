import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from '@routes';

import GlobalStyle from '@styled/global';
import Header from '@components/common/Header';

function App() {
    // Create a client
    const queryClient = new QueryClient();

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Suspense fallback={<div>Loading</div>}>
                    <BrowserRouter>
                        <Header />
                        <Router />
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
