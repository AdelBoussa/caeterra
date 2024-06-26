// pages/listings.tsx
'use client'
import React, { useEffect } from 'react';
import { SimpleGrid, VStack, Box, Heading, Text, HStack } from '@chakra-ui/react';
import Header from '../src/Components/header';
import Footer from '../src/Components/footer';
import { Helmet } from 'react-helmet';

const listings = [
    { id: '45030247', title: 'Rental unit in Ottawa · ★4.98 · 2 bedrooms · 3 beds · 1 bath' },
    { id: '53477364', title: 'Rental unit in Ottawa · ★4.91 · 2 bedrooms · 3 beds · 1 bath' },
    { id: '44359755', title: 'Rental unit in Ottawa · ★5.0 · 3 bedrooms · 4 beds · 2 baths' },
    { id: '47452513', title: 'Rental unit in Ottawa · ★5.0 · 3 bedrooms · 4 beds · 1.5 baths' },
    { id: '43680366', title: 'Rental unit in Ottawa · ★4.97 · 2 bedrooms · 3 beds · 1 bath' },
    { id: '1029943977384685170', title: 'Home in Priv · 1 bedroom · 1 private bath' },
    { id: '1138341986227642210', title: 'Home in Priv · ★New · 3 bedrooms · 2.5 baths' },
    { id: '880486995414593054', title: 'Home in Ottawa · ★4.78 · 1 bedroom · 1 shared bath' },
    { id: '829973323668567216', title: 'Home in Ottawa · ★4.63 · 1 bedroom · 1 private bath' },
    { id: '929139569596813862', title: 'Home in Ottawa · ★4.81 · 1 bedroom · 1 private bath' },
    { id: '794907570441018513', title: 'Home in Ottawa · ★4.48 · 1 bedroom · 1 shared bath' },
    { id: '1060971533228393589', title: 'Home in Priv · 1 bedroom · 1 private bath' },
    { id: '791889260419202748', title: 'Home in Ottawa · ★4.61 · 1 bedroom · 1 bed · 1 shared bath' },
    { id: '794796761058354832', title: 'Home in Ottawa · ★5.0 · 1 bedroom · 1 shared bath' },

];

const ListingsPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.airbnb.ca/embeddable/airbnb_jssdk";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
        
        <Box className="flex min-h-screen flex-col items-center justify-between" w="100%" p="4">
            
            <Helmet>
                <script async src="https://www.airbnb.ca/embeddable/airbnb_jssdk"></script>
            </Helmet>
            
            <Box w='95vw' overflowX='auto' padding={2}>
            <SimpleGrid minChildWidth='350px' spacing='40px'>
                {listings.map((listing) => (
                    
                    <Box key={listing.id} padding={2} flex='0 0 auto'>
                        <div className="airbnb-embed-frame" data-id={listing.id} data-view="home" data-hide-price="true" style={{ width: '450px', height: '300px', margin: '0px' }}>
                            <a href={`https://www.airbnb.ca/rooms/${listing.id}?guests=1&adults=1&s=66&source=embed_widget`}>View On Airbnb</a>
                            <a href={`https://www.airbnb.ca/rooms/${listing.id}?guests=1&adults=1&s=66&source=embed_widget`} rel="nofollow">{listing.title}</a>
                        </div>
                    </Box>
                    
                ))}
            </SimpleGrid>
            </Box>
            <div className="h-10"></div><div className="h-10"></div>
           
            
        </Box>
        
    );
};

export default ListingsPage;
