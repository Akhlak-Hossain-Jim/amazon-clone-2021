import React from "react";

import "../style/color.scss";
import "../style/layout/boxModel.scss";
import "../style/layout/footer.scss";

import logo from "../img/main_logo.png";

import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  function scrollToTopFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const YEAR = new Date().getFullYear();

  return (
    <footer>
      <section className="section_1" onClick={scrollToTopFunction}>
        Back to top
      </section>
      <section className="section_2">
        <div className="container  grid_parent row">
          <div className="quick_links col_1_4 flex">
            <h4>Get to Know Us</h4>
            <a href="https://www.amazon.jobs/">Career</a>
            <a href="https://blog.aboutamazon.com/?utm_source=gateway&utm_medium=footer">
              Blog
            </a>
            <a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">
              About Amazon
            </a>
            <a href="https://www.amazon.com/ir">Investor Relations</a>
            <a href="https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices">
              Amazone Devices
            </a>
            <a href="https://www.aboutamazon.com/amazon-fulfillment-center-tours?utm_source=gateway&utm_medium=footer&utm_campaign=fctours">
              Amazon Tours
            </a>
          </div>
          <div className="quick_links col_2_4 flex">
            <h4>Make Money with Us</h4>
            <a href="https://services.amazon.com/sell.html?ld=AZFSSOA&ref_=footer_soa">
              Sell products on Amazon
            </a>
            <a href="https://services.amazon.com/amazon-business.html?ld=usb2bunifooter&ref_=footer_b2b">
              Sell on Amazon Business
            </a>
            <a href="https://developer.amazon.com/">Sell apps on Amazon</a>
            <a href="https://affiliate-program.amazon.com/">
              Become an Affiliate
            </a>
            <a href="https://advertising.amazon.com/?ref=ext_amzn_ftr">
              Advertise Your Products
            </a>
            <a href="https://www.amazon.com/gp/seller-account/mm-summary-page.html?ld=AZFooterSelfPublish&topic=200260520&ref_=footer_publishing">
              Self-Publish with Us
            </a>
            <a href="http://go.thehub-amazon.com/amazon-hub-locker">
              Host an Amazon Hub
            </a>
            <a href="https://www.amazon.com/b/?node=18190131011&ld=AZUSSOA-seemore&ref_=footer_seemore">
              › {"  "}See More Make Money
              <br />
              with Us
            </a>
          </div>
          <div className="quick_links col_3_4 flex">
            <h4>Amazon Payment Products</h4>
            <a href="https://www.amazon.com/dp/B07984JN3L?plattr=ACOMFO&ie=UTF-8">
              Amazon Business Card
            </a>
            <a href="https://www.amazon.com/gp/browse.html?node=16218619011&ref_=footer_swp">
              Shop with Points
            </a>
            <a href="https://www.amazon.com/gp/browse.html?node=10232440011&ref_=footer_reload_us">
              Reload Your Balance
            </a>
            <a href="https://www.amazon.com/gp/browse.html?node=388305011&ref_=footer_tfx">
              Amazon Currency Converter
            </a>
          </div>
          <div className="quick_links col_4_4 flex">
            <h4>Let Us Help You</h4>
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
              Amazon and COVID-
              <br />
              19
            </a>
            <a href="https://www.amazon.com/gp/css/homepage.html?ref_=footer_ya">
              Your Account
            </a>
            <a href="https://www.amazon.com/gp/css/order-history?ref_=footer_yo">
              Your Orders
            </a>
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates">
              Shipping Rates &<br />
              Policies
            </a>
            <a href="https://www.amazon.com/gp/css/returns/homepage.html?ref_=footer_hy_f_4">
              Returns &<br />
              Replacements
            </a>
            <a href="https://www.amazon.com/gp/digital/fiona/manage?ref_=footer_myk">
              Manage Your
              <br />
              Content and Devices
            </a>
            <a href="https://www.amazon.com/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029">
              Amazon Assistant
            </a>
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he">
              Help
            </a>
          </div>
        </div>
      </section>
      <section className="section_2 part2 flex">
        <img src={logo} alt="" />
        <div className="selectionBox flex cenrerV">
          <LanguageIcon />
          &nbsp; English
          <span className="grid_parent">
            <ExpandLessIcon className="icon_small" />
            <ExpandMoreIcon className="icon_small" />
          </span>
        </div>
        <div className="selectionBox flex cenrerV exp">$ USD-U.S. Dollar</div>
        <div className="selectionBox flex cenrerV exp">🇺🇸 United States</div>
      </section>
      <section className="section_3">
        <div className="container grid_parent six">
          <a
            href="https://music.amazon.com/?ref=dm_aff_amz_com"
            className="servBox col16"
          >
            <br />
            Amazon Music
            <br />
            <span>Stream millions of songs</span>
          </a>
          <a
            href="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com"
            className="servBox col26"
          >
            <br />
            Amazon Advertising
            <br />
            <span>Find, attract, and engage customers</span>
          </a>
          <a
            href="https://www.amazon.com/gp/browse.html?node=15547130011&ref_=_us_footer_drive"
            className="servBox col36"
          >
            <br />
            Amazon Drive
            <br />
            <span>Cloud storage from Amazon</span>
          </a>
          <a href="https://www.6pm.com/" className="servBox col46">
            <br />
            6pm
            <br />
            <span>Score deals on fashion brands</span>
          </a>
          <a href="https://www.abebooks.com/" className="servBox col56">
            <br />
            AbeBook
            <br />
            <span>Books, art & collectibles</span>
          </a>
          <a href="https://www.acx.com/" className="servBox col66">
            <br />
            ACX
            <br />
            <span>Audiobook Publishing Made Easy</span>
          </a>
          <a href="kj" className="servBox col16">
            <br />
            Alexa
            <br />
            <span>Actionable Analytics for the Web</span>
          </a>
          <a href="https://www.alexa.com/" className="servBox col26">
            <br />
            Sell on Amazon
            <br />
            <span>Start a Selling Account</span>
          </a>
          <a
            href="https://sell.amazon.com/?ld=AZUSSOA-footer-aff&ref_=footer_sell"
            className="servBox col36"
          >
            <br />
            Amazon Business
            <br />
            <span>Everything For Your Business</span>
          </a>
          <a
            href="https://www.amazon.com/business?ref_=footer_retail_b2b"
            className="servBox col46"
          >
            <br />
            AmazonGlobal
            <br />
            <span>Ship Orders Internationally</span>
          </a>
          <a
            href="https://www.amazon.com/gp/browse.html?node=230659011&ref_=footer_amazonglobal"
            className="servBox col56"
          >
            <br />
            Home Services
            <br />
            <span>Experienced Pros Happiness Guarantee</span>
          </a>
          <a
            href="https://ignite.amazon.com/?ref=amazon_footer_ignite"
            className="servBox col66"
          >
            <br />
            Amazon Ignite
            <br />
            <span>Sell your original Digital Educational Resources</span>
          </a>
          <a
            href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=amazonfooter"
            className="servBox col16"
          >
            <br />
            Amazon Web Services
            <br />
            <span>Scalable Cloud Computing Services</span>
          </a>
          <a href="https://www.audible.com/" className="servBox col26">
            <br />
            Audible
            <br />
            <span>Listen to Books & Original Audio Performances</span>
          </a>
          <a href="https://www.bookdepository.com/" className="servBox col36">
            <br />
            Book Depository
            <br />
            <span>Books With Free Delivery Worldwide</span>
          </a>
          <a
            href="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr"
            className="servBox col46"
          >
            <br />
            Box Office Mojo
            <br />
            <span>Find Movie Box Office Data</span>
          </a>
          <a href="https://www.comixology.com/" className="servBox col56">
            <br />
            ComiXology
            <br />
            <span>Thousands of Digital Comics</span>
          </a>
          <a href="https://www.dpreview.com/" className="servBox col66">
            <br />
            DPReview
            <br />
            <span>Digital Photography </span>
          </a>
          <a href="https://www.eastdane.com/welcome" className="servBox col16">
            <br />
            East Dane
            <br />
            <span>LDesigner Men's Fashion</span>
          </a>
          <a href="https://www.fabric.com/" className="servBox col26">
            <br />
            Fabric
            <br />
            <span>Sewing, Quilting & Knittings</span>
          </a>
          <a href="https://www.goodreads.com/" className="servBox col36">
            <br />
            Goodreads
            <br />
            <span>Book reviews & recommendations</span>
          </a>
          <a href="https://www.imdb.com/" className="servBox col46">
            <br />
            IMDb
            <br />
            <span>Movies, TV & Celebrities</span>
          </a>
          <a
            href="https://pro.imdb.com/?ref_=amzn_nav_ftr"
            className="servBox col56"
          >
            <br />
            IMDbPro
            <br />
            <span>Get Info Entertainment Professionals Need</span>
          </a>
          <a href="https://kdp.amazon.com/" className="servBox col66">
            <br />
            Kindle Direct Publishing
            <br />
            <span>Indie Digital & Print Publishing Made Easy</span>
          </a>
          <a
            href="https://videodirect.amazon.com/home/landing"
            className="servBox col16"
          >
            <br />
            Prime Video Direct
            <br />
            <span>Video Distribution Made Easy</span>
          </a>
          <a href="https://www.shopbop.com/welcome" className="servBox col26">
            <br />
            Shopbop
            <br />
            <span>Designer Fashion Brands</span>
          </a>
          <a href="https://www.woot.com/" className="servBox col36">
            <br />
            Woot!
            <br />
            <span>Deals and Shenanigans</span>
          </a>
          <a href="https://www.zappos.com/" className="servBox col46">
            <br />
            Zappos
            <br />
            <span>Shoes & Clothing</span>
          </a>
          <a href="https://ring.com/" className="servBox col56">
            <br />
            Ring
            <br />
            <span>Smart Home Security Systems</span>
          </a>
          <a href="https://eero.com/" className="servBox col66">
            <br />
            eero WiFi
            <br />
            <span>Stream 4K Video in Every Room</span>
          </a>
          <a
            href="https://blinkforhome.com/?ref=nav_footer"
            className="servBox col16"
          >
            <br />
            Blink
            <br />
            <span>Smart Security for Every Home</span>
          </a>
          <a
            href="https://shop.ring.com/pages/neighbors-app"
            className="servBox col26"
          >
            <br />
            Neighbors App
            <br />
            <span>Real-Time Crime & Safety Alerts</span>
          </a>
          <a
            href="https://www.amazon.com/gp/browse.html?node=14498690011&ref_=amzn_nav_ftr_swa"
            className="servBox col36"
          >
            <br />
            Amazon Subscription Boxes
            <br />
            <span>Top subscription boxes – right to your door</span>
          </a>
          <a href="https://www.pillpack.com/" className="servBox col46">
            <br />
            PillPack
            <br />
            <span>Pharmacy Simplified</span>
          </a>
          <a
            href="https://www.amazon.com/amazonsecondchance?ref_=footer_asc"
            className="servBox col56"
          >
            <br />
            Amazon Second Chance
            <br />
            <span>Pass it on, trade it in, give it a second life</span>
          </a>
        </div>
      </section>
      <section className="cradit">
        <div className="policy flex">
          <div className="links">
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088&ref_=footer_cou">
              Conditions of Use
            </a>
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy">
              Privacy Notice
            </a>
            <a href="https://www.amazon.com/interestbasedads/ref=footer_iba">
              Interest-Based Ads
            </a>
          </div>
          <p>&copy; 1996-{YEAR}, Amazon.com, Inc. or its affiliates</p>
        </div>
        <div className="credit">
          All UI Designs, images, information is from{" "}
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon.com
          </a>{" "}
          (April-2021) Created by &copy;
          <a
            href="http://akhlak-hossain-jim.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akhlak Hossain Jim
          </a>{" "}
          {YEAR}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
