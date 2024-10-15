import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | NextINX ",
  description: "This is Contact Page for NextINX ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Ready to elevate your digital presence? Let’s create something extraordinary together. Contact us today and take the next step toward innovation with NextINX."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
