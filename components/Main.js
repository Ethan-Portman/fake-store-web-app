import NavigationBar from './NavigationBar';
import PageHeader from './PageHeader';
import CartOffCanvas from './CartOffCanvas';
import PlantList from './PlantList';

const Main = () => {
    return (
        <>
            <NavigationBar />
            <CartOffCanvas />
            <PageHeader />
            <PlantList />
        </>
    )
};

export default Main;