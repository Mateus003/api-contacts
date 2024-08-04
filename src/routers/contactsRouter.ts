import express from 'express';
import ContactController from '../controllers/contactController';

const router =  express.Router();

router.get('/contacts', ContactController.getContacts);

router.post('/contact', ContactController.createContact);

router.delete('/contact/', ContactController.deleteContact);

router.get('/contact', ContactController.searchContact);

export default router;