'use client';

import { Alert, ArrowRight, GitHub, LinkedIn, Sucess, Whatsapp } from '@/icons';
import { Button, Toast } from '@/components';

import axios from 'axios';
import style from './Contact.module.css';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sucess, setSucess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post('/api/sendEmail', { name, email, message });
      setSucess('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Failed to send email. Please try again.');
    }
  };

  return (
    <section className={style.contact} id="contact">
      <div className={style.contact_container}>
        <div className={style.contact_container_box}>
          <div className={style.contact_info}>
            <h4 className={style.contact_info_title} data-aos="fade-up" data-aos-duration="550">
              CONTACT ME
            </h4>

            <ul className={style.contact_info_ul}>
              <li className={style.contact_info_ul_li} data-aos="fade-up" data-aos-duration="550">
                <a href="https://github.com/jlsoliveira" target="_blank" rel="noopener noreferrer">
                  <div className={style.contact_info_text}>
                    <div className={style.contact_info_text_icon}>
                      <GitHub />
                    </div>
                    <p className="break-all">https://github.com/jlsoliveira</p>
                  </div>
                </a>
              </li>
              <li className={style.contact_info_ul_li} data-aos="fade-up" data-aos-duration="550">
                <a href="https://www.linkedin.com/in/jlsoliveira/" target="_blank" rel="noopener noreferrer">
                  <div className={style.contact_info_text}>
                    <div className={style.contact_info_text_icon}>
                      <LinkedIn />
                    </div>
                    <p className="break-all">https://www.linkedin.com/in/jlsoliveira/</p>
                  </div>
                </a>
              </li>
              <li className={style.contact_info_ul_li} data-aos="fade-up" data-aos-duration="550">
                <a href="https://wa.me/5554981289760" target="_blank" rel="noopener noreferrer">
                  <div className={style.contact_info_text}>
                    <div className={style.contact_info_text_icon}>
                      <Whatsapp />
                    </div>
                    <p>(54) 98128-9760</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.contact_form} data-aos="zoom-in" data-aos-duration="550">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={style.contact_form_label}>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={style.contact_form_input}
                />
              </div>
              <div>
                <label className={style.contact_form_label}>E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={style.contact_form_input}
                />
              </div>
              <div>
                <label className={style.contact_form_label}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={style.contact_form_textarea}
                />
              </div>
              <Button type="submit" title="Send Message" icon={<ArrowRight />} />

              {sucess && <Toast type="success" message={sucess} icon={<Sucess />} />}
              {error && <Toast type="error" message={error} icon={<Alert />} />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
