
import FullWidthLayout from '../../layout/simple/FullWidthLayout';
import TopTitle from '../components/TopTitle';
import Events from './components/Events';

export default function EventsPage() {
    return (
        <>
        <FullWidthLayout bgcolor='primary.main' display={<TopTitle text={'Experience It with us'} />}/>
        <FullWidthLayout display={<Events />}/>
        </>
    )
}