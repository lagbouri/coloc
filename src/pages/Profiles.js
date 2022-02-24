import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import ProfileCard from '../components/ProfileCard';

const Profiles = () => {
    return ( 
        <Container maxW="container.xl" mt="24">
            <Header/>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mt={8}>
                <ProfileCard key={1}
                    name="Patterson"
                    img={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Salam"
                    studies="ENSA Safi"
                />
                <ProfileCard key={1}
                    name="John"
                    img={"https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Miftah ElKheir"
                    studies="ENSA Safi"
                />
                <ProfileCard key={1}
                    name="Alex"
                    img={"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Salam"
                    studies="ENSA Safi"
                />
                <ProfileCard key={1}
                    name="Jane"
                    img={"https://images.unsplash.com/photo-1620553967565-8e5d2e952b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Anas"
                    studies="ENSA Safi"
                />
                <Skeleton borderRadius={['sm', null, 'md']} key={3} />
            </SimpleGrid>
        </Container>
     );
}
 
export default Profiles;