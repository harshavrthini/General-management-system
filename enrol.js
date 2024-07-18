document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollmentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const course = document.getElementById('course').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expiryDate = document.getElementById('expiryDate').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

       
        if (validateForm(fullName, email, course, cardNumber, expiryDate, cvv)) {
            
            console.log('Form submitted successfully');
        } else {
            console.log('Form validation failed');
        }
    });

    function validateForm(fullName, email, course, cardNumber, expiryDate, cvv) {
    
        if (fullName === '') {
            alert('Full Name is required');
            return false;
        }

        
        if (email === '') {
            alert('Email Address is required');
            return false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (course === '') {
            alert('Course is required');
            return false;
        }

      
        if (cardNumber === '') {
            alert('Card Number is required');
            return false;
        } else if (!validateCardNumber(cardNumber)) {
            alert('Please enter a valid card number');
            return false;
        }

        
        if (expiryDate === '') {
            alert('Expiry Date is required');
            return false;
        } else if (!validateExpiryDate(expiryDate)) {
            alert('Please enter a valid expiry date in MM/YY format');
            return false;
        }

        if (cvv === '') {
            alert('CVV is required');
            return false;
        } else if (!validateCVV(cvv)) {
            alert('Please enter a valid 3-digit CVV');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateCardNumber(cardNumber) {
        const re = /^\d{16}$/;
        return re.test(cardNumber);
    }

    function validateExpiryDate(expiryDate) {
        const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        return re.test(expiryDate);
    }

    function validateCVV(cvv) {
        const re = /^\d{3}$/;
        return re.test(cvv);
    }
});
