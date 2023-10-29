// import Container from '@components/ui/container';
// import WidgetLink from './widget-link';
// import WidgetAbout from './widget-about-us';
// import WidgetSubscription from './widget-newsletter';
// import { footer } from '../data';

// interface WidgetsProps {
//   description: string;
//   widgets: {
//     id: number;
//     widgetTitle: string;
//     lists: any;
//   }[];
// }

// const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
//   const { social } = footer;
//   return (
//     <>

//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] ">
//           <WidgetAbout
//             social={social}
//             className="col-span-full sm:col-span-1 md:col-span-3 "
//           />
//           <div className={"grid gap-5 md:grid-cols-6 sm:col-span-1 md:col-span-5"}>
//             {widgets.slice(0, 3)?.map((widget) => (
//               <WidgetLink
//                 key={`footer-widget--key${widget.id}`}
//                 data={widget}
//                 className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2"
//               />
//             ))}
//           </div>
//           <WidgetSubscription className="newsletterFooter sm:col-span-1 md:col-span-4 lg:border-l lg:border-black/18 lg:pl-10" />
//         </div>
//       </Container>
//     </>

//   );
// };

// export default Widgets;

import Container from "@components/ui/container";
import WidgetLink from "./widget-link";
import WidgetAbout from "./widget-about-us";
import { footer } from "../data";
import WidgetDescription from "./widget-description";

interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  const { social } = footer;
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] ">
          <WidgetAbout
            social={social}
            className="col-span-full sm:col-span-1 md:col-span-3 "
          />
          <div
            className={"grid gap-5 md:grid-cols-6 sm:col-span-1 md:col-span-5"}
          >
            {widgets.slice(0, 3)?.map((widget) => (
              <WidgetLink
                key={`footer-widget--key${widget.id}`}
                data={widget}
                className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2"
              />
            ))}
          </div>
          <WidgetDescription className="newsletterFooter sm:col-span-1 md:col-span-4 lg:border-l lg:border-black/18 lg:pl-10" />
        </div>
      </Container>
    </>
  );
};

export default Widgets;
