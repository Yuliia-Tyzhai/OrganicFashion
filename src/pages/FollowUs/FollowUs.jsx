import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFollowUs } from '../../redux/content/selectors';
import { sendFormData } from '../../services/api';
import styles from './FollowUs.module.css';
import Container from '../../components/Container/Container';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FollowUs = () => {
  const followUsData = useSelector(selectFollowUs);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = event => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please, enter all fields!', {
        position: 'top-right',
      });
      return;
    }

    try {
      await sendFormData(formData);
      toast.success('Data successfully sent!', { position: 'top-right' });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('An error occurred. Please try again!', {
        position: 'top-right',
      });
    }
  };

  return (
    <section className={styles.followUs}>
      <Container>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>{followUsData.title}</h2>
          <form onSubmit={handleSubmit}>
            {followUsData.form.inputs.map(input => (
              <input
                key={input.id}
                id={input.id}
                type={input.id === 'email' ? 'email' : 'text'}
                placeholder={input.placeholder}
                value={formData[input.id]}
                onChange={handleChange}
                className={styles.input}
              />
            ))}
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default FollowUs;
