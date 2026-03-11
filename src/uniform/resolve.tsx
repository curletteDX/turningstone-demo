import type { ComponentInstance } from "@uniformdev/canvas";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLink from "@/components/FooterLink";
import NavLink from "@/components/NavLink";

export function resolveComponent(component: ComponentInstance) {
  switch (component.type) {
    case "page":
      return Page;
    case "hero":
      return Hero;
    case "header":
      return Header;
    case "footer":
      return Footer;
    case "footerLink":
      return FooterLink;
    case "navLink":
      return NavLink;
    default:
      return DefaultNotImplementedComponent;
  }
}
