import Container from '@components/ui/container';
import WidgetLink from './widget-link';
import WidgetAbout from './widget-about-us';
import WidgetSubscription from './widget-newsletter';
import {footer} from '../data';

interface WidgetsProps {
    widgets: {
        id: number;
        widgetTitle: string;
        lists: any;
    }[];
}

const Widgets: React.FC<WidgetsProps> = ({widgets}) => {
    const {social} = footer;
    return (
        <>
            <WidgetSubscription className="newsletterFooter items-center px-6 border-b border-white/10 pb-14 lg:pb-20"/>
            <Container >
                <div
                    className="grid grid-cols-2 grid-flow-dense md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[60px] pt-10 md:pt-16">

                    {widgets?.map((widget) => (
                        <WidgetLink
                            key={`footer-widget--key${widget.id}`}
                            data={widget}
                            className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2"
                        />
                    ))}
                    <WidgetAbout
                        social={social}
                        className="col-span-full sm:col-span-1 md:col-span-3 "
                    />
                </div>
            </Container>
        </>
    );
};

export default Widgets;
