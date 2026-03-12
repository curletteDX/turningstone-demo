import type { ComponentInstance } from "@uniformdev/canvas";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
import Page from "@/components/Page";
import HeroCarousel from "@/components/Hero";
import HeroSlide from "@/components/HeroSlide";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLink from "@/components/FooterLink";
import FooterColumn from "@/components/FooterColumn";
import NavLink from "@/components/NavLink";
import SubNavLink from "@/components/SubNavLink";
import PromoCardsGrid from "@/components/PromoCardsGrid";
import PromoCard from "@/components/PromoCard";
import CategoryCardsGrid from "@/components/CategoryCardsGrid";
import CategoryCard from "@/components/CategoryCard";
import EventsSection from "@/components/EventsSection";
import EventCard from "@/components/EventCard";
import ContentSection from "@/components/ContentSection";
import PromotionsSlider from "@/components/PromotionsSlider";
import PromotionCard from "@/components/PromotionCard";
import EventDetail from "@/components/EventDetail";
import EventHero from "@/components/EventHero";
import EventDescription from "@/components/EventDescription";
import PackagesCarousel from "@/components/PackagesCarousel";
import PackageCard from "@/components/PackageCard";
import Weddings from "@/components/Weddings";
import VenueHero from "@/components/VenueHero";
import VenueCard from "@/components/VenueCard";
import WeddingContactForm from "@/components/WeddingContactForm";
import GolfHero from "@/components/golf/GolfHero";
import GolfCourseCard from "@/components/golf/GolfCourseCard";
import TextWithButton from "@/components/TextWithButton";
import CTABanner from "@/components/CTABanner";

export function resolveComponent(component: ComponentInstance) {
  switch (component.type) {
    case "page":
      return Page;
    case "heroCarousel":
      return HeroCarousel;
    case "heroSlide":
      return HeroSlide;
    case "header":
      return Header;
    case "footer":
      return Footer;
    case "footerLink":
      return FooterLink;
    case "footerColumn":
      return FooterColumn;
    case "navLink":
      return NavLink;
    case "subNavLink":
      return SubNavLink;
    case "promoCardsGrid":
      return PromoCardsGrid;
    case "promoCard":
      return PromoCard;
    case "categoryCardsGrid":
      return CategoryCardsGrid;
    case "categoryCard":
      return CategoryCard;
    case "eventsSection":
      return EventsSection;
    case "eventCard":
      return EventCard;
    case "contentSection":
      return ContentSection;
    case "promotionsSlider":
      return PromotionsSlider;
    case "promotionCard":
      return PromotionCard;
    case "eventDetail":
      return EventDetail;
    case "eventHero":
      return EventHero;
    case "eventDescription":
      return EventDescription;
    case "packagesCarousel":
      return PackagesCarousel;
    case "packageCard":
      return PackageCard;
    case "weddings":
      return Weddings;
    case "venueHero":
      return VenueHero;
    case "venueCard":
      return VenueCard;
    case "weddingContactForm":
      return WeddingContactForm;
    case "golfHero":
      return GolfHero;
    case "golfCourseCard":
      return GolfCourseCard;
    case "textWithButton":
      return TextWithButton;
    case "ctaBanner":
      return CTABanner;
    default:
      return DefaultNotImplementedComponent;
  }
}
