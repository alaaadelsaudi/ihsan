import React from 'react';
import FirstSection from '../sections/FirstSection';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const sendEmail = (values) => {
  emailjs
    .send('service_1ha25bq', 'template_9zsu6un', values, 'gzPzhnO6fh-4tNMN4')
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Message sent successfully!')
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message.')
      }
    );
};

export default function Contactus() {
  return (
    <>
      <FirstSection titlepage={'Contact Us'} spanpage={'Contact Us'} />
      <div>
        <div className='contact-cards'>
          <div className='contact-card'>
            <div className='contact-card-icon'>
              <div className='contact-card-title'>
                <span>
                  <img src="src/Components/imges/map.png" alt="" />
                </span>
                <h3>Our Location</h3>
              </div>
              <span>
                360 Warner Street.
                <br />
                Miami FL 33141 – USA
              </span>
            </div>
          </div>
          <div className='contact-card'>
            <div className='contact-card-icon'>
              <div className='contact-card-title'>
                <span>
                  <img src="src/Components/imges/phone-book.png" alt="" />
                </span>
                <h3>Phone us</h3>
              </div>
              <span>
                1-580-627-9870
                <br />
                123-0800-23011
              </span>
            </div>
          </div>
          <div className='contact-card'>
            <div className='contact-card-icon'>
              <div className='contact-card-title'>
                <span>
                  <img src="src/Components/imges/mail.png" alt="" />
                </span>
                <h3>Email us</h3>
              </div>
              <span>
                info@my-domain.com
                <br />
                masjid@my-domain.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='form-section'>
        <div className='form' >
          <h3>Send a Message</h3>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendEmail(values);
              resetForm(); 
            }}
          >
            <Form>
              <div>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <Field type="text" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <Field as="textarea" name="message" placeholder="Message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
              <button type="submit">Send Message</button>
            </Form>
          </Formik>
        </div>
        <div className='map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
            style={{border: '0px', height: '330px', width:"80%" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
