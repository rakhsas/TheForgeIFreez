import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina.src,
  iconUrl: icon.src,
  shadowUrl: shadow.src,
});
