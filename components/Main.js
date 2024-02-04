import NavigationBar from './NavigationBar';
import PageHeader from './PageHeader';
import PlantList from './PlantList';
import LoginOffCanvas from './Login/LoginOffCanvas';

const Main = () => {
    return (
        <>
            <NavigationBar />
            <LoginOffCanvas />
            <PageHeader />
            <PlantList />
        </>
    )
};

export default Main;