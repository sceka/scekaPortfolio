import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactLandingPage from "../components/ContactLandingPage/ContactLandingPage";
import Header from "../components/Header/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            <ContactLandingPage />
            <ContactForm />
        </div>
    );
};

export default Contact;
