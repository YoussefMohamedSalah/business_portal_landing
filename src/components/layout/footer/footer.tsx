import Widgets from "@components/layout/footer/widget/widget-footer";
import Copyright from "@components/layout/footer/copyright";
import useWindowSize from "@utils/use-window-size";
import { footer } from "./data";

const { widgets, payment, description } = footer;

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

const Footer: React.FC = () => {
  const { width } = useWindowSize();
  const imageFooter = {
    mobile: {
      url: "/assets/images/hero/home1/bg_footer_mobile_h8.jpg"
    },
    desktop: {
      url: "/assets/images/hero/home1/bg_footer_h8.jpg"
    }
  };
  const selectedImage = getImage(width!, imageFooter);

  return (
    <footer
      className="footer-one border-t border-black/18 pt-10 md:pt-16 bg-skin-one text-gray-400 bg-fixed bg-bottom bg-top"
      style={{ backgroundImage: `url('${selectedImage.url}')` }}
    >
      <Widgets widgets={widgets} />
      <Copyright payment={payment} />
    </footer>
  );
};

export default Footer;
