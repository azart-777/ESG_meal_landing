import { NewSloganDesignV2, MoveUpArrow, CircleWithTalkingHead, Footer, WelcomeComponent, NewHeaderDesignV2 } from '../../components';
import './HomeTwo.scss';

const HomeTwo = () => {
    return (
        <>
            <NewHeaderDesignV2/>
            <NewSloganDesignV2/>
            <WelcomeComponent />
            <CircleWithTalkingHead />
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default HomeTwo;
